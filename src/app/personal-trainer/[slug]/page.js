import { notFound } from 'next/navigation';

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

  // Log the entire response to understand its structure
  console.log("Response JSON:", JSON.stringify(json, null, 2));

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

  return (
    <div className="single-page">
      <h2>{`${trainer.firstName} ${trainer.lastName}`}</h2>
      <div className="page-content">
        <img src={trainer.trainerPhoto.node.mediaItemUrl} alt={`${trainer.firstName} ${trainer.lastName}`} />
        <p>{trainer.jobTitle}</p>
        <div>
          <h3>Areas I Specialize In</h3>
          <p>{trainer.areasISpecializeIn}</p>
        </div>
        <div>
          <h3>Degrees and Certifications</h3>
          <p>{trainer.degreesAndCertifications}</p>
        </div>
        <div>
          <h3>Interests and Achievements</h3>
          <p>{trainer.interestsAndAchievements}</p>
        </div>
        <div>
          <h3>My Training Philosophy</h3>
          <p>{trainer.myTrainingPhilosophy}</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{trainer.trainerLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainerPage;
