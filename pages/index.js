import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import * as amplitude from "@amplitude/analytics-browser";
import { useEffect } from "react";

export default function Home({ repositories }) {
  amplitude.track("Home test");

  const handleClick = () => {
    amplitude.track("Button in home");
    console.log("first click");
  };

  return (
    <ContainerBlock
      title="Manu Arora - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
      <div className="flex flex-row justify-center items-start overflow-hidden">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="button"
          onClick={handleClick}
        >
          Click Me
        </button>
      </div>
      <form id="subscriber-form" name="subscriber-form" action="/experience">
        <input type="text" />
        <input type="submit" />
      </form>
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
