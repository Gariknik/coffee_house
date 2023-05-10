import styled from 'styled-components';
import logo from '../assets/Logo.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <StyledSection className="light">
            <StyledContainer>
                <StyledLink to="/" className="dark">
                    <StyledWrap>
                        <StyledImg src={logo} alt="IconLOGO" />
                        Coffee house
                    </StyledWrap>
                </StyledLink>
                <StyledLink to="/our" className="dark">Our coffee</StyledLink>
                <StyledLink to="/for" className="dark">For your pleasure</StyledLink>
            </StyledContainer>
        </StyledSection>
    );
};

export default Header;

const StyledSection = styled.header`
  width: 100%;
  color: white;
  height: 6rem;
  position: fixed;
  z-index: 999;

  &.dark {
    color: white;
    mix-blend-mode: normal;
  }

  &.light {
    color: black;
    mix-blend-mode: exclusion;
  }
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
    text-decoration: none;
    font-weight: 400;
    font-size: 0.75rem;
    color: white;
    :hover {
        font-weight: 700;
    }
    &.dark {
        color: white;
    }

    &.light {
        color: black;
    }
`;

const StyledImg = styled.img`
    width: 35px;
    height: 35px;
    display: block;
`;

