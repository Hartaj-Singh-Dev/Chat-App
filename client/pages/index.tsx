import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="This is Chat app " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
