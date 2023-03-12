import PropTypes from "prop-types";
import { useState } from "react";
import './TextForm.css'
// const TextForm = (props) => {
//     const [text , setText] = useState('Enter text here');

//     const UpHandle = () => {
//         console.log('Uppercase was clicked!!')
//         const newText = text.toUpperCase()
//         setText(newText)
//     }

//     const handleOnChange = (event)=>{
//         console.log('On Change')
//         setText(event.target.value)
//     }

//   return (
//     <div>
//       <h2>{props.heading}</h2>
//       <div className="mb-3">
//         <textarea
//           className="form-control"
//           id="exampleFormControlTextarea1"
//           rows="8" value={text} onChange={handleOnChange}
//         ></textarea>
//       </div>

//       <button className="btn btn-primary" onClick={UpHandle}>Upper case</button>
//     </div>
//   );
// };

const TextForm = (props) => {
  const [text, setText] = useState("");

  const onChangeHandle = (event) => {
    setText(event.target.value);

  };

  const upperCaseHandle = () => {
    setText(text.toUpperCase());
  };

  const lowerCaseHandle = () => {
    setText(text.toLowerCase());
  };

  const hashtagHandle = ()=>{
     
    setText('#'+text.replace(/\s/g , " #"))
  }

    const clearTextHandle = ()=>{
        setText("")
    }
  return (
    <>
    <div className={`{container text-${props.textColor}}`} id="clear">
    <div className="row justify-content-center">
            <button className={`btn btn-danger mb-2`} onClick={clearTextHandle}>Clear text</button></div>
    </div>
      <div className={`container-lg mb-3 text-${props.textColor}`} >
        
        
        <textarea
          className={`form-control`}
          id="exampleFormControlTextarea1"
          rows="8" value={text} placeholder="Enter text here...."
          onChange={onChangeHandle}
          style={props.mode === 'dark' ? {backgroundColor: '#484d52',borderColor: "grey",color: "white"} : {backgroundColor: 'white'}}
        ></textarea>

        <button className="btn btn-primary mt-1" onClick={upperCaseHandle}>
          UpperCase
        </button>

        <button className="btn btn-danger ms-1 mt-1" onClick={lowerCaseHandle}>
          LowerCase
        </button>

        <button className="btn mt-1 ms-1" id="btn-aqua" onClick={hashtagHandle}>Apply hashtags</button>
        

      </div>

      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Reading time: {Math.round(text.split(" ").length*(0.4/125))} minutes</p>
        <h2>Preview: </h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;

TextForm.propTypes = {
  heading: PropTypes.string,
};
