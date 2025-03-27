import { SpotifyBadge } from "../components/SpotifyBadge";
import SEO from "../components/SEO";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicIndexContent = dynamic(() =>
  import("../components/IndexContent")
);

export default function Splash() {
  useEffect(() => {
    // set localstorage theme according to global preference
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/spotify", fetcher);

  return (
    <div className="overflow-hidden font-['Fira_Sans'] w-screen min-h-screen dark:text-white bg-white dark:bg-neutral-900 flex flex-col justify-center items-center transition-all ease-in-out">
      <SEO title="aaanh 👾"></SEO>
      <div className="relative p-8 flex flex-col flex-wrap justify-center items-center min-h-[80vh] sm:border sm:min-h-[70vh] min-w-[50vw] rounded-md dark:sm:shadow-[8px_8px_0px_1px_rgba(6,182,212,.9)] sm:shadow-[8px_8px_0px_1px_#8b5cf6] dark:border-neutral-600 border-neutral-200 ">
        <DynamicIndexContent></DynamicIndexContent>
        <div className="mt-4">
          <SpotifyBadge data={data}></SpotifyBadge>
        </div>
      </div>
    </div>
  );
}
