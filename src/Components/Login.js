import { useRef, useState } from "react";
import Header from "./Header";
import Validate from "./Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [issignin, setsignin] = useState(true);
 const [errormessage, setErrormessage] = useState(null);
  const navigate=useNavigate();
  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);

 
  const togglesignin = () => {
    setsignin(!issignin);
  };

  const handleclickbtn = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrormessage(message);
    if (message) return;

    if (!issignin){
     createUserWithEmailAndPassword(
        auth,
      email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value
          }).then(() => {
            
          }).catch((error) => {
           setErrormessage(error.message);
          });
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + " " + errorMessage);
        });
    }
    else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + " " + errorMessage);
        });
      
    }
};

  return (
    <div>
      <Header />
      <div className="absolute brightness-50 ">
        <img
          className="h-screen object-cover md:h-auto md:object-none"
          alt="img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        ></img>
      </div>
      <form onSubmit={(e)=> e.preventDefault()}
        className="w-full md:w-4/12 absolute h-5/6 bg-black my-36 mx-auto right-0 left-0 bg-opacity-75 px-16"
      >
       
          <h1 className="text-3xl font-semibold text-white py-9 ">
            {issignin ? "Sign In" : "Sign Up"}
          </h1>
          {!issignin && (
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className=" m-1 w-full mb-3 rounded-md py-3 px-1"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className=" m-1 w-full rounded-md py-3 px-1"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className=" m-1 w-full mt-3 rounded-md py-3 px-1"
          />
          <p className="text-red-700 font-semibold">{errormessage}</p>
          <button
            className="bg-red-600 w-full rounded-md py-3 m-1 mt-9 mb-16 "
            onClick={handleclickbtn}
          >
            {issignin ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white" onClick={togglesignin}>
            {issignin
              ? "New to Netflix? Sign Up now"
              : "Are you already regestired? Sign In now"}
          </p>
          {issignin && (
            <p className=" mb-10 text-sm text-zinc-500">
              Sign in is protected by Google reCAPTCHA to ensure you’re not a
              bot. ![CDATA[<b>Learn more.</b>]]
            </p>
          )}
    
      </form>
    </div>
  );
};

export default Login;
