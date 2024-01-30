import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/Constant";
  const Header = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    

  };
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth,(user) => {
      if(user){
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-30">
      <img
        className="w-44 "
        src={LOGO}
        alt=""
      />
      {user && (
        <div>
          <button
            onClick={handleSignout}
            className="bg-red-600 py-1 px-1 rounded-md text-white mt-4"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
