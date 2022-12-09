import React from 'react'
import { useForm } from "react-hook-form";

import { useState, useEffect } from "react"

function Modal( {closeModal })  {

    let [firstname, setFirstname] = useState('')
    let [lastname, setLastname] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [password_verif, setPassword_verif] = useState('')

    function sendDataRegister(){
        fetch('http://edu.project.etherial.fr/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                password_verif: password_verif
            })
        }
            ).then((res) => {
                res.json().then((json) =>{
                    console.log(firstname)
                    console.log(lastname)
                    console.log(email)
                    console.log(password)
                    console.log(password_verif)
                })
            })
    }



     
    return(
        <div id='changeBgColor' className="h-full w-full bg-black flex flex-col absolute">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full ">
                    <button onClick={() => closeModal(false)} className='ml-72 font-black p-1 bg-black text-white '>X</button>
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstname"
                        placeholder="Firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value) }
                        onClick={(e) => console.log(firstname) }
                        
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastname"
                        placeholder="Lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password_verif"
                        placeholder="Password Confirm"
                        value={password_verif}
                        onChange={(e) => setPassword_verif(e.target.value)}
                        />
                        

                    <button
                        id='button_Submit'
                        type="submit"
                        className="w-full bg-grey text-center py-3 rounded my-1 "
                        onClick={() => {sendDataRegister()}}
    
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the &nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark hover:text-zinc-600" href="#">
                            Terms of Service
                        </a> and &nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue hover:text-zinc-600" href="../login/">
                        Log in
                    </a>.
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal