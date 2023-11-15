import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function TitleLayout({ children, title }: Props) {
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main className="">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </Fragment>
  );
}
