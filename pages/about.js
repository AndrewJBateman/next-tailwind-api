import Head from 'next/head'

export const About = () => {
  return (
    <div className="p-10">
			<Head>
				<title>Data List</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <div>
        <h1>About</h1>
      </div>
    </div>
  );
}

export default About;