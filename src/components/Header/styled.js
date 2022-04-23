import styled from "styled-components";

export const HeaderArea = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: #0f304b;

    & .container {
        display: flex;
        width: 50%;
        justify-content: space-between;
        margin: 0 auto;
    }

    & .container-img {
        display: flex;
        font-weight: bold;
        align-items: center;
        font-size: 1rem;
        color: #f3f3f3;
    }

    & .container-img > img {
        width: 50px;
        height: 50px;
        margin-right: 1rem;
    }

    & .buttons {
        display: flex;
        align-items: center;
    }
`;
