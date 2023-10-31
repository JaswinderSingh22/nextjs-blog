import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to My Portfolio!</h1>
        {/* Your content here */}
      </main>
    </div>
  );
}
