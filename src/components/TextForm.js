import React,{useState} from 'react'

export default function TextForm(props) {
  const[text, setText] = useState("");

  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success");
  }

  const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
  }


   const handleClearClick = ()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }

   const handleCopy=()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleExtraSpaces = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }

  const handleOnChange = (evt)=>{
    setText(evt.target.value)
  }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split("").length} Minutes read</p>
        <h2>Preview</h2>'
        <p>{text.length>0?text:"Enter something in the text box preview it here"}</p>
    </div>
    </>
  )
}
