import styled from "styled-components";
import GoodsPage from "../../assets/MaskGroupFYP.svg";

const ForYourPleasureFirstSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle>
                    For your pleasure
                </StyledTitle>
            </StyledContainer>
        </StyledSection>
    );
};

export default ForYourPleasureFirstSection;

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    background: url(${GoodsPage});
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