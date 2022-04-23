import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;

    & .qr-main {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & .qr-form {
        height: 100%;
        width: 30rem;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        background-color: #c7c6c3;
    }

    & .mainOption {
        display: flex;
        align-items: center;
        height: 3rem;
        background-color: #b5b5a5;
        padding: 0.5rem;
        margin-bottom: 1.2rem;
    }

    & .option {
        display: flex;
        align-items: center;
        height: 3rem;
        background-color: #b5b5a5;
        padding: 0.5rem;
    }
`;

export const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 20rem;
    padding: 0.5rem;

    & label {
        width: 4rem;
        padding: 0.2rem;
    }

    & > input {
        border: 1px solid lightgray;
        border-radius: 2px;
        height: 2rem;
        padding: 0.3rem;
    }

    & .input-img {
        border: none;
        margin-left: 6px;
    }
`;

export const QrWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;
    padding: 2rem 0 0 2rem;

    & .download-main {
        display: flex;
        justify-content: center;
    }

    & .download-button {
        width: 6rem;
        height: 2.48rem;
        font-size: 1rem;
        border: none;
        background-color: #b5b5a5;
        cursor: pointer;
    }

    & .format-img {
        width: 4rem;
        height: 2.5rem;
        border: none;
        font-size: 1rem;
        background-color: #b5b5a5;
    }
`;
