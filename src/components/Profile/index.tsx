import arrow  from '../../imgs/icons8-expand-arrow-96.png'
import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { ProfileProps } from '../../utils/interfaces';


export const Profile = (props: ProfileProps) => {

  const navigate = useNavigate();

  

  return (
    <div className='profile-container'>

<div className="dropdown">
  <button className="dropbtn">
  <div className='profilePicture'></div>
  <img className='dropdown-arrow' src={arrow} alt="display profile options"></img>
  </button>
  <div className="dropdown-content">
    <button onClick={()=> navigate("/account")} className='dropdown--button'>Account</button>
    <button 
    onClick={()=> {
      props.logOut();
      navigate("/")
    }} 
    className='dropdown--button' >Logout</button>
  </div>
</div>
        
    </div>
  )
}
