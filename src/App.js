import './App.css';
import React ,{useState} from 'react';
import About from './components/About';
import Header from './components/Header.js';
// import Footer from './components/footer.js';
import UtilText from './components/UtilText.js';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
const [homea,sethomea] =  useState(true);
const [abouta,setabouta] =  useState(false);
const [alert, setAlert] = useState(null);

const home=()=>{
  if(homea===false){
    sethomea(true);
    setabouta(false);
  }
}

const page=()=>{
  if(homea===true){
  sethomea(false);
  }
}
//page();

const ab=()=>{
  if(abouta===false){
    setabouta(true);
    }
}

const ShowAlert=(message,type)=>{
  let data={
    msg:message,
    type:type
  }
  setAlert(data);
  setTimeout(()=>{
    setAlert(null);
  },2000)
}
// let str = "text"
//let obje = {"utile" : "string","utile2" : "int"};
  const [theme,setheme] = useState('light')

const changeth=()=>{
  if(theme==='light'){
  setheme("dark");
  document.body.style.backgroundColor="black";
  document.body.style.color="white";
  ShowAlert('Dark Theme Enabled','success');
  }
  else{
    setheme("light");
    document.getElementsByTagName('body')[0].style.backgroundColor="white";
  document.getElementsByTagName('body')[0].style.color="black";
  ShowAlert('Light Theme Enabled','success');
  document.title = "React Utiles | Home";
  
  for(let i = 1;i<12;i++){
    if(document.getElementsByClassName('btn')[i]!==undefined)
  {
    document.getElementsByClassName('btn')[i].style.backgroundColor='';
    document.getElementsByClassName('btn')[i].style.border='';
  }
    }
  }
}
let bc='';
const btncl=(colo)=>{
  bc = colo;
  for(let i = 1;i<12;i++){
  if(document.getElementsByClassName('btn')[i]!==undefined)
  {
  document.getElementsByClassName('btn')[i].style.backgroundColor=bc;
  document.getElementsByClassName('btn')[i].style.border=bc;
  }
  }
  bc = colo;
}
const [color, setColor] = useState("");
  const ChangeColor=(event)=>{
    setColor(event.target.value);
    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';
    // if(props.them==='dark'){
    //   setColor('');
    // }
    }

  return ( 
    <>
    <Router className="router">
      <Header title="Utiles" ab={abouta} homea={homea} them={theme} chth={changeth} btncl={btncl}/* title={obje}*/ services="Our service" about="About Us" link="/about"/>
    {/* <div className="main"><h1>{str}</h1></div> */}
    <Alert alert={alert}/>
    
    {/* <Footer/> */}
    <div className="container my-3">
      {/* <About/> */}
      <Switch className="router">
          <Route exact path="/about">
            <About page={page} ab={ab} them={theme} bgcolor={color} />
          </Route>
          <Route exact path="/">
             <UtilText them={theme} home={home} ShowAlert={ShowAlert} bgcolor={color} ChangeColor={ChangeColor}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

/*
28/01/2022
adding bootstrap
props

29/01/2022
states
states

30/01/2022
states
states

31/01/2022
states
states

*/