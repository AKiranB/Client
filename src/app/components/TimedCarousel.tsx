import Image from "next/image";
interface TimedCarouselProps {
  images: string[];
  interval: number;
}

export default function TimedCarousel() {
  return (
    <Image
      src={"/kiran.jpg"}
      alt="functionality of the app"
      width={32}
      height={32}
    />
  );
}
