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
        .then( res => res.json())
        .then( data => {
            logIn()
            console.log(data);
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


