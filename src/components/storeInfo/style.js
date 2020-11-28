import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 960px;
    height: calc(100vh - 104px);
    min-height: 590px;
    padding-top: 6%;
    margin: 0 auto;
    > div:last-child {
        display: flex;
        margin-left: 30px;
    }
`;

export const Title = style.div `
    width: 111px;
`;
export const StoreInfo = style.div `
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

// StoreInfo.js
export const Info = style.div `
    width: 537px;
    height: 254px;
    margin-right: 33px;
`;
export const InfoUl = style.ul `
    width: 537px;
    padding: 0;
    > li:nth-child(3) > div:last-child {
        letter-spacing: 2px;
    }
    > li:last-child > div:last-child {
        font-size: 12px;
        padding-top: 5px;
    }
`;
export const InfoLi = style.li `
    width: 100%;
    height: 60px;
    font-size: 14px;
    border-bottom: 0.7px solid #888888;
    display: flex;
    align-items: center;
    > div:first-child {
        margin: 0 50px 0 20px;
    }
`;
export const TitleInfoLi = style(InfoLi) `
    font-size: 22px;
    font-weight: bold;
    border-bottom: 1.4px solid black;
`;
export const InfoBox = style.div `
    width: 361px;
    height: 30px;
    box-sizing: border-box;
    padding: 3px 0 0 20px;
    background-color: #F6F7F8;
    border: 1px solid #BBBCC1;
    border-radius: 3px;
`;
export const Favourite = style.div `
    font-size: 13px;
    display: flex;
    float: right;
    > div {
        margin-right: 10px;
    }
    > img {
        width: 20px;
        height: 19px;
    }
`;

// BookSearch.js
export const SearchBox = style.div `
    width: 350px;
    height: 456px;
    border: 2px solid black;
    border-radius: 4px;
`;
export const BookUl = style.ul `
    overflow: auto;
    width: 100%;
    height: 353px;
    padding: 0;
    margin: 0;
`;
export const BookLine = style.li `
    width: 100%;
    height: 43px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    font-size: 10px;
    > div:first-child {
        box-sizing: border-box;
        width: 38.5%;
        padding-left: 20px;
    }
    > div:nth-child(2) {
        width: 23%;
    }
    > div:nth-child(3) {
        width: 20.5%;
    }
    > div:last-child {
        box-sizing: border-box;
        width: 18%;
        padding-left: 10px;
    }
`;
export const SearchBook = style.div `
    width: 100%;
    height: 54px;
    border-bottom: 1px solid black;
`;
export const SearchInput = style.input `
    box-sizing: border-box;
    width: 330px;
    height: 30px;
    border: 1px solid black;
    border-radius: 4px;
    margin: 12px 0 0 10px;
    padding-left: 10px;
    &::placeholder {
        color: black;
        font-size: 12px;
    }
`;
export const SearchTitle = style.div `
    width: 100%;
    height: 37px;
    background-color: #F6F7F8;
    display: flex;
    align-items: center;
    font-size: 10px;
    border-bottom: 1px solid black;
    > div:first-child {
        box-sizing: border-box;
        width: 38.5%;
        padding-left: 20px;
    }
    > div:nth-child(2) {
        width: 23%;
    }
    > div:nth-child(3) {
        width: 20.5%;
    }
    > div:last-child {
        width: 18%;
    }
`;