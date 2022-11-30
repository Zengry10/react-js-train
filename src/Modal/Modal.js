import React from 'react'
import { useState, useEffect } from "react"

function Modal( {closeModal })  {

    let [firstname, setFirstname] = useState('')
    let [lastname, setLastname] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    function CreateAccount(){
        fetch('http://edu.project.etherial.fr/users').then((res) => {
            res.json().then((json) =>{
                console.log(json)
            })
        })
    }

    useEffect(() => {
        CreateAccount()

    }, [])
     
    return(
        <div className="h-full w-full bg-black flex flex-col absolute opacity-40">
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
                        onChange={(e) => setFirstname(e.target.value)}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastname"
                        placeholder="Lastname"
                        value={lastname}
                        onChange={(e) => setFirstname(e.target.value)}
                        />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Password Confirm"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-dark hover:bg-green-dark focus:outline-none my-1"
                        onClick={() => {
                            
                        }}
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    )
}

export default Modal