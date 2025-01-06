import React from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  return (
    <div>
        <h1>{props.title}</h1>
      <div className="form-group">
        <textarea className="form-control" id="myBox" rows="10"></textarea>
    </div>
    <button type="button" className="btn btn-primary">Convert To UpperCase</button>

    </div>
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