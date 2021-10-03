import { Link } from "react-router-dom";
//@ts-ignore
import Head from "@innatical/inn.ts/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Inn.ts</title>
      </Head>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col gap-2">
          <div className="flex">
            <img
              src="/innatical.svg"
              alt="Innatical Logo"
              width="75"
              height="75"
              className="my-auto mx-auto"
            />
          </div>
          <h1 className="font-bold text-2xl text-center">Welcome to Inn.ts!</h1>
          <p>An awesome framework for making React apps by Innatical.</p>

          <div className="flex flex-row justify-evenly text-inndigo">
            <Link to="/docs">Documentation</Link>
            <a href="https://github.com/innatical/inn.ts">Fork us on GitHub!</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
