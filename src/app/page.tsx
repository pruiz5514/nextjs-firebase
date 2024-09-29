"use client"
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../firebase/config'
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const router = useRouter();
  const [user] = useAuthState(auth);

  if(!user) {
    router.push("/sign-in")
  } 
  return (
    <>
     <div>oe</div>
     <button onClick={()=>{
      signOut(auth);
      router.push("/sign-in")
     }}>Cerrar sesion</button>
    </>
  );
}
