import React, { useState } from 'react'
import pokedexImg from "../../imgs/icons8-pokedex-96.png"
import "./styles.css"
import { useCreateUser } from '../../customHooks/useCreateUser';
import { CreatAccountProps } from '../../utils/interfaces';

export const CreateAccount = (props: CreatAccountProps) => {

    

    const{
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
    } = useCreateUser(props.logIn)


  return (
    <div className='CreateAcount'>
        <img src={pokedexImg} alt="" />
    <h1>Create Account</h1>
    <form onSubmit={handleSubmit} method='Post' className='FormCA'>
        <div className='FormCA--layout'>
            <div className='FormCA--labels'>
                <label className='FormCA--label' htmlFor="Name">Name</label>
                <label className='FormCA--label' htmlFor="Nickname">Nickname</label>
                <label className='FormCA--label' htmlFor="Region">Region</label>
                <label className='FormCA--label' htmlFor="Gender">Gender</label>
                <label className='FormCA--label' htmlFor="Age">Age</label>
                <label className='FormCA--label' htmlFor="Email">Email</label>
                <label className='FormCA--label' htmlFor="Trainer_class">Trainer class</label>
                <label className='FormCA--label' htmlFor="password">Password</label>
            </div>
            <div className='FormCA--inputs'>
                <input onChange={handleNameChange} className='FormCA--input' type="text" name='Name' id='Name' value={name} placeholder='Name'/>
                <input onChange={handleNicknameChange} className='FormCA--input' type="text" name='Nickname' id='Nickname' value={nickname} placeholder='Nickname'/>
                <select onChange={handleRegionChange} className='FormCA--select' name="Region" id="Region" value={region}>
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
                <input onChange={handleGenderChange} className='FormCA--input' type="text" name='Gender' id='Gender' value={gender} placeholder='Gender'/>
                <input onChange={handleAgeChange} className='FormCA--input' type="text" name='Age' id='Age' value={age} placeholder='Age'/>
                <input onChange={handleEmailChange} className='FormCA--input' type="email" name='Email' id='Email' value={email} placeholder='example@email.com'/>
                <select onChange={handleTrainerClassChange} className='FormCA--select' name="Trainer_class" id="Trainer_class" value={trainerClass} placeholder="Password">
                    <option value="Battle">Battle</option>
                    <option value="Show" >Show</option>
                </select>
                <input onChange={handlePasswordchange} className='FormCA--input' type="password" name='password' id='password' value={password}/>
            </div>
        </div>
        <button type='submit' className='FormCA--button'>Create</button>
        <div></div>
    </form>
    </div>
  )
}
