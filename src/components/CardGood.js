import styled from 'styled-components';
import cardImgTwo from "../assets/cards/cardImgTwo.svg";
import { useNavigate } from "react-router-dom";

const CardGood = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/about-it');
    };

    return (
        <StyledCard onClick={handleCardClick}>
            <StyledImgCard src={cardImgTwo} alt="card's image" />
            <StyledParagraph>
                Presto Coffee Beans 1 kg
            </StyledParagraph>
            <StyledParagraph>
                Kenya
            </StyledParagraph>
            <StyledPrice>
                6.99$
            </StyledPrice>
        </StyledCard>
    );
};
export default CardGood;


const StyledCard = styled.div`
    width: 220px;
    height: 260px;                  
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
    margin: 0 3.5rem 2rem 0;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    display: flex;
    padding: 1.375rem 0 0;
    flex-direction: column;
    cursor: pointer;
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
    margin: 1rem 1.5rem 0 auto;
`;

const StyledPrice = styled.span`
    color: #000;
    font-size: 0.875rem;
    font-weight: 400;
    margin: 1rem 1.5rem 0 auto;
`;