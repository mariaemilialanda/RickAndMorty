import React, { useState } from "react";
import  {validation}  from "./Validation.js";
import styles from "./Form.module.css"

export default function Form (props){
    const [userData, setUserdata]= useState({
        username:'',
        password:'',
    });

    const [errors, setErrors]=useState({
        username:'',
        password:'',
    })


   function handleInputChange(e){
       setUserdata({...userData, [e.target.name] : e.target.value})
       setErrors (validation({...userData,[e.target.name] : e.target.value }))    
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
    if(Object.keys(errors).length === 0) {
        setUserdata({
            username: '',
            password: ''
        })
        setErrors({
            username: '',
            password: ''
        })
    } 
}
    return <div >
              <h1 className={styles.h1} >RICK AND MORTY</h1>
              <h2 className={styles.h2} >WELCOME</h2>
              <form onSubmit={handleSubmit} >
                        <div className={styles.container}>
                            <label className={styles.label} htmlFor="username">Username:</label>
                            <input  classname={styles.box} id="username" name="username" placeholder="Ingrese su usuario" type='text' value={userData.username} onChange={handleInputChange} ></input>
                            {errors.username ? <p>{errors.username}</p> : null}
                            <label className={styles.label} htmlFor="password">Password:</label>
                            <input classname={styles.box} id="password" name="password" type='password' value={userData.password} onChange={handleInputChange}></input>
                            {errors.password ? <p>{errors.password}</p> : null}
                            <div>  </div>
                            <button className={styles.btn}  type="submit">Login</button>
                        </div>
                        <button className={styles.btn}  type="submit">Login</button>
                </form>
          </div>
}