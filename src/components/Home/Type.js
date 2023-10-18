import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student at VIT CHENNAI",
          "Third Year Student",
          "Intrested In Web Development",
          "Passionate coder, web enthusiast 🚀"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
