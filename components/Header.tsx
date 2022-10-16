import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky bg-red-100 top-0 flex items-start justify-between">
      <div className="flex flex-row items-center">
        {/* Social icons */}
        <SocialIcon
          url="https://linkedin.com/in/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/tderuvo"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      {/* Right side of the header section with email icon*/}
      <div className="flex flex-row items-center text-gray-400 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div>
    </header>
  );
}
