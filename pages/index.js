import Head from 'next/head'

const Home = () => {
  return (
    <div className="p-10">
			<Head>
				<title>Data List</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <div>
        <h1>Next.js News App</h1>

        <h3>News Articles</h3>
      </div>
    </div>
  );
}

export default Home;