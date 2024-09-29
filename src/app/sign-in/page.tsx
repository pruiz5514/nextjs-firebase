"use client";

import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '../../firebase/config'
import { useRouter } from 'next/navigation';

const SignIn = () =>{

    const [signInWithEmailAndPasswors] = useSignInWithEmailAndPassword(auth); 
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const email = formData.get('email') as string;
        const password = formData.get("password") as string;

        try{
            const response  = await signInWithEmailAndPasswors(email, password);
            router.push("/");
        }catch{
            event.currentTarget.reset();  
        }
    }
    return(
        
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button>Registrar</button>
                </form>
            </main>
        </>
    )
}

export default SignIn;