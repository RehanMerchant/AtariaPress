"use client"
import { useState } from "react";
import { SignInFlow } from "../types";
import Signincard from "./sign-in-card";
import Signupcard from "./sign-up-card";

const Authscreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div>
    {
  state === 'signIn'? <Signincard setState={setState}/> : <Signupcard setState={setState} />
}
    </div>
       </div>
  )
}

export default Authscreen