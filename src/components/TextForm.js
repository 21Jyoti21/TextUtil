import React, { useState } from 'react'

export default function TextForm(props) {
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
      }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
    const handleClear=()=>{
        let newText=' ';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const handleCopy=()=>{
      console.log("Copy")
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied!","success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove extra spaces!","success");
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
      <h1 >{props.heading}</h1>
      <div className='mb-3'>
      <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8">
        </textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
      <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container ' style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
      <h1>Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something"}</p>
    </div>
    </>
  )
}
