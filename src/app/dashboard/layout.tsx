import NavWrapper from "../../components/nav/NavWrapper";
import TitleLayout from "../../components/title-layout/TitleLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavWrapper loggedInUser={true} />
      <TitleLayout title="Dashboard">{children}</TitleLayout>
    </>
  );
}
