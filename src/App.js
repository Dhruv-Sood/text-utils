// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <TextForm heading="Enter the text you Want To Perform Actions On"/>
      </div>
    </div>
  );
}

export default App;
