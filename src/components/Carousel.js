import React, { useEffect, useState } from "react";
import "../style.css";

function Carousel(props) {
  const [slide, setSlide] = useState(0);
  const arr = props.data;
  const length = arr.length;
  const data = arr[slide];
  let timer = null;

  function timerCall() {
    timer = setTimeout(() => {
      const next = (slide + 1) % length;
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
          onClick={() => {
            if (slide !== 0) setSlide(slide - 1);
            else setSlide(length - 1);
          }}
        >
          &lt;
        </button>
        <div>
          <img className="carousel-image" src={data.image} />
          <div className="image-btns">
            {arr.map((data, index) => {
              var cssClass = "access-btn";
              if (index == slide) {
                cssClass = "access-btn-active";
              }
              return (
                <>
                  <button
                    className={cssClass}
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
          onClick={() => {
            setSlide((slide + 1) % length);
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
}

export default Carousel;
