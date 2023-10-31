"use client"
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import React,{useState} from "react";
import {Link, Button} from "@nextui-org/react";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
export default function App() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }
    const getUserName = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.username)
    }

  return (
    <Navbar>
      <NavbarBrand>
      <Link color="foreground" href="/profile">
          Gnaga Eco Warriors
          </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/timespend">
          🕒 Time Spend
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/talkWithChaudhary" aria-current="page">
          Talk With Chaudhary 😊
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/certificate">
          🎓 Certificates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/aboutus">
            ℹ️ About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://forms.gle/eEEcX25R9XA1BsRe8">
          ⚡️ Feedback Form
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={logout} color="primary" href="#" variant="flat">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}