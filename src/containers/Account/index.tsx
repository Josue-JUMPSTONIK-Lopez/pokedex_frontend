import React from 'react'


export const Account = () => {
  return (
    <div>
      <h1>User Informetion</h1>
      <form action='' className='FormCA'>
        <div className='FormCA--layout'>
            <div className='FormCA--labels'>
                <label className='FormCA--label' htmlFor="">Name</label>
                <label className='FormCA--label' htmlFor="">Nickname</label>
                <label className='FormCA--label' htmlFor="">Region</label>
                <label className='FormCA--label' htmlFor="">Gender</label>
                <label className='FormCA--label' htmlFor="">Age</label>
                <label className='FormCA--label' htmlFor="">Email</label>
                <label className='FormCA--label' htmlFor="">Trainer class</label>
            </div>
            <div className='FormCA--inputs'>
                <input className='FormCA--input' type="text"/>
                <input className='FormCA--input' type="text"/>
                <select className='FormCA--select' name="" id="">
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
                <input className='FormCA--input' type="text"/>
                <input className='FormCA--input' type="text"/>
                <input className='FormCA--input' type="text"/>
                <select className='FormCA--select' name="" id="">
                    <option value="">Battle</option>
                    <option value="">Show</option>
                </select>
            </div>
        </div>
        <button type='submit' className='FormCA--button'>Create</button>
        <div></div>
    </form>
    </div>
  )
}
