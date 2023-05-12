import { Link } from "react-router-dom";
import styled from 'styled-components';


const CardGood = ({id, image, country, price, name, onCardClick}) => {
    const handleCardClick = () => {
        onCardClick(id);
    };
    return (
        <StyledLink to="/about-it">
            <StyledCard onClick={handleCardClick}>
                <StyledImgCard src={image} alt="card's image" />
                <StyledParagraph>
                    {name}
                </StyledParagraph>
                <StyledParagraph>
                    {country}
                </StyledParagraph>
                <StyledPrice>
                    {price}$
                </StyledPrice>
            </StyledCard>
        </StyledLink>

    );
};
export default CardGood;


const StyledLink = styled(Link)`
    text-decoration: none;
`;


const StyledCard = styled.div`
    width: 220px;
    height: 260px;                  
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
    margin: 0 3rem 3rem;
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