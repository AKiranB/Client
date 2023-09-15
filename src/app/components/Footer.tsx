export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 0">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Created By Kiran Boyle -{" "}
        <a href="https://github.com/AkiranB" className="hover:underline">
          Github
        </a>
        .
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
