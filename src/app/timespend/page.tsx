"use client"
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbars";
import { useChat } from 'ai/react'
//import an image from publicc folder
import Image from 'next/image'
import dabha from 'public/091929.jpeg';

export default function App() {
    const router = useRouter()
  const [data, setData] = useState("nothing")
  const Completionist = () => <span>You are good to go!</span>;
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }
  
  const getUserDetails1 = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data.username)
  }
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: '',
          content:
            'Do not answer if the topic is not related to ganga. You are a digital human name Chacha Chaudhary And you help indian government to create awarness about ganga river and you are also a brand ambassador of ganga river. Your Native Language is Hindi and you can speak English also. If Someone Ask you about ganga river you can answer them. But if someone ask you about something else you can not answer them And Sorry I am not able to answer this. and teach and greet user that i am happy to see you here.',
          role: 'system'
        }
      ],
      api: '/api/chat'
    });

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id)
  }
  const color = 'white'

  const agam=getUserDetails1();
    return (
        <div>
        <Navbar />
        <div className="flex flex-auto">
          <div className="flex flex-auto">
            <div dir="rtl" className="mx-8 my-8">
            </div>
            <div>
            <div className="inline-grid-center px-1">
            <Image src={dabha} alt="chacha" height={1200} width={2000} className="padding-inline-center" />
            <h1></h1>
            </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <ul className="divide-y">
            {messages
              .filter((m) => m.role !== 'system')
              .map((m, index) => (
                <li key={index} className="py-4">
                  {m.role === 'user' ? 'User: ' : 'Chacha Chaudhary: '}
                  <span className="whitespace-pre-line">{m.content}</span>
                </li>
              ))}
          </ul>
{/*   
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              className="w-full border rounded-xl border-slate/50 py-2 px-4 text-green-900"
              placeholder="Say something..."
              value={input}
              onChange={handleInputChange}
            />
            <button
              className="bg-indigo-500 text-white font-semibold shadow rounded-full px-4 disabled:bg-indigo-500/50"
              type="submit"
              disabled={isLoading}
            >
              Send
            </button>
          </form> */}
        </div>
        <div className="flex flex-col my-100 items-center justify-center min-h-screen py--90 border-19 pb-10">
  
          <br />
          <hr />
          <div className="pb-20 border-solid">
          </div>
          <hr />
          <br />
        </div>
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">GangaEcoWarriors™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="https://www.facebook.com/chahachaudhary.tech" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/ganga_eco_warriors/?utm_source=qr" className="mr-4 hover:underline md:mr-6">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCj5WO9aIrSgNm5PdWWCfAcQ" className="mr-4 hover:underline md:mr-6">Youtube</a>
              </li>
              <li>
                <a href="https://x.com/eco_ganga5012?t=eZdH7yIfVnFOlHYFH81xgA&s=08" className="hover:underline">Twitter</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
}