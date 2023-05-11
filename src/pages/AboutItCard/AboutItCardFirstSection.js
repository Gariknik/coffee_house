import styled from "styled-components";
import CoffeePage from "../../assets/MaskGroupOC.svg";

const AboutItCardFirstSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle>
                    Our Coffee
                </StyledTitle>
            </StyledContainer>
        </StyledSection>
    );
};

export default AboutItCardFirstSection;

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    background: url(${CoffeePage});
    background-size: cover;
    background-position: top;
    padding: 12rem 0 6rem;
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