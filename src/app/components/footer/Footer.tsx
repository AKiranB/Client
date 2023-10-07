export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6  border-white bg-gray-700">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="https://flowbite.com/" className="hover:underline">Made with love by Kiran Boyle</a>            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">

                <li>
                    <a href="https://github.com/AKiranB" className="mr-4 hover:underline md:mr-6">Github</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    )
}