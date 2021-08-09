import React, { useEffect, useState } from "react";
import "../style.css";

function Main(props) {
  const [slide, setSlide] = useState(0);
  const arr = props.data;
  const length = arr.length;
  const data = arr[slide];
  let timer = null;
  let isFirst = true;
  let isLast = slide === length - 1 ? true : false;
  if (slide !== 0) {
    isFirst = false;
  } else {
    isFirst = true;
  }
  console.log("out");

  function timerCall() {
    timer = setTimeout(() => {
      const next = (slide + 1) % length;
      console.log("interval", next);
      setSlide(next);
    }, 5000);
  }

  useEffect(() => {
    timerCall();
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <>
      <div className="carousel-main">
        <button
          className="carousel-btn"
          disabled={isFirst}
          onClick={() => {
            if (slide !== 0) setSlide(slide - 1);
          }}
        >
          &lt;
        </button>
        <img
          src={data.image}
          style={{
            height: "400px",
            width: "500px",
            transition: " width 2s, height 4s",
          }}
        />

        <button
          className="carousel-btn"
          disabled={isLast}
          onClick={() => {
            if (slide !== length - 1) setSlide(slide + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default Main;
