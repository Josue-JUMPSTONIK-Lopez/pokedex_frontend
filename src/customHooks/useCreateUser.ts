import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const useCreateUser = (logIn: { (): void; (): void; }) => {

    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [region, setRegion] = useState("Kanto")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [trainerClass, setTrainerClass] = useState("Battle")
    const [password, setPassword] = useState("")
    // props.setIslogged(true)

    const navigate = useNavigate();

    function handleErrors(response:any) {
        console.log(email, password)
        if (!response.ok) {
            throw Error(response.statusText);
  
        }
        return response.json();
    }

    const handleSubmit = (event: { preventDefault: () => void }) =>{
        // alert('hey')
        fetch('http://localhost:3001/api/v1/users/create-user',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                nickname,
                region,
                gender,
                age,
                email,
                trainerClass,
                password
            })
        })
        .then( handleErrors)
        .then( data => {
            console.log(data);
            localStorage.setItem('user_id', data[0].user_id)
            localStorage.setItem('name', data[0].name)
            localStorage.setItem('email', data[0].email)
            localStorage.setItem('nickname', data[0].nickname)
            localStorage.setItem('region', data[0].region)
            localStorage.setItem('gender', data[0].gender)
            localStorage.setItem('age', data[0].age)
            localStorage.setItem('trainer_class', data[0].trainer_class)
            logIn()
            navigate('/')
        })
        event.preventDefault();
    }

    const handleNameChange = (e: { target: { value: string; }; }) => {
        let {value} = e.target;
        setName(value)
    }

    const handleNicknameChange = (e: { target: { value: string; }; }) => {
        let {value} = e.target;
        setNickname(value)
    }

    const handleRegionChange = (e: { target: { value: string; }; }) => {
        let {value} = e.target;
        setRegion(value)
    }

    const handleGenderChange = (e: { target: { value: string; }; }) => {
        let {value} = e.target;
        setGender(value)
    }

    const handleAgeChange = (e: { target: { value: string; }; }) => {
        let {value} = e.target;
        setAge(value)
    }

    const handleEmailChange = (e: { target: { value: string; }; }) => {
        let {value} = e.target;
        setEmail(value)
    }

    const handleTrainerClassChange = (e: { target: {value: string; }; }) => {
        let {value} = e.target;
        setTrainerClass(value)
    }

    const handlePasswordchange = (e: { target: {value: string; }; }) => {
        let {value} = e.target;
        setPassword(value)
    }

  return {
    handleSubmit,
    name,
    nickname,
    region,
    gender,
    age,
    email,
    trainerClass,
    password,
    handleNameChange,
    handleNicknameChange,
    handleRegionChange,
    handleGenderChange,
    handleAgeChange,
    handleEmailChange,
    handleTrainerClassChange,
    handlePasswordchange,
  }

}


