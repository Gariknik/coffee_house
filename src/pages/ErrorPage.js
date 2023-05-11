import styled from "styled-components";
import mainBG from "../assets/Mainbg.svg";

const ErrorPage = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle>
                    Page not found (Error 404)
                </StyledTitle>
            </StyledContainer>
        </StyledSection>
    );
};

export default ErrorPage;


const StyledSection = styled.section`
    width: 100%;
    height: 100%;
    background: url(${mainBG});
    background-size: cover;
    background-position: top;
    padding: 13rem 0;
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