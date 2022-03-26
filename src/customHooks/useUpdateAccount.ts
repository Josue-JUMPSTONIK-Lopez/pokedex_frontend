import { useEffect, useState } from 'react'

export const useUpdateAccount = () => {

    const [userId, setUserId] = useState("")
    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [region, setRegion] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [trainerClass, setTrainerClass] = useState("")

    useEffect(() => {
        if (localStorage.getItem('user_id')) {
            const id = localStorage.getItem('user_id') ?? "-1"
            setUserId(id)
            getUser(id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleErrors(response:any) {
        // console.log(email, password)
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    const getUser = (id:string) =>{
        fetch(`http://localhost:3001/api/v1/users/${id}`)
        .then( handleErrors)
        .then( data => {
            console.log(data);
            localStorage.setItem('name', data[0].name)
            localStorage.setItem('nickname', data[0].nickname)
            localStorage.setItem('region', data[0].region)
            localStorage.setItem('gender', data[0].gender)
            localStorage.setItem('age', data[0].age)
            localStorage.setItem('trainer_class', data[0].trainer_class)
            setName(data[0].name);
            setNickname(data[0].nickname);
            setRegion(data[0].region);
            setGender(data[0].gender);
            setAge(data[0].age);
            setTrainerClass(data[0].trainer_class);
        })
    }

    const handleUserUpdateSubmit = (event: { preventDefault: () => void }) =>{
        // alert('hey')
        fetch('http://localhost:3001/api/v1/users/',{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                name,
                nickname,
                region,
                gender,
                age,
                trainerClass,
            })
        })
        .then( handleErrors)
        .then( data => {
            console.log(data);
            localStorage.setItem('user_id', data[0].user_id)
            localStorage.setItem('name', data[0].name)
            localStorage.setItem('nickname', data[0].nickname)
            localStorage.setItem('region', data[0].region)
            localStorage.setItem('gender', data[0].gender)
            localStorage.setItem('age', data[0].age)
            localStorage.setItem('trainer_class', data[0].trainer_class)
        })
        event.preventDefault();
    }

    const handleNameChange = (e: { target: { value: string; }}) =>{
        let {value} = e.target;
        setName(value)
    }

    const handleNicknameChange = (e: { target: { value: string; }}) =>{
        let {value} = e.target;
        setNickname(value)
    }

    const handleRegionChange = (e: { target: { value: string; }}) =>{
        let {value} = e.target;
        setRegion(value)
    }

    const handleGenderChange = (e: { target: { value: string; }}) =>{
        let {value} = e.target;
        setGender(value)
    }

    const handleAgeChange = (e: { target: { value: string; }}) =>{
        let {value} = e.target;
        setAge(value)
    }

    const handleTrainerClassChange = (e: { target: { value: string; }}) =>{
        let {value} = e.target;
        setTrainerClass(value)
    }
    
  return {
    name,
    nickname,
    region,
    gender,
    age,
    trainerClass,
    handleNameChange,
    handleNicknameChange,
    handleRegionChange,
    handleGenderChange,
    handleAgeChange,
    handleTrainerClassChange,
    handleUserUpdateSubmit
  }
}
