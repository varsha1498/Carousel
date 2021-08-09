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

  function timerCall() {
    timer = setTimeout(() => {
      const next = (slide + 1) % length;
      console.log("interval", next);
      setSlide(next);
    }, props.time);
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
        <div>
          <img
            src={data.image}
            style={{
              height: "400px",
              width: "500px",
              transition: " width 2s, height 4s",
            }}
          />
          <div className="image-btns">
            {arr.map((data, index) => {
              return (
                <>
                  <button
                    className="access-btn"
                    key={index}
                    id={index}
                    onClick={(e) => setSlide(e.target.id)}
                  ></button>
                </>
              );
            })}
          </div>
        </div>

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
