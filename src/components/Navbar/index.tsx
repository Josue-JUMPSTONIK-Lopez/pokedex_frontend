import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../statics/images/logo_v4.svg';
import { NavbarProps } from '../../utils/interfaces';
import { Button } from '../Button/index';
import { ButtonWrapper } from '../ButtonWrapper';
import { Profile } from '../Profile';
import "./styles.css"

const Navbar = (props:NavbarProps) => {

  
  return (
    <nav>
        <img className='logo' src={logo} alt="Logo"/>
        <ButtonWrapper>
          <Button path="/" class='navButton button--separator'>
            Home
          </Button>
          {props.islogged ?
          <Button path="PC" class='navButton button--separator'>
            PC
          </Button>
          :
          <Button path="Login" class='navButton button--separator'>
            Log In
          </Button>
          }
          {props.islogged ?
          <Profile logOut={props.logOut}/>
          :
          <Button path="CreateAccount" class='navButton button--separator'>
            Create Account
          </Button>
          }
        </ButtonWrapper>
    </nav>
  );
};

export default Navbar;
