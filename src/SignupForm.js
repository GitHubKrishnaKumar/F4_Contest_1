import { useState } from "react";
import './App.css';

let obj = {};
function Form() {
  //using useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPassValidate] = useState(false);
  const [confirmPasswordValidate, setConfirmPassValidate] = useState(false);

  // store data in obj object
  obj.email = email;
  obj.password = password;

  function emailData(item){
    setEmail(item.target.value);
    setEmailValidate(validateEmail(item.target.value));
  };

  function passwordData(data){
    setPassword(data.target.value);
    setPassValidate(data.target.value.length >= 8);
  };

  function confirmPasswordData(event){
    setConfirmPassword(event.target.value);
    setConfirmPassValidate(event.target.value === password);
  };

//email check for validation
  function validateEmail (email){
    const emailCheck = /\S+@\S+\.\S+/;
    return emailCheck.test(email);
  };

  //click submit button
  function clickSubmitBtn(e){
    e.preventDefault();
    if (emailValidate && passwordValidate && confirmPasswordValidate) {
      alert("Data registered successfull....\nThank You...");
    } else {
      alert("Please fill correct data in TextBoxes...");
    }
  };

return (
    <>
      <div className="container">
        <div className="form-data">
            <form onSubmit={clickSubmitBtn}>
              <div className="div">
                <label> Email : </label>
                <input
                  type="email" id="email" value={email} onChange={emailData}  className="form-control"
                  style={{border: emailValidate ? "2px solid green" : "2px solid red"}}
                />
                {!emailValidate && (
                  <p className="error">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className="div">
                <label> Password :</label>
                <input type="password" id="password" value={password} onChange={passwordData} className="form-control"
                  style={{border: passwordValidate ? "2px solid green" : "2px solid red"}}
                />
                {!passwordValidate && (
                  <p className="error">
                    Password must be at least 8 Characters...
                  </p>
                )}
              </div>
              <div className="div">
                <label>Confirm Password:</label>
                <input type="password" id="confirm-password" className="form-control" style={{ border: confirmPasswordValidate ? "2px solid green" : "2px solid red"}} value={confirmPassword} onChange={confirmPasswordData}/>
                {!confirmPasswordValidate && (<p className="error">Password and Confirm Password does not match.</p>)}
              </div>
              <button className = "submitBtn" type="submit">
                Sign Up
              </button>
            </form>
        </div>
      </div>
    </>
    
  );
  
}
console.log("Data is",obj);//print object data
export default Form;