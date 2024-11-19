// import React ,{useState} from 'react'

// export default function TextForm(props) {
//     const handleChangeText=(event)=>{
//         setText(event.target.value);



//     }
//     const handleUpclick=()=>{
//         let newText=Text.toLocaleUpperCase();
//         setText(newText);
//         props.showAlert("Text is converted to Uppercase","Success");
//     }
//     const handleDownclick=()=>{
//       let newText=Text.toLocaleLowerCase();
//       setText(newText);
//       props.showAlert("Text is converted to Lowercase","Success");
//   }
//   const handleCopyText = () => {
//     navigator.clipboard.writeText(Text); 
//     alert("Text copied to clipboard!"); 
//     props.showAlert("Text is Copied","Success");  
//   };
//   const handleClearText = () => {
//     setText(""); 
//    props.showAlert("Text is Cleared","Success"); 
//   };
//   const handleRemoveExtraSpaces = () => {
//     const trimmedText = Text.replace(/\s+/g, " ").trim();  // Replace multiple spaces with a single space and trim
//     setText(trimmedText);  // Update the state with formatted text
//     props.showAlert("Extra Spaces are Removed","Success");
//   };

//     const [Text,setText]=useState("");

//   return (
//     <>
//     <div className='container'style={{color:props.mode ==='dark'?'white':'#607d8b'}}>
//         <h1>{props.heading}</h1>
// <div className="mb-3 ">
//   {/* <label for="myBox" className="form-label">Enter text to analyze</label> */}
//   <textarea className="form-control" value={Text} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#607d8b'}} onChange ={handleChangeText} id="myBox" rows="8"></textarea>
// </div>
// <button className="button btn-primary mx-3 " onClick={handleUpclick}>Convert To UpperCase </button>
// <button className="button btn-primary mx-3 " onClick={handleDownclick}>Convert To LowerCase  </button>
// <button className="button btn-primary mx-3" onClick={handleCopyText}>Copy Text </button>
// <button className="button btn-primary mx-3" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces </button>
// <button className="button btn-primary mx-3" onClick={handleClearText}>Clear Text </button>
//     </div>
//     <div className='container'style={{color:props.mode ==='dark'?'white':'#607d8b'}}>
//       <h1> Your Summary
//       </h1>
//       <p>{Text.replace(/\s+/g, '').length} Characters and {Text.split(/\s+/).filter((word) => word.length !== 0).length} words</p>

//       <p>{0.008 * Text.split(" ").length} Minutes would need to read </p>
//       <h2>Preview</h2>
//       <p>{Text}</p>
//     </div>
//     </>
   
//   )
// }


import React, { useState } from 'react';

export default function TextForm(props) {
    const handleChangeText = (event) => {
        setText(event.target.value);
    };
    
    const handleUpclick = () => {
        let newText = Text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Uppercase", "Success");
    };

    const handleDownclick = () => {
        let newText = Text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lowercase", "Success");
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(Text); 
        props.showAlert("Text is Copied", "Success");  
    };

    const handleClearText = () => {
        setText(""); 
        props.showAlert("Text is Cleared", "Success"); 
    };

    const handleRemoveExtraSpaces = () => {
        const trimmedText = Text.replace(/\s+/g, " ").trim();
        setText(trimmedText);  
        props.showAlert("Extra Spaces are Removed", "Success");
    };

    const [Text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#607d8b' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={Text} 
                        style={{ 
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#607d8b' 
                        }} 
                        onChange={handleChangeText} 
                        id="myBox" 
                        rows="8"
                    />
                </div>
                <button className="button btn-primary mx-3" onClick={handleUpclick}>Convert To UpperCase</button>
                <button className="button btn-primary mx-3" onClick={handleDownclick}>Convert To LowerCase</button>
                <button className="button btn-primary mx-3" onClick={handleCopyText}>Copy Text</button>
                <button className="button btn-primary mx-3" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button className="button btn-primary mx-3" onClick={handleClearText}>Clear Text</button>
            </div>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#607d8b' }}>
                <h1>Your Summary</h1>
                <p>{Text.replace(/\s+/g, '').length} Characters and {Text.split(/\s+/).filter((word) => word.length !== 0).length} words</p>
                <p>{0.008 * Text.split(" ").length} Minutes would need to read</p>
                
                <h2>Preview</h2>
                <div className={`preview ${props.mode}`}>
                    <p className="preview-content">{Text}</p>
                </div>
            </div>
        </>
    );
}

