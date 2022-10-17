import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Tony's me name", "I love coffee not tea", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1 className="text-center">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
