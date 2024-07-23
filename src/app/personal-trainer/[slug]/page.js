import { notFound } from 'next/navigation';
import HeroBanner from '@/app/components/HeroBanner';

async function fetchPersonalTrainer(slug) {
  const res = await fetch("https://ymcanext.kinsta.cloud/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query PersonalTrainer($slug: ID!) {
          personalTrainer(id: $slug, idType: SLUG) {
            personalTrainersData {
              areasISpecializeIn
              degreesAndCertifications
              firstName
              interestsAndAchievements
              jobTitle
              lastName
              myTrainingPhilosophy
              trainerLocation
              trainerPhoto {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      `,
      variables: { slug },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();
  return json.data.personalTrainer?.personalTrainersData || null;
}

export async function generateStaticParams() {
  const res = await fetch("https://ymcanext.kinsta.cloud/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query PersonalTrainers {
          personalTrainers(first: 100) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();

  if (!json.data || !json.data.personalTrainers) {
    console.error("Unexpected response structure:", json);
    throw new Error("Unexpected response structure");
  }

  const trainers = json.data.personalTrainers.edges.map(edge => edge.node);

  return trainers.map(trainer => ({
    slug: trainer.slug,
  }));
}

const PersonalTrainerPage = async ({ params }) => {
  const trainer = await fetchPersonalTrainer(params.slug);

  if (!trainer) {
    notFound();
  }

  const { firstName, lastName, jobTitle, areasISpecializeIn, degreesAndCertifications, interestsAndAchievements, myTrainingPhilosophy, trainerLocation, trainerPhoto } = trainer;

  return (
    <div className="single-page">
      <HeroBanner title={`${firstName} ${lastName}`} />
      <h2>{`${firstName} ${lastName}`}</h2>
      <div className="page-content container">
        {trainerPhoto?.node?.mediaItemUrl && (
          <img src={trainerPhoto.node.mediaItemUrl} alt={`${firstName} ${lastName}`} />
        )}
        <p>{jobTitle}</p>
        <div>
          <h3>Areas I Specialize In</h3>
          <p>{areasISpecializeIn}</p>
        </div>
        <div>
          <h3>Degrees and Certifications</h3>
          <p>{degreesAndCertifications}</p>
        </div>
        <div>
          <h3>Interests and Achievements</h3>
          <p>{interestsAndAchievements}</p>
        </div>
        <div>
          <h3>My Training Philosophy</h3>
          <p>{myTrainingPhilosophy}</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{trainerLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainerPage;
