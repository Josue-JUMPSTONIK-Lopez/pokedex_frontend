import React from 'react'
import { useUpdateAccount } from '../../customHooks/useUpdateAccount'
import './styles.css'

export const Account = () => {

  const {
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
  } = useUpdateAccount();

  return (
    <div className='UpdateUser'>
      <h1>User Information</h1>
      <form onSubmit={handleUserUpdateSubmit} className='FormUA'>
        <div className='FormUA--layout'>
            <div className='FormUA--labels'>
                <label className='FormUA--label' htmlFor="name">Name</label>
                <label className='FormUA--label' htmlFor="nickname">Nickname</label>
                <label className='FormUA--label' htmlFor="region">Region</label>
                <label className='FormUA--label' htmlFor="gender">Gender</label>
                <label className='FormUA--label' htmlFor="age">Age</label>
                <label className='FormUA--label' htmlFor="trainer_class">Trainer class</label>
            </div>
            <div className='FormUA--inputs'>
                <input onChange={handleNameChange} className='FormUA--input' type="text" name='name' id='name' value={name}/>
                <input onChange={handleNicknameChange} className='FormUA--input' type="text" name='nickname' id='nickname' value={nickname}/>
                <select onChange={handleRegionChange} className='FormUA--select' name="region" id="region" value={region}>
                    <option value="Kanto">Kanto</option>
                    <option value="Johto">Johto</option>
                    <option value="Hoenn">Hoenn</option>
                    <option value="Sinnoh">Sinnoh</option>
                    <option value="Unova">Unova</option>
                    <option value="Kalos">Kalos</option>
                    <option value="Alola">Alola</option>
                    <option value="Galar">Galar</option>
                    <option value="Hisui">Hisui</option>
                </select>
                <input onChange={handleGenderChange} className='FormUA--input' type="text" name='gender' id='gender' value={gender}/>
                <input onChange={handleAgeChange} className='FormUA--input' type="text" name='age' id='age' value={age}/>
                <select onChange={handleTrainerClassChange} className='FormUA--select' name="trainer_class" id="trainer_class" value={trainerClass}>
                    <option value="Battle">Battle</option>
                    <option value="Show">Show</option>
                </select>
            </div>
        </div>
        <button type='submit' className='FormUA--button'>Edit</button>
        <div></div>
    </form>
    </div>
  )
}
