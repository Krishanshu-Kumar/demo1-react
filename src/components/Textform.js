import React, { useState } from "react";

export default function Textform(props) {

    const [text, setText] = useState("Enter Text Here");

    const handleOnClickUp = () => {

        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnClickLow = () => {

        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnClear = () => {

        let newText = "";
        setText(newText)
    }
    const handleOnCapitalize = () => {

        let newText = "";
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            let word = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            newText += word + " ";
        }
        setText(newText.trim());
    }
    const handleOnCopy = () => {

        var copyText = document.getElementById("Textbox");
   
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
      
     
        navigator.clipboard.writeText(copyText.value);
      
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea value={text} onChange={handleOnChange} className="form-control" style={{
                    backgroundColor: props.mode === 'light' ? '#393E46' : 'white',
                    text: props.mode === 'dark' ? 'white' : 'black',
                }} id="Textbox" rows="8"></textarea>
                <button onClick={handleOnClickUp} className="btn btn-dark my-3 mx-2">Convert to Uppercase</button>
                <button onClick={handleOnClickLow} className="btn btn-dark my-3 mx-2">Convert to Lowercase</button>
                <button onClick={handleOnCapitalize} className="btn btn-dark my-3 mx-2">Capitalize Case</button>
                <button onClick={handleOnClear} className="btn btn-dark my-3 mx-2">Clear Text</button>
                <button onClick={handleOnCopy} className="btn btn-dark my-3 mx-2">Copy Text</button>

            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p> It took {text.split(" ").length * 0.25} seconds to read that !!! </p>
            </div>
        </>
    );
}
