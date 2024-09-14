import React, { useState } from 'react'
// import Login from './Login';
import './Login_Signup.css'
import Login from './Login';
import { Link,useNavigate } from 'react-router-dom';
function Signup() {
    const[send,setsend]=useState({
        name:"",
        email:"",
        password:"",
    })
    const[resp,setresp]=useState("")
    const navigate = useNavigate()
     async function handlesubmit(e){
           e.preventDefault();
           if (!send.email || !send.password) {
            alert('Please enter both email and password');
            return;
        }
           try {
            
               const response = await fetch("https://667d05ea3c30891b865e8676.mockapi.io/api/v1/users",{
                 method:"POST",
                 headers:{"Content-Type":"application/json"},
                 body:JSON.stringify(send)
               })
               const serverresponse = await response.json();
               setresp(serverresponse)
               send({name:"",email:"",password:""})
           } catch (error) {
              console.log(error);
           }

           if (handlesubmit) {
              navigate('/Login')
           } else {
            console.log(error);
           }
          
    }
    function handlelogin(){
        if (handlelogin) {
            navigate("/Login")
        }
    }


    return (
        <div className='sign'>
            {console.log(send)}
            <h1>Signup</h1>
            <br />
            <label htmlFor="">enter name</label>
            <br />
            <input type="text" placeholder='enter name'   value={send.name} onChange={(e)=>{setsend({...send,name:e.target.value})}}/>
            <br />
            <label htmlFor="">enter email</label>
            <br />
            <input type="text" placeholder='enter email'   value={send.email} onChange={(e)=>{setsend({...send,email:e.target.value})}}/>
            <br />
            <label htmlFor="">enter password</label>
            <br />
            <input type="password" placeholder='enter password'   value={send.password} onChange={(e)=>{setsend({...send,password:e.target.value})}}/>
            <button onClick={(e)=>handlesubmit(e)}>signup</button>
            <button onClick={(e)=>handlelogin(e)}>Login</button>
        </div>
    )
}

export default Signup
