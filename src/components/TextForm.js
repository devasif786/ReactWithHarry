import React, {useState} from 'react'






export default function (props) {
    const handleUPclick=()=>{
        let newtext=text.toLocaleUpperCase();
        setText(newtext);
      console.log("onclick btn")
    }

    const handleOnchange=(event)=>{
        setText(event.target.value)
        console.log("onchange btn")

    }
    const [text, setText]=useState("")
  return (
    <div className="container">
 
        
  <h1>{props.heading}</h1>

<div className="mb-3">

  <textarea className="form-control" placeholder="Enter your text"value={text} onChange={handleOnchange}id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUPclick}>Convert To Uppercase</button>
</div>


  )
}
