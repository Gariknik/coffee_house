import styled from "styled-components";
import CardGood from "../../components/CardGood";
import FilterGoodsBlock from "../../components/FilterGoodsBlock";
import SeerchBlock from "../../components/SeerchBlock";


const OurCoffeeThirdSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledWrappFilterSeerchBlocks>
                    <SeerchBlock />
                    <FilterGoodsBlock />
                </StyledWrappFilterSeerchBlocks>
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

export default OurCoffeeThirdSection;

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

const StyledTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 400;
`;

const StyledWrappFilterSeerchBlocks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
   
`;

const StyledWrappContent = styled.div`
    max-width: 60rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
`;