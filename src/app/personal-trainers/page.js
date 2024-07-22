import Link from 'next/link';

async function getPages() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages`,
		{ cache: 'no-store' } // to ensure the fetch happens on every request
	);
	const pages = await response.json();
	return pages;
}

const Pages = async () => {
	const pages = await getPages();

	return (
		<div className="pages">
			<h2>All Pages</h2>
			<p>All pages are fetched from WordPress via the WP REST API.</p>
			<div className="pages-list">
				{pages.map((page) => (
					<Link href={`/pages/${page.id}`} className="page" key={page.id}>
						<h3>{page.title.rendered}</h3>
						<p dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}></p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Pages;
