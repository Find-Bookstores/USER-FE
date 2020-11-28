import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 430px;
    height: calc(100vh - 104px);
    min-height: 500px;
    padding-top: 12%;
    margin: 0 auto;
`;

export const Title = style.div `
    width: 125px;
    margin-bottom: 35px;
`;
export const LogIn = style.div `
    text-align: center;
    font-size: 35px;
    font-weight: bold;
`;
export const UnderLine = style.div `
    width: 100%;
    height: 4px;
    background-color: #7B91FF;
    border-radius: 4px;
`;

export const Inputs = style.div `
    width: 429px;
`;
export const Input = style.input `
    width: 100%;
    height: 42px;
    border: 1px solid #000000;
    border-radius: 4px;
    padding-left: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    &::placeholder {
        color: black;
    }
`;
export const LogInBtn = style.button `
    width: 100%;
    height: 42px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: #7B91FF;
    color: white;
    margin-bottom: 19px;
    text-align: center;
`;
export const NoAccount = style.div `
    font-size: 12px;
    text-decoration: underline;
    text-align: center;
    > a {
        color: black;
        letter-spacing: 2px;
    }
`;