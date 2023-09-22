"use client"
import { useEffect } from "react"

export default function Home() {
    
    useEffect(()=>{
        console.log('this is login page')
    },[]);
    return (
        <div>
            ID : <input type="text" name="" id="" />
            PW : <input type="password" name="" id="" />
        </div>
    )
  }