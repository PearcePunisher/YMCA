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
      query PersonalTrainers {
        personalTrainers(first: 100) {
          edges {
            node {
              slug
              personalTrainersData {
                firstName
                lastName
                jobTitle
                areasISpecializeIn
                degreesAndCertifications
                interestsAndAchievements
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
        }
      }
      `,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();
  const trainers = json.data.personalTrainers.edges.map(edge => edge.node);
  return trainers.find(trainer => trainer.slug === slug)?.personalTrainersData || null;
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
  const {
    firstName,
    lastName,
    jobTitle,
    areasISpecializeIn,
    degreesAndCertifications,
    interestsAndAchievements,
    myTrainingPhilosophy,
    trainerLocation,
    trainerPhoto
  } = trainer || {};

  const backgroundImage = "https://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/DowntownColoradoSprings-Background-Image-scaled.webp";
  const title = jobTitle ? `${jobTitle} // ${firstName} ${lastName}` : `${firstName} ${lastName}`;

  return (
    <div className="single-page">
      <HeroBanner backgroundImage={backgroundImage} title={title} />
      <div className="page-content container mx-auto px-4 py-20 flex-row flex lg:flex-nowrap flex-wrap gap-8 lg:gap-20">
        {trainerPhoto?.node?.mediaItemUrl && (
          <img className="h-auto rounded-xl mb-8 w-full lg:w-auto" src={trainerPhoto.node.mediaItemUrl} alt={`${firstName} ${lastName}`} />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Areas I Specialize In</h3>
            <p className="text-sm text-gray-700">{areasISpecializeIn}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Degrees and Certifications</h3>
            <p className="text-sm text-gray-700">{degreesAndCertifications}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Interests and Achievements</h3>
            <p className="text-sm text-gray-700">{interestsAndAchievements}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">My Training Philosophy</h3>
            <p className="text-sm text-gray-700">{myTrainingPhilosophy}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Location</h3>
            <p className="text-sm text-gray-700">{trainerLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainerPage;
