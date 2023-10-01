
import TickSVG from "./components/TickSVG";
import { getClient } from "@/lib/getClient";
import { gql } from "@apollo/client";

const query = gql`query FindAllUsers {
  findAllUsers {
    _id
    name
    email
    password
  }
}`;

export default async function Home() {
  const client = getClient()
  const { data } = await client.query({ query })
  console.log(data);
  const items = ["Home", "About", "Contact"];
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="mb-4 mt-24 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Challenge Yourself
          </span>{" "}
          <br />
          Everyday
        </h1>
        <div className="flex justify-start min-w-screen">
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 text-1xl ml-2">
            <li className="flex items-center space-x-3">
              <TickSVG timeout={250} />
              <span>Schedule Workouts</span>
            </li>
            <li className="flex items-center space-x-3 text-bold">
              <TickSVG timeout={500} />
              <span>Report Outcomes</span>
            </li>
            <li className="flex items-center space-x-3">
              <TickSVG timeout={750} />
              <span>Track Progress</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
