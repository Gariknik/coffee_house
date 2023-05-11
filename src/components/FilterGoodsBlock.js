import styled from 'styled-components';

const FilterGoodsBlock = () => {
    return (
        <StyledBlock>
            <StyledLabel>
                Or filter
            </StyledLabel>
            <StyledButtonBlock>
                <StyledButton type="button">Brazil</StyledButton>
                <StyledButton type="button">Kenya</StyledButton>
                <StyledButton type="button">Columbia</StyledButton>
            </StyledButtonBlock>

        </StyledBlock>
    );
};
export default FilterGoodsBlock;

const StyledBlock = styled.div`
    width: 326px;
    height: 30px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
    margin: 0 0 2rem;
    display: flex;
    justify-content: space-between;
`;

const StyledLabel = styled.p`

`;

const StyledButtonBlock = styled.div`

`;

const StyledButton = styled.button`
  width: 75px;
  height: 30px;
  color: #000;
  font-size: 1rem;
  background: none;
  border: solid 1px #c5c5c5;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: solid 1px #c1c1c1;
  }

  &:active {
    border: solid 1px #c1c1c1;
  }
  &:focus {
    border: solid 1px #1c1c1c;
    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.35));
  }
`;