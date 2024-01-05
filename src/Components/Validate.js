const Validate=(email,password)=>{
   
    const isemailvalid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispasswordvalid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemailvalid) return "please enter correct emailId";
    if(!ispasswordvalid) return "Password is Wrong";

    return null;
    
}

export default Validate;