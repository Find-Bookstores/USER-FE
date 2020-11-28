import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 970px;
    height: calc(100vh - 104px);
    min-height: 700px;
    padding-top: 70px;
    margin: 0 auto;
`;

export const Title = style.div `
    width: 90px;
    margin-bottom: 58px;
`;
export const Book = style.div `
    width: 100%;
    font-size: 21px;
    font-weight: bold;
    text-align: center;
`;
export const UnderLine = style.div `
    width: 100%;
    height: 5px;
    background-color: #7B91FF;
    border-radius: 4px;
`;

export const Input = style.div `
    width: 920px;
    margin-left: 50px;
`;
export const Form = style.input `
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    padding-left: 30px;
    border: 1px solid #575757;
    margin-bottom: 10px;
    &::placeholder {
        font-size: 13px;
        color: #575757;
    }
`;

export const Img = style.div `
    width: 100%;
    height: 282px;
    border: 1px solid #575757;
    padding-top: 16px;
    padding-left: 20px;
    box-sizing: border-box;
    > div:first-child {
        display: flex;
    }
`;
export const ImgFlie = style.div `
    width: 746px;
    height: 45px;
    font-size: 13px;
    color: #575757;
`;
export const AddFlie = style.button `
    width: 109px;
    height: 30px;
    background-color: #D8E1E9;
    border: none;
    border-radius: 15px;
    color: #575757;
    font-size: 13px;
    font-weight: bold;
    > img {
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }
`;

export const Upload = style.button `
    width: 96px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: #49498A;
    color: white;
    float: right;
    margin-top: 10px;
`;