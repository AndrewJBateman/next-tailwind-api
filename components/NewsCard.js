export const NewsCard = ({article}) => {
	return (
		<div className="">
			<h1
				className="font-bold text-xl mb-2"
				onClick={() => (window.location.href = article.url)}
			>
				{article.title}
			</h1>
			<p className="text-gray-700 text-base">{article.description}</p>
			{!!article.urlToImage && (
				// <Image src={article.urlToImage} alt="news article" />
				<img src={article.urlToImage} alt="news article"/>
			)}
		</div>
	);
};

export default NewsCard;
