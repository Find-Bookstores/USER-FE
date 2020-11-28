import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 905px;
    height: calc(100vh - 104px);
    min-height: 650px;
    margin: 0 auto;
    padding-top: 6%;
    > div:last-child {
        display: flex;
    }
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
    width: 100%;
    height: 5px;
    background-color: #7B91FF;
    border-radius: 4px;
`;

// category
export const Category = style.div `
    width: 133px;
`;
export const CategoryBtn = style.button `
    width: 127px;
    height: 27px;
    background-color: ${({color}) => color === true ? 'white' : '#F6F7F8'};
    color: ${({color}) => color === true ? '#49498A' : 'black'};
    border: ${({color}) => color === true ? '1px solid black' : 'none'};
    border-radius: 3px;
    margin-bottom: 15px;
    text-align: left;
    > div {
        display: ${({color}) => color === true ? 'inline-block' : 'none'};
        float: right;
        font-weight: bold;
    }
`;

// StoreUserInfo.js
export const InfoSize = style.div `
    width: 678px;
    height: 280px;
    margin-left: 100px;
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
    > li:nth-child(3n) > div:first-child {
        margin-right: 103px;
    }
    > li:nth-child(4) > div:first-child {
        margin-right: 64px;
    }
    > li:nth-child(5) > div {
        margin-right: 100px;
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
export const ModifyInput = style(InfoInput) `
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

// BookInventory.js
export const InvenSize = style.div `
    width: 746px;
    height: 460px;
    margin-top: -40px;
    margin-left: 50px;
`;
export const Inven = style.div `
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 3px;
`;
export const InvenLine = style.div `
    width: 746px;
    height: 1.4px;
    background-color: black;
`;
export const InvenUl = style.ul `
    width: 746px;
    padding: 0;
    margin: 0;
`;
export const InvenLi = style.li `
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #888888;
    display: flex;
    font-size: 13px;
    align-items: center;
    > div {
        text-align: center;
    }
    > div:first-child {
        width: 7%;
        > img {
            margin-top: 5px;
            width: 28px;
            height: 37px;
        }
    }
    > div:nth-child(2) {
        width: 37%;
    }
    > div:nth-child(3) {
        width: 13%;
    }
    > div:nth-child(4) {
        width: 27.1%;
    }
    > div:last-child {
        width: 15.9%;
    }
`;
export const InvenTitleLi = style(InvenLi) `
    height: 54px;
    > div:first-child {
        width: 8%;
        text-align: center;
    }
    > div:nth-child(2) {
        width: 40%;
        text-align: center;
    }
    > div:nth-child(3) {
        width: 17.9%;
        text-align: center;
    }
    > div:nth-child(4) {
        width: 27.1%;
        text-align: center;
    }
    > div:last-child {
        margin-right: 29px;
        width: 15%;
        text-align: right;
    }
`;
export const CheckBtn = style.button `
    width: 15px;
    height: 15px;
    background-color: ${({color}) => color === true ? '#7B91FF' : 'white'};
    border: 1px solid #888888;
    border-radius: 3px;
`;