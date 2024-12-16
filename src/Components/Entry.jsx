import logoicon from "../assets/Images/Logo.png";
import googleplay from "../assets/Images/googleplay.png";
import microsoft from "../assets/Images/Microsoft.png";
import { useState, } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Entry = () => {

  const navigate = useNavigate()
  const [firstinput,setFirstinput] = useState()
  const [password,setPassword] = useState()

  const [placeholder, setPlaceholder] = useState(
    "Phone number, username, or email"
  );
  const [placeholder2, setPlaceholder2] = useState("Password");

   const dataSubmit = (e)=>
   {

      e.preventDefault()
       axios.post('https://instagram-server-53i7.onrender.com/entry', {firstinput ,password})
       .then(result => {console.log(result), navigate('/')})
       .then(alert("Account Has been created, now login") )
       .catch(err => console.log(err))
   }

  return (



    <>
    <div className="main-container">
            <div className="container-2">
              <div className="form">
                <img id="logoicon" src={logoicon} alt="" />
                <input onChange={(e)=>{setFirstinput(e.target.value)}}
                  placeholder={placeholder}
                  onFocus={() => setPlaceholder("")}
                  onBlur={() => setPlaceholder("Phone number, username, or email")}
                  type="email"
                  id="inputfield-1"
                  className="inputfield"
    
                />
                <input onChange={(e)=>{setPassword(e.target.value)}}
                  placeholder={placeholder2}
                  onFocus={() => setPlaceholder2("")}
                  onBlur={() => setPlaceholder2("Password")}
                  type="password"
                  className="inputfield"
                />
                <button className="loginbtn" onClick={dataSubmit}>Create Account</button>
                <div className="facebook">
                  <div className="login">
                  </div>
                </div>
              </div>
              <div className="getapp">
                <h3>Get the app</h3>
                <div className="apps">
                  <img src={googleplay} className="appsicon" alt="" />
                  <img src={microsoft} id="appsicon" alt="" />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Entry;