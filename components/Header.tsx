import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div>
        {/* Social icons */}
        <SocialIcon url="https://linkedin.com/in/jaketrent" />
      </div>
    </header>
  );
}
