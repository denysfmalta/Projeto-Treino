import "./App.css";
import Image from "./components/Image";
import Text from "./components/Text";
import Stepper from "./components/Stepper";
import Image1 from "./images/Image1.svg";
import Image2 from "./images/Image2.svg";
import Image3 from "./images/Image3.svg";

function App() {
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

  return (
    <div className="App">
      <Image img={Image1} />
      <Text 
      title={Texts[0].title}
      content={Texts[0].content} 
      />
      <Stepper />
    </div>
  );
}

export default App;
