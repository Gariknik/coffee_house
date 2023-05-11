import styled from "styled-components";
import CardGood from "../../components/CardGood";


const ForYourPleasureThirdSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledWrappContent>
                    <CardGood/>
                    <CardGood/>
                    <CardGood/>
                    <CardGood/>
                    <CardGood/>
                    <CardGood/>
                </StyledWrappContent>
            </StyledContainer>
        </StyledSection>
    );
};

export default ForYourPleasureThirdSection;

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 3rem 0;
    background: #fff;
`;

const StyledContainer = styled.div`
    padding: 0 6rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;


const StyledWrappContent = styled.div`
    max-width: 60rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
`;