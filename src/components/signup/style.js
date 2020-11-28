import style from 'styled-components';

/* CheckSignUp */
export const Size = style.div `
    box-sizing: border-box;
    width: 619px;
    height: calc(100vh - 104px);
    min-height: 600px;
    margin: 0 auto;
    padding-top: 90px;
    > div:first-child {
        width: 163px;
        margin-bottom: 85px;
    }
    > div:last-child {
        display: flex;
        > a > div:first-child {
            margin-right: 103px;
        }
    }
`;
export const Title = style.div `
    font-size: 35px;
    font-weight: bold;
    margin-left: 21px;
`;
export const Line = style.div `
    height: 4px;
    background-color: #7B91FF;
    border-radius: 6px;
    width: 163px;
`;
export const SignUpBox = style.div `
    width: 258px;
    height: 314px;
    background-color: #49498A;
    border-radius: 16px;
    cursor: pointer;
    > img {
        width: 148px;
        height: 148px;
        margin: 83px 0 30px 55px
    }
    &:hover {
        background-color: #7B91FF;
        > div {
            color: black;
        }
    }
`;
export const Name = style.div `
    width: 100%;
    font-size: 21px;
    color: white;
    text-align: center;
`;

/* UserSignUp */
export const USUsize = style.div `
    box-sizing: border-box;
    width: 577px;
    height: calc(100vh - 104px);
    min-height: 650px;
    margin: 0 auto;
    padding-top: 90px;
    > div:last-child {
        margin-top: 57px;
        > div:nth-child(2) {
            display: flex;
        }
    }
`;
export const USUtitle = style(Title) `
    margin-left: 19px;
`;
export const Form = style.input `
    width: 463px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: 29px;
    margin-bottom: 15px;
    &::placeholder {
        font-size: 13px;
        color: #373737;
    }
`;
export const SignUp = style.button `
    width: 497px;
    height: 42px;
    background-color: #7B91FF;
    color: white;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
`;
export const Test = style.button `
    width: 65px;
    height: 21px;
    border: 1px solid #49498A;
    background-color: #7B91FF;
    border-radius: 11px;
    color: white;
    font-size: 9px;
    cursor: pointer;
    margin: 12px 0 0 15px;
`;

/* StoreUserSignUp */
export const ASUsize = style(USUsize) `
    > div:last-child {
        margin-top: 57px;
        > div:nth-child(3) {
            display: flex;
        }
    }
`