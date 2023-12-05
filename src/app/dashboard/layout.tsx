"use client";
import NavWrapper from "../../components/nav/NavWrapper";
import TitleLayout from "../../components/title-layout/TitleLayout";
import { useStore } from "../../store";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useStore((state) => state.user);
  console.log(user);

  return (
    <>
      <NavWrapper loggedInUser={true} />
      <TitleLayout title="Dashboard">{children}</TitleLayout>
    </>
  );
}
