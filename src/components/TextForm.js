import PropTypes from "prop-types";
import { useState } from "react";

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
  const [text, setText] = useState("Value here...");

  const onChangeHandle = (event) => {
    setText(event.target.value);

  };

  const upperCaseHandle = () => {
    setText(text.toUpperCase());
  };

  const lowerCaseHandle = () => {
    setText(text.toLowerCase());
  };



  return (
    <>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8" placeholder="Enter text here...."
          onChange={onChangeHandle}
        ></textarea>

        <button className="btn btn-primary mt-1" onClick={upperCaseHandle}>
          UpperCase
        </button>

        <button className="btn btn-danger ms-1 mt-1" onClick={lowerCaseHandle}>
          LowerCase
        </button>
        

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
