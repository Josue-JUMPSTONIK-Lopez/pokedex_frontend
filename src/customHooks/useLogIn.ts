import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const useLogIn = (logIn : { (): void; (): void; }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleErrors(response:any) {
      console.log(email, password)
      if (!response.ok) {
          throw Error(response.statusText);

      }
      return response.json();
    }

    const handleSubmit = (event: { preventDefault: () => void }) =>{
        // alert('hey')
        
        fetch('http://localhost:3001/api/v1/users/login',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
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
            logIn();
            navigate('/')
        })
        .catch( data =>{
          console.log(data)
        })
        event.preventDefault();
    }

    const handleEmailChange = (e: { target: { value: string; }; }) =>{
      let {value} = e.target;
        setEmail(value)
    }

    const handlePasswordChange = (e: { target: { value: string; }; }) =>{
      let {value} = e.target;
        setPassword(value)
    }


  return {
    handleSubmit,
    email,
    password,
    handleEmailChange,
    handlePasswordChange
  }
}
