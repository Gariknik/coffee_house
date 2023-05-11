import styled from 'styled-components';

const SeerchBlock = () => {
    return (
        <StyledBlock>
            <StyledLabel>
                Lookiing for
            </StyledLabel>
            <StyledInput type="text" placeholder='start typing here...' />
        </StyledBlock>
    );
};
export default SeerchBlock;

const StyledBlock = styled.div`
    width: 284px;
    height: 30px;
    margin: 0 0 2rem;
    display: flex;
    justify-content: space-between;
`;

const StyledLabel = styled.p`

`;

const StyledInput = styled.input`
    width: 108px;
    height: 18px;
    padding: 0.25rem 1rem;
    border: none;
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;
