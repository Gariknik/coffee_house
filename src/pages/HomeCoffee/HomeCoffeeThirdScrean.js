import styled from "styled-components";
import cardImgOne from '../../assets/cards/cardImgOne.svg';
import cardImgTwo from '../../assets/cards/cardImgTwo.svg';
import cardImgThree from '../../assets/cards/cardImgThree.svg';

import ThirdBG from '../../assets/MaskGroup.svg';

const HomeCoffeeThirdScrean = ()=> {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle>
                    Our best
                </StyledTitle>
                <StyledWrapp>
                    <StyledCard>
                        <StyledImgCard src={cardImgOne} alt="card's image" />
                        <StyledParagraph>
                            Solimo Coffee Beans 2 kg
                        </StyledParagraph>
                        <StyledPrice>
                            10.73$
                        </StyledPrice>
                    </StyledCard>
                    <StyledCard>
                        <StyledImgCard src={cardImgTwo} alt="card's image" />
                        <StyledParagraph>
                            Presto Coffee Beans 1 kg
                        </StyledParagraph>
                        <StyledPrice>
                            15.99$
                        </StyledPrice>
                    </StyledCard>
                    <StyledCard>
                        <StyledImgCard src={cardImgThree} alt="card's image" />
                        <StyledParagraph>
                            AROMISTICO Coffee 1 kg
                        </StyledParagraph>
                        <StyledPrice>
                            6.99$
                        </StyledPrice>
                    </StyledCard>
                </StyledWrapp>
            </StyledContainer>
        </StyledSection>
    );
};
export default HomeCoffeeThirdScrean;

const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 11.25rem 0;
    background: url(${ThirdBG});
    background-size: cover;
    background-position: top;
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

const StyledWrapp = styled.div`
    display: flex;
    margin: 2.5rem 0 0 0;
    justify-content: space-between;
`;

const StyledCard = styled.div`
    height: 240px;
    width: 220px;
    margin: 0 3.5rem 0 0;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    display: flex;
    padding: 1.375rem 0 0;
    flex-direction: column;
`;

const StyledImgCard = styled.img`
    width: 151px;
    height: 130px;
    display: block;
    margin: 0 auto;
`;

const StyledParagraph = styled.p`
    color: #000;
    font-size: 0.875rem;
    font-weight: 400;
    margin: 1.5rem 0 0;
`;

const StyledPrice = styled.span`
    color: #000;
    font-size: 0.875rem;
    font-weight: 400;
    margin: 1.5rem 1.5rem 0 auto;
`;