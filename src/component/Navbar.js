import React from 'react';
import styled from 'styled-components'
import Vector from '../Images/Vector.svg';
import Logo from '../Images/MEGAKHEIR-Logo 1.svg';
function Navbar() {
    return (
        <NavbarWrapper>
           <img src = {Vector} className = "vectoe" alt = '' />
           <div className="logo">
                <img src={Logo} alt='' />
           </div>
        </NavbarWrapper>
    )
}

export default Navbar

const NavbarWrapper = styled.div`
    display: flex;
    background-color: #fff;
    padding: 35px;
    .logo{
        margin: auto;
    }
    .vectoe{
        padding-left:20px
    }
`;