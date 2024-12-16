import "./Login.css";
import phoneimage from "../assets/Images/Login Phone Image.png";
import logoicon from "../assets/Images/Logo.png";
import facebookicon from "../assets/Images/Facebook Logo.png";
import googleplay from "../assets/Images/googleplay.png";
import microsoft from "../assets/Images/Microsoft.png";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";



const Login = () => {


  const [firstinput, setFirstinput] = useState('')
  const [password, setPassword] = useState('')
  const navigator = useNavigate()

  const [placeholder, setPlaceholder] = useState(
    "Phone number, username, or email"
  );
  const [placeholder2, setPlaceholder2] = useState("Password");


  const createaccountfunc = () => {
    navigator('/entry')
  }
  const dataSubmit = (e) => {

    e.preventDefault()
    axios.post('https://instagram-server-53i7.onrender.com/', { firstinput, password })
      .then(result => {
        console.log(result)
        if (result.data === "success") {
          navigator('/welcome')
        }
        else if (result.data === "The Password is incorrect") {
          alert("Password is incorrect")
        }
        else if (result.data === "No Records Exist") {
          setTimeout(() => {
            navigator('/entry')
          }, 1000);
          alert("You Dont Have an Account")
        }
        else {
          navigator('/entry')
        }
      }
      )
      .catch(backerror => console.log(backerror))
  }
  return (
    <>
      <div className="main-container">
        <div className="container-1">
          <img src={phoneimage} alt="" />
        </div>
        <div className="container-2">
          <div className="form">
            <img id="logoicon" src={logoicon} alt="" />
            <input onChange={(e) => { setFirstinput(e.target.value) }}
              placeholder={placeholder}
              onFocus={() => setPlaceholder("")}
              onBlur={() => setPlaceholder("Phone number, username, or email")}
              type="email"
              id="inputfield-1"
              className="inputfield"
            />
            <input onChange={(e) => { setPassword(e.target.value) }}
              placeholder={placeholder2}
              onFocus={() => setPlaceholder2("")}
              onBlur={() => setPlaceholder2("Password")}
              type="password"
              className="inputfield"
            />
            <button className="loginbtn" onClick={dataSubmit}>Log in</button>
            <div className="lines">
              <hr className="line"></hr>
              <p>OR</p>
              <hr className="line"></hr>
            </div>
            <div className="facebook">
              <div className="login">
                <img src={facebookicon} id="facebookicon" alt="" />
                <h3>Log in with Facebook</h3>
              </div>
              <div className="password">
                <h4>Forgot Password</h4>
              </div>
            </div>
          </div>
          <div className="signup">
            <h3>Dont have an account? </h3>
            <h3 id="bluesignuptext" onClick={createaccountfunc} >Sign up</h3>
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
      <div className="waaar">
        <div className="warning">
          <p>Never use real phone number and email id </p>
          <p>Im not responsible if you have any loss</p>
        </div>
      </div>

    </>
  );
};

export default Login;
