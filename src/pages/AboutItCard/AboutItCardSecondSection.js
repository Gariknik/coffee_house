import styled from "styled-components";
import BeansLogoBlack from "../../assets/BeanslogoBlack.svg";
import PhotoInCard from "../../assets/PhotoInCard.svg";


const AboutItCardSecondSection = ({data, id}) => {
    const getTargetData = data.find(item => item.id === id);

    return (
        <StyledSection>
            <StyledContainer>
                <StyledImg src={PhotoInCard} alt="image of section" />
                <StyledWrappContent>
                    <StyledTitleTwo>
                        About It
                    </StyledTitleTwo>
                    <StyledBeans src={BeansLogoBlack} alt='beans logo icon' />
                    <StyledParagraph>
                        <b>Country: </b> {getTargetData.country}
                    </StyledParagraph>
                    <StyledParagraph>
                        <b>Description:</b> {getTargetData.description}
                    </StyledParagraph>
                    <StyledParagraph>
                        <b>Price: </b> {getTargetData.price}$
                    </StyledParagraph>
                </StyledWrappContent>
            </StyledContainer>
            <StyledHr />
        </StyledSection>
    );
};

export default AboutItCardSecondSection;

const StyledSection = styled.section`
    width: 100%;
    height: 50%;
    padding: 3rem 0;
    background: #fff;
`;

const StyledContainer = styled.div`
    padding: 0 10rem;
    height: 100%;
    display: flex;
    justify-content: space-around;

    
`;

const StyledImg = styled.img`
`;


const StyledWrappContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    
`;



const StyledTitleTwo = styled.h2`
    color: #000;
    font-size: 1.5rem;
    font-weight: 300;
`;

const StyledBeans = styled.img`
    margin: 0 0 2rem;
`;

const StyledParagraph = styled.p`
    margin: 0 auto 1rem 0;
    max-width: 30rem;
    
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #000;
  max-width: 15rem;
  margin: 1rem auto 0;
`;