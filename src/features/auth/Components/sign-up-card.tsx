import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from '../types';
import { useAuthActions } from "@convex-dev/auth/react";
interface SignupCardProps {
    setState: (state: SignInFlow) => void;
  }


const Signupcard = ({ setState }: SignupCardProps) => {
    const [pending, setPending] = useState(false);
    const [name, setName] = useState("")
   // const [error, setError] = useState("close");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("")
    const { signIn } = useAuthActions();
    const OnproviderSignin = (value:"google")=>{
      setPending(true)
    signIn(value)
    .finally(()=>{
      setPending(false)
    })
    }
  return (
    <div className="bg-white shadow-lg p-4 h-auto md:w-[400px] w-full rounded-md">
    <div className=" text-2xl font-semibold ">Signup to continue</div>
    <div className="text-sm  text-gray-600 mt-1  ">
      Use your email or another service to continue
    </div>

    <div className="mt-4">

      <form  className="space-y-4">
      <Input
    disabled={true}
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    placeholder="Full name"
    required
    />
        <Input
          disabled={true}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          disabled={true}
          value={password}
          onChange={(e) => {
            setPassowrd(e.target.value);
          }}
          type="password"
          placeholder="Password"
          required
        />
     <Input
    disabled={true}
    value={confirmpassword}
    onChange={(e)=>{setConfirmPassword(e.target.value)}}
    type="password"
    placeholder="Confirm Password"
    required
    />

        <button
          disabled={true}
          type="submit"
          className="bg-rose-500 py-2 w-full hover:bg-rose-500/80 text-sm disabled:opacity-70 text-white rounded-md flex justify-center items-center"
        >
          Continue
        </button>
       
      </form>
      <div className="w-full h-0.5 mt-5 mb-5 bg-gray-200" />
      <div className="pb-3 relative">
        <button
          disabled={pending}
          onClick={() => OnproviderSignin("google")}
          className="w-full py-2.5 hover:bg-gray-200 border-[2px] rounded-md bg-muted disabled:opacity-70 font-medium text-sm flex gap-2 justify-center"
        >
          <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
          Continue with Google
        </button>
      </div>
    </div>
    <div className="mt-3 pb-3 text-[13px] text-muted-foreground ">
     Already have an account?{" "}
      <span
       onClick={() => setState("signIn")}
        className="text-sky-700 hover:underline cursor-pointer"
      >
        {" "}
        Sign in{" "}
      </span>
    </div>
  </div>
  )
}

export default Signupcard