import Header from "./Header";

const Login =()=>{
    return(
        <div>
            <Header/>
            <div className="absolute brightness-50">
                <img alt="img" src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg"></img>
            </div>
            <form className="w-4/12 absolute bg-black my-36 mx-auto right-0 left-0">
            <div className="px-16">
            <h1 className="text-3xl font-semibold text-white py-9 ">Sign In</h1>
            <input type="text" placeholder="Email Address" className=" m-1 w-full rounded-md py-2"/>
            <input type="password" placeholder="Password" className=" m-1 w-full mt-3 rounded-md py-2"/>
            <button className="bg-red-600 w-full  py-2 m-1 mt-9">Sign In</button>
            </div>
            </form>
           
        </div>
    )
}
export default Login;