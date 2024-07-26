export const dynamicParams = true;

export async function generateStaticParams() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages`
	);
	const pages = await response.json();
	
	console.log('Pages response:', pages); // Log the response here

	return pages.map((page) => ({
		pageId: page.id.toString(),
	}));
}

async function getSinglePage(pageId) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages/${pageId}`
	);
	const page = await response.json();
	
	console.log('Single page response:', page); // Log the response here

	return page;
}

const Page = async ({ params }) => {
	const page = await getSinglePage(params.pageId);

	if (!page) {
		return <div>Loading...</div>;
	}

	return (
		<div className="single-page">
			<h2>{page.title.rendered}</h2>
			<div className="page-content">
				<div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
			</div>
		</div>
	);
};

export default Page;
