import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles.css";


interface buttonProps{
    children: React.ReactNode,
    class: string
    path:string
}

export const Button = (props: buttonProps) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(props.path)} className={props.class}>
            {props.children}
        </button>
    )
}
