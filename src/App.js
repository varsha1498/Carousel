import "./style.css";
import Carousel from "./components/Carousel";
import Img1 from "./images/img1.jpg";
import Img2 from "./images/img2.jpg";
import Img3 from "./images/img3.jpg";
import Img4 from "./images/img4.jpg";

function App() {
  const ImageData = [
    {
      image: Img1,
    },
    {
      image: Img2,
    },
    {
      image: Img3,
    },
    {
      image: Img4,
    },
  ];

  const time = 6000;
  return (
    <div className="App">
      <div className="main-container">
        <Carousel data={ImageData} time={time} />
      </div>
    </div>
  );
}

export default App;
