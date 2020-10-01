import React from 'react';
import styled from 'styled-components'
import Vector from '../Images/Vector.svg';
import Logo from '../Images/MEGAKHEIR-Logo 1.svg';
function Navbar() {
    return (
        <NavbarWrapper>
           <img src={Vector} alt='' />
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
    padding: 25px;
    .logo{
        margin: auto;
    }
`;