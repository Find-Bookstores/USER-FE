import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 842px;
    height: calc(100vh - 104px);
    min-height: 650px;
    margin: 0 auto;
    padding-top: 4%;
`;

// logo
export const Title = style.div `
    width: 133px;
    text-align: center;
    margin-bottom: 30px;
`;
export const MyPage = style.div `
    width: 100%;
    font-size: 21px;
    font-weight: bold;
`;
export const UnderLine = style.div `
    width: 133px;
    height: 5px;
    background-color: #7B91FF;
    border-radius: 4px;
`;

// user-info
export const InfoSize = style.div `
    width: 678px;
    height: 280px;
    margin-left: 60px;
`;
export const Info = style.div `
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 8px;
`;
export const InfoLine = style.div `
    width: 678px;
    height: 2.8px;
    background-color: black;
`;
export const InfoUl = style.ul `
    width: 678px;
    padding: 0;
    margin: 0;
    > li:nth-child(3) > div:first-child {
        margin-right: 103px;
    }
    > li:nth-child(4) > div:first-child {
        margin-right: 65px;
    }
`;
export const InfoLi = style.li `
    width: 100%;
    height: 51px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #888888;
    > div:first-child {
        margin-left: 13px;
        margin-right: 115px;
        font-size: 13px;
    }
`;
export const InfoInput = style.input `
    width: 400px;
    height: 30px;
    background-color: #C8C8C8;
    border: 1px solid #C8C8C8;
    border-radius: 3px;
    font-size: 12px;
    box-sizing: border-box;
    padding-left: 15px;
`;
export const PwInput = style(InfoInput) `
    background-color: #F6F7F8;
`;
export const ModifyBtn = style.button `
    width: 96px;
    height: 28px;
    border: none;
    border-radius: 15px;
    background-color: #49498A;
    color: white;
    float: right;
    margin-top: 10px;
    box-shadow: 2px 5px 10px 0 rgba(0, 0, 0, 0.16);
`;

// star-bookStore
export const StarSize = style(InfoSize) `

`;
export const Star = style(Info) `
    font-size: 15px;
`;
export const StarLine = style(InfoLine) `
    margin-bottom: 34px;
`;
export const Stores = style.div `
    width: 678px;
    height: 183px;
    > div:not(:nth-child(4n)) {
        margin-right: 15px;
    }
`;

// BookStore.js
export const BookStoreBox = style.div `
    width: 158px;
    height: 85px;
    border: 1.5px solid #49498A;
    font-size: 10px;
    box-sizing: border-box;
    padding-top: 15px;
    text-align: center;
    margin-bottom: 11px;
    float: left;
    > div:first-child {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;