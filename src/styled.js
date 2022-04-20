import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;

    & .qr-main {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    };

    & .qr-form {
        flex: 1;
        height: 100%;
        min-height: 300px;
        margin: 0 14rem;
        display: flex;
        flex-direction: column;
        background-color: lightgrey;
    }

    & .qr-display {
        flex: 1;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    & .qrcode {
        width: 100%;
    }

    & .mainOption {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: grey;
        padding: 0.5rem;
        width: 100%;
    }

    & .download-button {
        width: 6rem;
        height: 2.5rem;
        font-size: 16px;
        border: none;
    }

    & .format-img {
        width: 4rem;
        height: 2.5rem;
        border: none;
        background-color: lightgray;
    }

`

 export const D = styled.div`
     display: flex;
     align-items: center;
     height: 100%;
     width: 20rem;
     margin: 0 auto;
     padding: 0.3rem;

     & label {
         width: 4rem;
         padding: 0.2rem;
     };


     & > input {
         border: 1px solid lightgray;
         border-radius: 2px;
         height: 2rem;
         padding: 0.5rem;
     }

     & .input-img {
        border: none;
     }
 `;