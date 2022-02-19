import React, { useState } from "react";

export default function UtilText(props) {
 document.title="React Utiles | Home";
  props.home();
  const [Text, setText] = useState("");
  const [char, setchar] = useState(0);
  const [word, setword] = useState(0);
  let textarea = document.getElementById("Textarea");

  const ChangeText = (event) => {
    setText(event.target.value);
    if(textarea!==null){
    setword((textarea.value.split(' ').filter((item)=>{
      return item!=='';
    })).length)

    setchar(textarea.value.replace(/\s/g,'').length)
  }
  };

  const ChangeTextup = () => {
    let txtcap = document.getElementById("Textarea");
    let txtcap2 = document.getElementById("preview");
    txtcap.classList.remove("text-capitalize");
    txtcap2.classList.remove("text-capitalize");
    let newtext = Text;
    newtext = Text.toUpperCase();
    setText(newtext);
  };
  const ChangeTextlw = () => {
    let txtcap = document.getElementById("Textarea");
    let txtcap2 = document.getElementById("preview");
    txtcap.classList.remove("text-capitalize");
    txtcap2.classList.remove("text-capitalize");
    let newtext = Text;
    newtext = Text.toLowerCase();
    setText(newtext);
  };
  const ChangeTextcap = () => {
    let newtext = Text;
    newtext = Text.toLowerCase();
    setText(newtext);
    let txtcap = document.getElementById("Textarea");
    let txtcap2 = document.getElementById("preview");
    txtcap.classList.add("text-capitalize");
    txtcap2.classList.add("text-capitalize");
  };
  const Clear = () => {
    let newtext = "";
    setText(newtext);
    setchar(0);
    setword(0);
  };
  const ChangeTextbo = () => {
    let txtcap = document.getElementById("Textarea");
    let txtcap2 = document.getElementById("preview");
    txtcap.classList.add("bold");
    txtcap2.classList.add("bold");
  };
  const ChangeTextit = () => {
    let txtcap = document.getElementById("Textarea");
    let txtcap2 = document.getElementById("preview");
    txtcap.classList.add("italic");
    txtcap2.classList.add("italic");
  };
  const ChangeTextul = () => {
    let txtcap = document.getElementById("Textarea");
    let txtcap2 = document.getElementById("preview");
    txtcap.classList.add("underline");
    txtcap2.classList.add("underline");
  };
  const ChangeTextnl = () => {
    let txtcap = document.getElementById("Textarea");
    let txtcap2 = document.getElementById("preview");
    txtcap.classList.remove("underline");
    txtcap2.classList.remove("underline");
    txtcap.classList.remove("italic");
    txtcap2.classList.remove("italic");
    txtcap.classList.remove("bold");
    txtcap2.classList.remove("bold");
  };

  const copytxt = () => {
    let txtcap = document.getElementById("Textarea");
    txtcap.select();
    navigator.clipboard.writeText(txtcap.value);
    document.getSelection().removeAllRanges();
    props.ShowAlert('Text Copied','success');
  };

  const res = () => {
    let newtxt = Text.split(/[ ]+/);
    setText(newtxt.join(" "));
    props.ShowAlert('Extra Spaces Removed','success');
  }

  //to capitilize text
  //   const intoTitleCase = () => {
  //     let newText = text.split(" ").map((currentValue) => {
  //         let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
  //         return newText;
  //     });
  //     setText(newText.join(" "));
  //   }
  // const handleReverse = (event) => {
  //   /* Convert string to array*/
  //   let strArr = Text.split("");
  //   /* Reverse array*/
  //   strArr = strArr.reverse();
  //   /* Convert array to string*/
  //   let newText = strArr.join("");
  //   setText(newText);
  // };
let ml='';
// document.getElementsByClassName('text-white')[0].style.color="blue";
  if(props.them==='dark'){
    ml=<input type="color" className="form-control form-control-color color d-inline-block mx-2" id="ColorInput" value="#ffffff" title="Choose Background color" value={props.bgcolor} onChange={props.ChangeColor}></input>;

    if(props.bgcolor!==''){
    document.body.style.backgroundColor = props.bgcolor;
    document.body.style.color = 'white';
    }
    }
  return (
    <>
      <div className="container my-3   mb-0 mx-0">
        <div className="mb-0  ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2 className=" d-inline mx-3"> Enter Some Text Below</h2>{" "}
            {/*toogleswitch for dark and light theme */}
          </label>
          <div className={`container`}>
          <textarea
            className={`Textarea form-control ${props.them==='dark'?'bg-dark text-light':'white'} mb-0`} 
            id="Textarea"
            rows="7"
            value={Text}
            onChange={ChangeText}
            placeholder="Enter text here"
          ></textarea>
          <button disabled={char===0} className={`btn btn-primary btn-copy my-3 btn-sm mx-1 mb-0 btncopy`} onClick={copytxt} >Copy</button>
          <button disabled={char===0} className="btn btn-primary btn-copy my-3 btn-sm mx-1 mb-0" onClick={res}>Remove Extra Spacies</button>

          <div className="d-inline-block colorinp">
          <label htmlFor="exampleColorInput" className="form-label d-inline mx-1 labelcustom "></label>
          {ml}
          </div>
          
          </div>
        </div>

        <div className="divl ">
          <h4 className="my-4  con">Convert To : </h4>
          <button disabled={char===0} className="btn btnl btn-primary" onClick={ChangeTextup}>
            UPPER CASE
          </button>
          <button disabled={char===0} className="btn btnl btn-primary mx-1" onClick={ChangeTextlw}>
            lower case
          </button>
          <button disabled={char===0} className="btn btnl btn-primary mx-0" onClick={ChangeTextcap}>Capital Letters
          </button>
        </div>

        <div className="divb mb-2 ">
          <h4 className=" my-4  cos">Costimize : </h4>
          <button disabled={char===0}
            className={`btn ${props.them==='dark'?'text-white':'btn-outline-primary'} btn-outline-primary bold`}
            onClick={ChangeTextbo}
          >
            BLOD
          </button>
          <button disabled={char===0}
            className={`btn  ${props.them==='dark'?'text-white':'btn-outline-primary'} btn-outline-primary bold mx-2 italic`}
            onClick={ChangeTextit}
          >
            Italic
          </button>
          <button disabled={char===0}
            className={`btn ${props.them==='dark'?'text-white':'btn-outline-primary'} btn-outline-primary mx-0 underline`}
            onClick={ChangeTextul}
          >
            Underlined
          </button>
        </div>

        <div className="divc  ">
          <h4 className="  my-4  csin">More Options :</h4>
          <button disabled={char===0} className="btn btn-success" onClick={Clear}>
            Clear
          </button>
          <a href="#pre">
            <button disabled={char===0} className="btn btn-success mx-2">Preview</button>
          </a>
          <button disabled={char===0} className="btn btn-success mx-0" onClick={ChangeTextnl}>
            Normal
          </button>
        </div>

        {/* <button className="btn btn-success mx-2" onClick={ChangeTextUndo}>Undo</button> */}
      </div>

      <div className="container my-3 sum  ">
        <h2 className="my-2 text-center">Text Summary </h2>
        <h4 className="d-inline">Words : </h4>
        <p className="d-inline fs-4 pm">{word}</p>
        <h4 className="d-inline l-5">Charactors : </h4>
        <p className="d-inline fs-4 pm">{char}</p>

        <div className="d-inline-block mx-0">
        <h4 className="d-inline l-5z" title="Based on 125 words per Minute">
        <p className="d-inline fs-4 pm" title="Based on 125 words per Minute">
          {" "}
          {(word*0.48)>=60?'Mintus':'Seconds'}
        </p>
        </h4>
        <h4 className="d-inline" title="Based on 125 words per Minute">
        {" "} to Read {" "}:{" "}
        {(word*0.48)>=60?((word*0.008).toFixed(2)):((word*0.48).toFixed(0))}
        </h4>
        </div>
        
        {/* <p className="d-inline fs-4 mx-2 pm">OR</p> */}
        {/* <p className="d-inline fs-4 pm " title="Based on 125 words per Minute">
          {" "} */}
         
        {/* </p> */}


        <h4 className="d-inline-block l-5z" title="Based on 80 words per Minute">
        {(word*0.75)>=60?'Mintus':'Seconds'} to Speak :{" "}
        </h4>
        <p className="d-inline fs-4 pm" title="Based on 80 words per Minute">
        {" "}{(word*0.75)>=60?(word*0.0125).toFixed(2):(word*0.75).toFixed(0)}
        </p>


      </div>

      <div className="container preview   my-3">
        <a name="pre">
          {" "}
          <h2 className="my-1 text-center" name="pre">
            Preview{" "}
          </h2>
        </a>
        <p className="fs-5" id="preview">
          {Text===''?'Enter text in the text box above to preview here':Text}
        </p>
      </div>
    </>
  );
}
