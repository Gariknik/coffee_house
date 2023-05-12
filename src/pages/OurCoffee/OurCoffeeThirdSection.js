import {useState} from "react";

import styled from "styled-components";
import CardGood from "../../components/CardGood";
import FilterGoodsBlock from "../../components/FilterGoodsBlock";
import SeerchBlock from "../../components/SeerchBlock";



const OurCoffeeThirdSection = ({data, handleCardClick}) => {

    const [country, setCountry] = useState('All');
    const [name, setName] = useState('');

    const onSeerchTyping = (items, name)=> {
        if (name.length === 0) return items;
        if (name.length !== 0) {
            return items.filter(item => item.name.includes(name));
        }
        return items;
    };

    const onUpdateSearch = (name) => {
        setName(name);
    };

    const onFilterCountry = (items ,country)=> {
        if (country !== 'All') {
            return items.filter(item => item.country === country);
        }
        return items;
    };

    const onUpdateFilter = (country) => {
        setCountry(country);
    };


    const visinleData = onFilterCountry(onSeerchTyping(data, name), country);
    const showCardsData = visinleData.map(item => {
        const key = item.id;
        return <CardGood key={key} {...item} onCardClick={(id) => handleCardClick(id)}/>;
    });
    return (
        <StyledSection>
            <StyledContainer>
                <StyledWrappFilterSeerchBlocks>
                    <SeerchBlock onUpdateSearch={onUpdateSearch}/>
                    <FilterGoodsBlock onUpdateFilter={onUpdateFilter}/>
                </StyledWrappFilterSeerchBlocks>
                <StyledWrappContent>
                    {showCardsData}
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
    padding: 0 8rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;


const StyledWrappFilterSeerchBlocks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
   
`;

const StyledWrappContent = styled.div`
    max-width: 60rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;