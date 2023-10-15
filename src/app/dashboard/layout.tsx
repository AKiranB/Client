import NavWrapper from "../../components/nav/NavWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <NavWrapper loggedInUser={true} />
        <main className="flex min-h-screen flex-col items-center">
            {children}
        </main>
    </>
}