"use client";

import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '../../firebase/config'

const SignUp = () =>{

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const email = formData.get('email') as string;
        const password = formData.get("password") as string;
        
        const response = await createUserWithEmailAndPassword(email, password);
        console.log(response);
        
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

export default SignUp;