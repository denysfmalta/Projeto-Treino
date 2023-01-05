import "./App.css";
import Image from "./components/Image";
import Text from "./components/Text";
import Stepper from "./components/Stepper";
import Image1 from "./images/Image1.svg";
import Skip from "./components/Skip";
import Button from "./components/Button";
import Image2 from "./images/Image2.svg";
import Image3 from "./images/Image3.svg";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const pageHandler = () => {
    setPage((prevPage) => {
      if(prevPage === 3) return prevPage - 2;
  
      return prevPage + 1;
    });
  };
  const Texts = [
    {
      title: "Plant lover Community",
      content: "Find gardening enthusiasts from all over the world",
    },

    {
      title: "Get fast & safe delivery",
      content: "Get good quality products for your plants",
    },
    {
      title: "Buy & Sell Tools",
      content: "Buy & sell good quality products for your beautiful plants",
    },
  ];

  const Btn = ["Continue", "Get started"];

  return (
    <>
      {(page === 1 || page > 3) && (
        <div className="App">
          <Image className="img1" img={Image1} />
          <Text title={Texts[0].title} content={Texts[0].content} />
          <Stepper />
          <Button btntext={Btn[0]} onPageHandler={pageHandler} />
          <Skip />
        </div>
      )}
      {page === 2 && (
        <div className="App">
          <Image className="img1" img={Image2} />
          <Text title={Texts[1].title} content={Texts[1].content} />
          <Stepper />
          <Button btntext={Btn[0]} onPageHandler={pageHandler} />
          <Skip />
        </div>
      )}
      {page === 3 && (
        <div className="App">
          <Image className="img1" img={Image3} />
          <Text title={Texts[2].title} content={Texts[2].content} />
          <Stepper />
          <Button btntext={Btn[1]} onPageHandler={pageHandler} />
        </div>
      )}
    </>
  );
}

export default App;
