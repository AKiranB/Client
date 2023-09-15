import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  const items = ["Home", "About", "Contact"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav items={items} />
    </main>
  );
}
