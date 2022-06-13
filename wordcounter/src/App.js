import React,{useState} from 'react'


function App() {
  
  const defaultstyle={
    fontSize: "16px"
  }
  const [words,setTotalWord]=useState(0);
  const [fontSize,setFont]=useState(16);
  const [wordLimit,setWord]=useState(50);
  const[charlength , setChar]=useState(0)
  const[variable, setVar]=useState("")
  const[fontStyle,setFontStyle]=useState(defaultstyle);
  function handleFontSize(e){
     setFont(e.target.value);
     
     let newstyle={
      fontSize: fontSize.toString()+"px"
     }
     console.log(newstyle);
     setFontStyle(newstyle);
   
    
  }
  function handleWordLimit(e){
    setWord(e.target.value);
  }
  function handleChange(e){
      let wordsfinal= e.target.value;
     
      const newwords=wordsfinal.split(' ')
       .filter(function(n) { return n != '' })
       .length;
       const newlength= wordsfinal.split("").length;
       if(newlength<=wordLimit){
        setVar(wordsfinal);
       setTotalWord(newwords);
       
       
      
       setChar(newlength);
       }
  }
  
  return (
    <div>
    <input type="range"  name="size" id="fontSize-input"  min="15"  max="33" value={fontSize} onChange={handleFontSize}/>
    <input type="number"  id="char-limit-input" value={wordLimit} onChange={handleWordLimit}></input>
    <textarea  style={fontStyle} value={variable} onChange={handleChange}></textarea>
    <div className="word-counter">{words}</div>
    <div className="char-counter">{charlength}</div>
     
    </div>
  );
}

export default App;
