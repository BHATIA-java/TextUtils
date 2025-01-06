import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  }

  const handleClear = () => {
    setText('');
  }

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  //state to hold the text
  const [text,setText]=useState('');

  return (
    <>
    <div className="container">
        <h1>{props.title}</h1>
      <div className="form-group">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
    </div>
    <div>
    <button type="button"  onClick={handleUpperCase} id="upperButton" className="btn btn-dark mx-2">Convert To UpperCase</button>
    <button type="button"  onClick={handleLowerCase} id="lowertButton"className="btn btn-dark mx-2">Convert To lowerCase</button>
    <button type="button"  onClick={handleClear} id="clearbutton"className="btn btn-dark mx-2">Clear</button>
    </div>
    </div>

    <div className="container my-3">
      <h2>your Text Summary</h2>
      <p>{text.split(" ").length} words And {text.length} characters</p>
      <p>{0.008 * text.split('').length}Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>


    </>
  )
}
//to set the data type of props and that is required
TextForm.propTypes ={
    title:PropTypes.string.isRequired
    
};

//when no value is provided then default prop works
TextForm.defaultProps = {
    title: 'set title'
    
};