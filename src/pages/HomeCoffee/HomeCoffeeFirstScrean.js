import styled from "styled-components";
import mainBG from '../../assets/Mainbg.svg';
import BeansLogo from '../../assets/Beanslogo.svg';

const HomeCoffeeFirstScrean = ()=> {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle>
                    Everything You Love About Coffee
                </StyledTitle>
                <StyledBeans src={BeansLogo} alt='beans logo icon' />

                <StyledTitleSecond>
                    We makes every day full of energy and taste
                </StyledTitleSecond>
                <StyledTitleSecond>
                    Want to try our beans?
                </StyledTitleSecond>
                <StyledButton type="button">More</StyledButton>
            </StyledContainer>
        </StyledSection>
    );
};
export default HomeCoffeeFirstScrean;

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    background: url(${mainBG});
    background-size: cover;
    background-position: top;
    padding: 11.25rem 0;
`;

const StyledContainer = styled.div`
    padding: 0 6rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

const StyledTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 400;
`;

const StyledBeans = styled.img`
    margin: 0 0 2.5rem;
`;

const StyledTitleSecond = styled.h2`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 400;
`;

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  color: #fff;
  font-size: 1rem;
  background: none;
  border: solid 1px #fff;
  border-radius: 3px;
  cursor: pointer;
  margin: 2.5rem 0 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000;
    background-color: #fff;
  }

  &:active {
    color: #ccc000;
    background-color: #fff;
  }
`;