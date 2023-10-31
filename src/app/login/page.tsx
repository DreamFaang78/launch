"use client";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"; 

import Image from 'next/image';
import {Chip} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import type { NextPage } from 'next';
export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
            toast("Hello World");
        } finally{
        setLoading(false);
        }
    }
    const color = 'white'

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
     <div className="flex flex-col items-center justify-center min-h-screen py-1 bg-cover italic">  
        <div><Toaster/></div>
        <div className="mb-20 text-1xl">
        <Card>
      <CardBody>
        <p>Welcome to Chacha Chaudhary 🎉🎉</p>
      </CardBody>
    </Card>
    </div>
    <div className="width:100%;height:0;padding-bottom:57%;position:relative;"><iframe src="https://giphy.com/embed/DkfGvUmPLhqg5uZ3y4" width="100%" height="100%" className="position:absolute" allowFullScreen></iframe></div>
        <Chip className="text-2xl mt-10" color="success"><span className="text-white">{loading ? "Processing" : "Login"}</span></Chip>
        <br />
        <br />
        <h1 className="text-3xl text-em text-center underline-offset-4">Discover Ganga Secret With <span className="text-indigo-700 underline">चाचा चौधरी</span></h1>
        <br />
        <br />
        <h1><Chip className="text-2xl size-2xl" color="warning" variant="shadow"><h2> {loading ? "Processing" : "Welcome Back"} </h2></Chip></h1>
        <hr />
        <br />
        <br />
        <Chip color="secondary">Your Email</Chip>
        <br />
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        {/* <label htmlFor="password">password</label> */}
        <Chip color="secondary">Your Password</Chip>
        <br />
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            


<button 
    onClick={onLogin}
    className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out"
>
    <span className="font-medium text-[#333] group-hover:text-white">{buttonDisabled ? "No Login" : "Login"}</span>
</button>
<br />
<p> Visit <Link href="/signup" color="success">Signup page</Link></p>


</div>


        
		
    )

}
