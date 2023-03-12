// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //Whether darkmode is enabled or not

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    } else {
      setMode("dark");
      
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
    }
  };
  const [textColor, setTextColor] = useState("dark");

  const textColorHandle = () => {
    setTextColor(textColor == "dark" ? "light" : "dark");
    console.log(textColor);
  };
  return (
    <div>
      <Navbar
        name="Text-Utils"
        mode={mode}
        toggleMode={toggleMode}
        textColorHandle={textColorHandle}
        textColor={textColor}
      />



      <div className="container">
        <TextForm
          heading="Enter the text you Want To Perform Actions On"
          mode={mode}
          toggleMode={toggleMode}
          textColorHandle={textColorHandle}
          textColor={textColor}
        />
      </div>
      <br></br>

    </div>
  );
}

export default App;
