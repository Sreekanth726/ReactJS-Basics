import React, {useState}from 'react'

export default function Form(props) {
    const [text,setText]=useState("");
    const HandleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.promptAlert(" Converted to Lowercase","success")
    }
    const HandleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.promptAlert(" Converted to Uppercase","success")
    }
    const copyClick =()=>{
        let newText=document.getElementById("my-Box")
        newText.select();
        newText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newText.value)
        props.promptAlert(" Copied to Clipboard","success")
        
    }
    const EnterText =(event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.title}</h2>
            <textarea className="form-control" value={text} onChange={EnterText} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="my-Box" rows="7"></textarea>
            <button className="btn btn-primary my-3 mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={copyClick}>Copy to Clipboard</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text contains</h2>
            <p>{text?text.split(" ").length:"0"} word and {text.length} characters</p>
            <h2>Text Preview</h2>
            <p>{text.length===0?"Enter text to preview":text}</p>
        </div>
        </>
    )
}
