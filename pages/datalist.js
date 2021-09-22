import Image from 'next/image';
import Head from 'next/head';

const DataList = ({ dataBlock }) => {
	return (
		<div className="p-10">
			<Head>
				<title>API Data List</title>
        <meta property="og:title" content="data from database" key="title"/>
			</Head>
			<div className="max-w-sm overflow-hidden rounded shadow-lg">
				{/* image */}
				<Image width="400px" height="400px" src={dataBlock.image} alt="data" />
				<div className="px-6 py-4">
					<div className="mb-2 text-xl font-bold">{dataBlock.title}</div>
					<p className="text-base text-gray-700">{dataBlock.description}</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
						{dataBlock.subtitle}
					</span>
					<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
						#travel
					</span>
					<span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
						#winter
					</span>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async (pageContext) => {
	const apiResponse = await fetch(
		'https://my-json-server.typicode.com/AndrewJBateman/next-tailwind-api/dataSetExample'
	);

	const dataBlock = await apiResponse.json();

	return {
		props: {
			dataBlock,
		},
	};
};

export default DataList