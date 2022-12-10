import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.config'
import { IAuthButtonProps } from '../../types/auth.types'
import './login-with-email.scss'

const LoginWithEmail: React.FC<IAuthButtonProps> = ({ email, password, setWarning }) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const loginWithEmail = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch(error){
            console.log(error)
            setWarning(true)
        }
    }

    return (
            <button className='auth-button' onClick={loginWithEmail}>
            Login with email
        </button>
    )
}

export default LoginWithEmail;