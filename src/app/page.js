import Link from "next/link";

async function fetchHeroCards() {
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
  return json.data.page.homepage.homepageHeroCards;
}

const Hero = async () => {
  const homepageHeroCards = await fetchHeroCards();

  return (
    <section>
      <div
        className="relative w-full min-h-[75vh] bg-cover bg-center lg:bg-[center_top_-5rem] bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://ymcanext.kinsta.cloud/wp-content/uploads/2024/07/Homepage-Hero-Background.jpeg')",
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-boldC uppercase leading-tight">
            Find your y today
          </h1>
          <div className="flex flex-wrap justify-center mt-10 gap-6">
            {homepageHeroCards.map((card, index) => (
              <div
                key={index}
                className={`w-64 p-6 ${getCardBgColor(
                  index
                )} bg-opacity-60 rounded-xl flex flex-col items-center text-center backdrop-blur-sm`}>
                <h2 className="text-2xl font-medium font-bookC mb-2">
                  {card.title}
                </h2>
                <p className="text-xs font-normal font-verdana mb-4">
                  {card.innerContent}
                </p>
                <Link href={card.buttonLink}>
                  <button className="inline-flex items-center justify-center px-6 py-2.5 border border-white rounded-full text-sm font-bookC leading-tight tracking-tight">
                    {card.buttonTitle}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function getCardBgColor(index) {
  const colors = ["bg-fuchsia-700", "bg-red-600", "bg-teal-600", "bg-sky-950"];
  return colors[index % colors.length];
}

export default Hero;
