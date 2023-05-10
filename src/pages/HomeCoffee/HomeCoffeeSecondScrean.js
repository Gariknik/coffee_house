import styled from "styled-components";
import BeansLogoBlack from '../../assets/BeanslogoBlack.svg';

const HomeCoffeeSecondScrean = ()=> {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle>
                    About Us
                </StyledTitle>
                <StyledBeans src={BeansLogoBlack} alt='beans logo icon' />
                <StyledParagraph>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </StyledParagraph>
                <StyledParagraph>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </StyledParagraph>
            </StyledContainer>
        </StyledSection>
    );
};
export default HomeCoffeeSecondScrean;

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 11.25rem 0;
`;

const StyledContainer = styled.div`
    padding: 0 6rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    
`;

const StyledTitle = styled.h1`
    color: #000;
    font-size: 2.5rem;
    font-weight: 400;
`;

const StyledBeans = styled.img`

`;

const StyledParagraph = styled.p`
    color: #000;
    max-width: 589px;
    font-size: 0.875rem;
    font-weight: 400;
    margin: 2.5rem 0 0;
`;