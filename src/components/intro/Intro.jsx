import { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 50,
      showCursor: true,
      strings: [" Developer", " Designer", " Project Manager"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="main__logo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Adebanjo Daniel</h1>
          <h3>
            Freelance
            <span ref={textRef}>Designer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow_down" />
        </a>
      </div>
    </div>
  );
}
