import styled from "styled-components";
import BeansLogoBlack from "../../assets/BeanslogoBlack.svg";
import FYPPhoto from "../../assets/FYPPhoto.svg";


const ForYourPleasureSecondSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledImg src={FYPPhoto} alt="image of section" />
                <StyledWrappContent>
                    <StyledTitleTwo>
                        About our goods
                    </StyledTitleTwo>
                    <StyledBeans src={BeansLogoBlack} alt='beans logo icon' />
                    <StyledParagraph>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    </StyledParagraph>
                    <StyledParagraph>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                    </StyledParagraph>
                    <StyledParagraph>
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </StyledParagraph>
                </StyledWrappContent>

            </StyledContainer>
            <StyledHr />
        </StyledSection>
    );
};

export default ForYourPleasureSecondSection;

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
    text-align: center;
    
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
    margin: 0 0 1rem;
    max-width: 22rem;
    
`;

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #000;
  max-width: 15rem;
  margin: 1rem auto 0;
`;