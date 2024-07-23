"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner"; // Adjust the import path as needed

async function fetchPersonalTrainers() {
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

  // Check if the response contains the expected data
  if (!json.data || !json.data.personalTrainers) {
    throw new Error("Unexpected response structure");
  }

  return json.data.personalTrainers.edges.map((edge) => edge.node);
}

const PersonalTrainersPage = () => {
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPersonalTrainers()
      .then((data) => setTrainers(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const backgroundImage = "https://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/DowntownColoradoSprings-Background-Image-scaled.webp";
  const title = "Meet our Personal Trainers";

  return (
    <div className="flex flex-col items-center">
      <HeroBanner backgroundImage={backgroundImage} title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 container">
        {trainers.map((trainer) => (
          <Link
            href={`/personal-trainer/${trainer.slug}`}
            key={trainer.slug}
            className="block w-full h-full rounded-xl border border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="h-full flex flex-col justify-start items-start">
              <div className="w-full h-auto border-b-4 border-blue-500 flex justify-center items-center">
                <img
                  className="w-full h-full object-cover rounded-t-xl aspect-square"
                  src={
                    trainer.personalTrainersData.trainerPhoto?.node
                      ?.mediaItemUrl || "https://via.placeholder.com/276x194"
                  }
                  alt={`${trainer.personalTrainersData.firstName} ${trainer.personalTrainersData.lastName}`}
                />
              </div>
              <div className="flex-grow p-4 flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-gray-800 text-base font-medium leading-normal tracking-wide">
                    {`${trainer.personalTrainersData.firstName} ${trainer.personalTrainersData.lastName}`}
                  </h3>
                  <p className="text-gray-500 text-sm font-normal leading-tight tracking-tight">
                    {trainer.personalTrainersData.trainerLocation}
                  </p>
                </div>
                <div className="flex justify-end items-center gap-2 mt-4">
                  <button className="h-10 bg-blue-700 rounded-full flex justify-center items-center px-6 py-2.5">
                    <span className="text-white text-sm leading-tight tracking-tight">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonalTrainersPage;
