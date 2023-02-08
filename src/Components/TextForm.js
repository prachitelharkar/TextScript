import React, {useState} from 'react'

export default function TextForm(props) {
  const handleupClick =()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert(" Converted to uppercase!", "Success");
  }
  const handlelowClick =()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert(" Converted to Lowercase!", "Success");

  }

  const handleclearClick =()=>{
    let newtext = '';
    setText(newtext)
    props.showAlert(" Textarea Cleared!", "Success");

  }

  const handleonChange=(event)=>{
   setText(event.target.value);
  }
  const handlecopy=()=>{
     var text=document.getElementById("Textarea");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert(" Copied to clipboard!", "Success");

  }
  const handlespaces=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Removed Extra Spaces!", "Success");

  }
  const [text, setText ]=useState('');
   return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="TextA my-3">
    <textarea className="form-control" value={text} onChange={handleonChange} id="Textarea" rows="8"></textarea>
   </div>
    <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handlespaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
    </div>
    </>
  )
}
