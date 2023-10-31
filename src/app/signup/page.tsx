"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import {Button} from '@nextui-org/button'; 
// import {Snippet} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            toast.success("Signup success");
            router.push("/login");
        } catch (error:any) {
            console.log("Signup failed", error.message);
            router.push("/login");
            toast("Signup Succesfull");
        }finally {
            setLoading(false);
        }
    }
    const variants = ["bordered"];

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <>
        <div>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 align-left">
   
        <div><Toaster/></div>
        <div className="width:100%;height:0;padding-bottom:182%;position:relative;"><iframe src="https://giphy.com/embed/DVCq4klea8q7InXq4L" width="100%" height="100%" className="position:absolute" allowFullScreen></iframe></div>
        <h1><Chip className="text-2xl size-2xl" color="warning" variant="shadow"><h2> {loading ? "Processing" : "ECO WARRIORS"} </h2></Chip></h1>
        <hr />
        <br />
        <Chip color="secondary">Your Name</Chip>
        <br />
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="Your Name"
            />
        {/* <label htmlFor="email">email</label> */}
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
            <Button
            color="success"
            variant="shadow"
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</Button>
            <Link href="/login">Visit login page</Link>
        </div>
        </div>
        </>
    )

}