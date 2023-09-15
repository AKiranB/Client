import Nav from "./components/Nav";

export default function Home() {
  const items = ["Home", "About", "Contact"];
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <h1 className="mb-4 mt-24 text-6xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Challenge Yourself
          </span>{" "}
          <br />
          Everyday
        </h1>
        <div className="flex justify-start min-w-screen ml-2 mt-8">
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 text-1xl">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Schedule Workouts</span>
            </li>
            <li className="flex items-center space-x-3 text-bold">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Report Outcomes</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Track Progress</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
