import LocationSelection from "./LocationSelection.js";

async function fetchYsecData() {
  const res = await fetch("https://ymcanext.kinsta.cloud/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query HomepageHero {
          page(id: "164", idType: DATABASE_ID) {
            homepage {
              homepageHeroCards {
                buttonLink
                buttonTitle
                innerContent
                title
              }
              heroBackgroundImage {
                node {
                  mediaItemUrl
                }
              }
              findYourYBackgroundImage {
                node {
                  mediaItemUrl
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
  const homepage = json.data.page.homepage;
  return {
    homepageHeroCards: homepage.homepageHeroCards,
    heroBackgroundImage: homepage.heroBackgroundImage.node.mediaItemUrl,
    findYourYBackgroundImage:
      homepage.findYourYBackgroundImage.node.mediaItemUrl,
  };
}

const FindYourYSection = async () => {
  const { homepageHeroCards, heroBackgroundImage, findYourYBackgroundImage } =
    await fetchYsecData();
  return (
    <section className="FindYourYSection font-bookC">
      <div className="w-full h-auto py-12  bg-slate-50 flex flex-col lg:flex-row justify-center items-center gap-8">
        <div
          className="w-full lg:w-1/2 h-full p-12 sm:rounded-tr-xl sm:rounded-br-xl flex flex-col justify-center items-start gap-2.5 min-h-[551px] bg-slate-400 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${findYourYBackgroundImage})`,
          }}>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-bookC uppercase leading-tight">
            Find your Y
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6">
          <div className="flex flex-col justify-center items-start gap-6">
            <LocationSelection />
            <div className="w-full p-6 bg-gray-100 rounded-xl flex flex-col justify-center items-start gap-4">
              <h3 className="text-slate-900 text-xl font-medium font-bookC leading-7">
                Upcoming Events & Classes
              </h3>
              <div className="w-full flex flex-col gap-6">
                <div className="flex gap-6">
                  <img
                    className="w-48 h-28 rounded-xl"
                    src="https://via.placeholder.com/194x104"
                    alt="Event"
                  />
                  <div className="flex flex-col gap-2">
                    <button className="rounded-lg border border-zinc-500 px-4 py-1.5 text-zinc-900 text-sm font-bookC leading-tight tracking-tight">
                      Next Class
                    </button>
                    <p className="text-zinc-900 text-base font-bookC tracking-wide">
                      Swimming Classes
                    </p>
                    <p className="text-zinc-700 text-sm font-normal font-['Verdana'] tracking-tight">
                      Briargate, 1:00 p.m. - 2:00 p.m.
                    </p>
                    <hr className="w-24 border-slate-900" />
                  </div>
                </div>
                <div className="flex gap-6">
                  <img
                    className="w-48 h-28 rounded-xl"
                    src="https://via.placeholder.com/194x105"
                    alt="Event"
                  />
                  <div className="flex flex-col gap-2">
                    <button className="rounded-lg border border-zinc-500 px-4 py-1.5 text-zinc-900 text-sm font-bookC leading-tight tracking-tight">
                      Next Event
                    </button>
                    <p className="text-zinc-900 text-base font-bookC tracking-wide">
                      Family Daughter Dance
                    </p>
                    <p className="text-zinc-700 text-sm font-normal font-['Verdana'] tracking-tight">
                      Briargate, 1:00 p.m. - 2:00 p.m.
                    </p>
                    <hr className="w-24 border-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourYSection;
