import React from 'react'
import './styles.css'

export const Account = () => {
  return (
    <div className='UpdateUser'>
      <h1>User Information</h1>
      <form action='' className='FormUA'>
        <div className='FormUA--layout'>
            <div className='FormUA--labels'>
                <label className='FormUA--label' htmlFor="">Name</label>
                <label className='FormUA--label' htmlFor="">Nickname</label>
                <label className='FormUA--label' htmlFor="">Region</label>
                <label className='FormUA--label' htmlFor="">Gender</label>
                <label className='FormUA--label' htmlFor="">Age</label>
                <label className='FormUA--label' htmlFor="">Email</label>
                <label className='FormUA--label' htmlFor="">Trainer class</label>
            </div>
            <div className='FormUA--inputs'>
                <input className='FormUA--input' type="text"/>
                <input className='FormUA--input' type="text"/>
                <select className='FormUA--select' name="" id="">
                    <option value="">Kanto</option>
                    <option value="">Johto</option>
                    <option value="">Hoenn</option>
                    <option value="">Sinnoh</option>
                    <option value="">Unova</option>
                    <option value="">Kalos</option>
                    <option value="">Alola</option>
                    <option value="">Galar</option>
                    <option value="">Hisui</option>
                </select>
                <input className='FormUA--input' type="text"/>
                <input className='FormUA--input' type="text"/>
                <input className='FormUA--input' type="text"/>
                <select className='FormUA--select' name="" id="">
                    <option value="">Battle</option>
                    <option value="">Show</option>
                </select>
            </div>
        </div>
        <button type='submit' className='FormUA--button'>Edit</button>
        <div></div>
    </form>
    </div>
  )
}
