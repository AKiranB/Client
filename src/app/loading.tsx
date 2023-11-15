import Spinner from "../components/spinner/spinner";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-32">
        <Spinner />
      </div>
    </div>
  );
}
