import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user);
    const handleSignout =()=>{
    signOut(auth).then(() => {
        navigate("/");
    }).catch((error) => {
        navigate("/error");
        });
    }
    return(
       
        <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-30">
            <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        {  user &&  <div>
         <button onClick={handleSignout} className="bg-red-600 py-1 px-1 rounded-md text-white mt-4">Sign Out</button>
        </div>
        }
        </div>
        
      
    )
}
export default Header;