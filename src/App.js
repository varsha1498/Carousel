import "./App.css";
import "./style.css";
import Main from "./components/Carousel";
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

  console.log({ Img1 });
  return (
    <div className="App">
      <div className="main-container">
        <h1>Image Library</h1>
        <Main data={ImageData} />
      </div>
    </div>
  );
}

export default App;
