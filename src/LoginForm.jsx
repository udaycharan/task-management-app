import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import data from "./database.json";
import Header from "./Header";

//login screen component
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  let convertedName;
  let convertedPassword;

  //function that executes on submit button click and checks
  //whether the user is a admin or engineer and based on the role redirects to respective page
  const displayUserRolePage = (e) => {
    e.preventDefault();

    if (userName && password) {

      //iterating throught the JSON data
      for (let i = 0; i < data.length; i++) {
        convertedName = JSON.stringify(data[i].user.name);
        convertedPassword = JSON.stringify(data[i].password);

        // checking whether the entered username and password are matching with database data
        // if matches then it redirects to the respective user page
       if (
          JSON.stringify(userName) === convertedName &&
          password === convertedPassword
        ) {
          if (data[i].user.role === "Admin") {
            history.push("/admin");
          } else if (data[i].user.role === "Engineer") {
            history.push("/engineer");
          }
          break;
        }

      }

      //if the either username or password doesn't match with the given input then it alerts 

      if(JSON.stringify(userName) !== convertedName || password !== convertedPassword){


        alert("Invalid login credentials!!");
        return;
      }

    } else if (!userName) {
      alert("Please Enter your username ");
    } else if (!password) {
      alert("Please Enter your password");
    }
  };
  
  //function to update the userName input value based on the user input(controlled input feild)
  const handleUserName = (inputUserName) => {
    setUserName(inputUserName);
  };

  //function to update the  Password input value based on the user input(controlled input feild)
  const handleUserPassword = (inputUserPassword) => {
    setPassword(inputUserPassword);
  };


  // returning the JSX
  return (
    <>
    <Header/>
    <div className="form-box">
      <form className="form-container">
         <h1>USER LOGIN</h1>
        <div className="credentials-box">
          <input
            id="username"
            name="username"
            type="email"
            value={userName}
            placeholder="username"
            onChange={(event) => handleUserName(event.target.value)}
          />
        
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => handleUserPassword(event.target.value)}
          />

          <button
            id="btn-style"
            onClick={(event) => {
              displayUserRolePage(event);
            }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;
