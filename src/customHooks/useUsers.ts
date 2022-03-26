import { useEffect, useState } from 'react'


export const useUsers = () => {
    const [islogged, setIslogged] = useState(false)



    useEffect(() => {
      if (localStorage.getItem('email')) {
        logIn()
      }
    }, [])
    

    const logIn = () =>{
      setIslogged(true)
    }

    const logOut =() =>{
      setIslogged(false)
      localStorage.clear()
    }
  return {
      islogged,
      logIn,
      logOut
  }
}
