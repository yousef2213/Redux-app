import React from 'react'
import Powered from '../Images/Powered-by.svg'
import Facebook from '../Images/Facebook.svg'
import Instagram from '../Images/instagram.svg'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterWrapper className="footer">
            <img src={Powered} alt="" />
            <div className="social-icon">
                <a href="https://www.facebook.com/" target="blank">
                    <img 
                        src={Facebook} 
                        alt="" 
                        className="facebook"
                    />
                </a>
                <a href="https://www.instagram.com" target="blank">
                        <img 
                            src={Instagram} 
                            alt="" 
                            className="instagram"
                        />
                </a>
            </div>
        </FooterWrapper>
    )
}

export default Footer


const FooterWrapper = styled.div`
    background: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .facebook{
        margin-right: 20px;
    }
`