import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 1rem;

    & .qr-main {
        display: flex;
        align-items: center;
        width: 100%;
    };

    & .qr-form {
        flex: 1;
        height: 100%;
        min-height: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
`

export const Table = styled.table`
    & tr {
        display: flex;
        margin: 0 10rem;
    }

    & th {
        padding: 0.3rem;
    }

    & .bbb {
        width: 4rem;
        display: flex;
        justify-content: flex-start;
    }

    & th > input {
        border: 1px solid lightgray;
        border-radius: 2px;
        height: 2rem;
        padding: 0.5rem;
    }

    & .input-img {
        border: none;
        padding: 0.5rem 0;
    }
`;

// export const D = styled.div`
//     display: flex;
//     align-items: center;
//     height: 100%;
//     width: 20rem;
//     margin: 0 auto;
//     padding: 0.3rem;

//     & label {
//         padding: 0.2rem;
//         margin-right: 0.3rem;
//     };

//     & > input {
//         border: 1px solid lightgray;
//         border-radius: 2px;
//         height: 2rem;
//         padding: 0.5rem;
//     }

// `;