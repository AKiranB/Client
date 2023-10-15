import Image from "next/image";
import { Fragment } from "react";

export default function Avatar() {
  return (
    <Fragment>
      <img
        alt="avatar"
        id="avatarButton"
        typeof="button"
        className="w-12 h-12 rounded-full cursor-pointer border-2 border-gray-100 hover:border-gray-400 flex-shrink-0"
        src="/dog.png"
      />
    </Fragment>
  );
}
