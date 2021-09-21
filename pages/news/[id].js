import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Feed.module.css';

import { NewsCard } from '../../components/NewsCard';

export const News = ({ articles, pageNumber }) => {
	const router = useRouter();
	// console.log('articles1: ', articles[0]);
	return articles.length ? (
		<>
			<Head>
				{/* <meta property="og:image" content={articles[0]?.urlToImage} />
				<meta property="og:description" content={articles[0]?.description} />
				<meta property="og:title" content={articles[0]?.title + ' and more!'} /> */}
			</Head>
			<div className="page-container">

				<div className={styles.main}>
					{articles.map((article, index) => (
						<NewsCard key={index} article={article} />
					))}
				</div>

				<div className={styles.paginator}>
					<div
						className={pageNumber === 1 ? styles.disabled : styles.active}
						onClick={() => {
							if (pageNumber > 1) {
								router.push(`/news/${pageNumber - 1}`);
							}
						}}
					>
						Prev
					</div>

					<div>{pageNumber}</div>

					<div
						className={pageNumber === 10 ? styles.disabled : styles.active}
						onClick={() => {
							if (pageNumber < 10) {
								router.push(`/news/${pageNumber + 1}`);
							}
						}}
					>
						Next
					</div>
				</div>
			</div>
		</>
	) : (
		<div className="page-container">
			<div className={styles.main}>
				<h1>No articles</h1>
			</div>
		</div>
	);
};

export const getServerSideProps = async (pageContext) => {
	const pageNumber = pageContext.query.id;

	if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			},
		};
	}

	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=fr&pageSize=10&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
			},
		}
	).then((res) => res.json());

	const { articles } = apiResponse;

	return {
		props: {
			articles: articles,
			pageNumber: +pageNumber,
		},
	};
};

export default News;