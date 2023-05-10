import styled from 'styled-components';
import logo from '../assets/Logo.svg'
import {Link} from "react-router-dom";
import BeansLogoBlack from "../assets/BeanslogoBlack.svg";


const Footer = ()=>{
   return (
       <StyledSection className="light">
           <StyledContainer>
               <StyledWrapMenu>
                   <StyledLink to="/" >
                       <StyledWrap>
                           <StyledImg src={logo} alt="IconLOGO" />
                               Coffee house
                           </StyledWrap>
                   </StyledLink>
                   <StyledLink to="/our" >Our coffee</StyledLink>
                   <StyledLink to="/for" >For your pleasure</StyledLink>
               </StyledWrapMenu>
               <StyledBeans src={BeansLogoBlack} alt='beans logo icon' />
           </StyledContainer>

       </StyledSection>
   );
};

export default Footer;

const StyledSection = styled.footer`
  width: 100%;
  height: 9rem;
  color: black;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 1.5rem 6rem;
`;

const StyledWrapMenu = styled.div`
    width: 28rem;
    display: flex;
    justify-content: space-around;
    align-items: end;
    margin: 0 auto;
    
`;

const StyledWrap = styled.div`
    display: flex;
    width: 8rem;
    align-items: end;
    
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    font-size: 0.75rem;
    color: black;
    :hover {
        font-weight: 700;
    }
`;

const StyledImg = styled.img`
    width: 35px;
    height: 35px;
    display: block;
    color: black;
     :hover {
        font-weight: 700;
    }
`;

const StyledBeans = styled.img`
    margin: 2rem auto 0;
`;