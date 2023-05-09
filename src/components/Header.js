import styled from 'styled-components';
import logo from '../assets/Logo.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <StyledSection>
            <StyledContainer>
                <StyledLink to="/">
                    <StyledWrap>
                        <StyledImg src={logo} alt="IconLOGO" />
                        Coffee house
                    </StyledWrap>
                </StyledLink>
                <StyledLink to="/our">Our coffee</StyledLink>
                <StyledLink to="/for">For your pleasure</StyledLink>
            </StyledContainer>
        </StyledSection>
    );
};

export default Header;

const StyledSection = styled.header`
    width: 100%;
    height: 6rem;
    position: fixed;
    z-index: 999;
`;

const StyledContainer = styled.div`
    width: 28rem;
    padding: 3.25rem 6rem;
    display: flex;
    justify-content: space-around;
    align-items: end;
    
`;

const StyledWrap = styled.div`
    display: flex;
    width: 8rem;
    align-items: end;
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    font-size: 0.75rem;
    
`;

const StyledImg = styled.img`
    width: 35px;
    height: 35px;
    display: block;
    height: 2rem;
`;

