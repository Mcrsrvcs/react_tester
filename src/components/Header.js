import React ,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {

  const [color, setColor] = useState("");
let bell='';
let col = '';
let ml='';
let btnc='dark';
const ChangeColor=(event)=>{ 
  document.getElementById('navbg').style.backgroundColor = color;
  if(props.them==='light'){
  setColor('');
  }
  else if(props.them==='dark'){
  let inputcl =  document.getElementsByClassName('color')[0].value;
  if(inputcl==='#000000'){
    inputcl='';
  }
  props.btncl(inputcl);
  // console.log(color);
  }
  // if(props.them==='dark'){
  //   setColor('');
  // }
  setColor(event.target.value);
  }
  if(props.them==='dark'){
  bell =  "Custom :"
  col='color';
  ml=<input type={col} className="form-control form-control-color color d-inline-block mx-1" id="ColorInput" value={color} onChange={ChangeColor} title="Choose navbar's color"></input>;
  btnc= 'light'; 
  document.getElementById('navbg').style.backgroundColor = color;
  }
  return (
    
    <>
      <nav
        className={` navbar navbar-expand-lg ${props.them==='light'?`navbar-${props.them} bg-${props.them}`:color==='#000000'||color===''?`navbar-${props.them} bg-${props.them}`:`navbar-${props.them}`} `} id='navbg'
      >
        <div className="container-fluid head">
          <Link className="navbar-brand" to="/">
            React {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${props.homea===true?'active':''}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {props.services}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.ab===true?'active':''}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  More
                </Link>
              </li>
            </ul>

            <div className='d-inline'>
              <img
                width="24px"
                className="mx-2 my-2"
                src={
                  props.them === "dark" ? "../index.png" : "../light_mode.png"
                } 
                alt=""
              />

              <div className="form-check form-switch d-inline-block mx-0"><input
                  className="form-check-input switch"
                  type="checkbox"
                  onClick={props.chth}
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                ></label>
              </div>

              <img
                width="24px"
                className="mx-1 my-2 "
                src={
                  props.them === "light"
                    ? "../dark_Mode.png"
                    : "../download.png"
                }
                alt=""
              />
            </div>
            {/* <div className="giu border d-inline-block"> */}
          <label htmlFor="exampleColorInput" className="wid form-label d-inline mx-1 labelcustom ">{bell}</label>{ml}
            {/* </div> */}

            <div className="d-inline-block search float-end">
            <form className="d-flex">
              <input
                className="form-control me-2 btn-search"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className={`btn btn-outline-${btnc} btn-search  type="submit`}>
                Search
              </button>


            </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Utiles",
};
