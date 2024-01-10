import React, { useState } from 'react'
import Input_Field_Component from './Input_Field_Component'

const Sign_Up_Component = () => {
//   const [user_data, setUserData] = useState({
//     username:'',
//     email:'',
//     password:''
//   });

//     user_data.username ='user'
//     user_data['username'] ='user'

//   let arr = [1,3,4,5,6]
//   arr[2]

//   const userDataHandle = (val, key) => {
//     console.log("val:", val);
//     console.log("key:", key);
//     const obj = { ...user_data };

//     obj[key] = val;

//     setUserData(obj);
//   };

//     userDataHandle("user 01", "username");

//   console.log(user_data);



const [user_data,setuser_data]= useState({
    username:"",
    email:"",
    password:""
})
user_data.username = "user"
user_data["username"] = "user"

const userDataHandle =(val , key) =>{
    console.log("val :", val);
    console.log("key :", key);
    const obj = {...user_data};
    
    obj[key] = val
    
    // setuser_data[obj]
    
    console.log(user_data);
}
  const submitHandle = () => {};

  return (
    <div>
      <h1>Signup_Form</h1>

      <div>
        <Input_Field_Component
          id="username"
          placeholder="Enter Username"
          type="text"
          onChangehandle={userDataHandle}
        />
        <Input_Field_Component
          id="email"
          placeholder="Email"
          type="email"
          onChangehandle={userDataHandle}
        />
        <Input_Field_Component
          id="password"
          placeholder="Password"
          type="password"
          onChangehandle={userDataHandle}
        />
        <Input_Field_Component
          id="confirm_password"
          placeholder="Confirm Password"
          type="password"
          onChangehandle={userDataHandle}
        />
      </div>

      <button onClick={submitHandle}>Submit Details</button>
    </div>

    
  );
}
;

export {Sign_Up_Component}
