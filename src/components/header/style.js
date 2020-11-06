import style from 'styled-components';

export const Size = style.div `
    width: 100%;
    min-width: 1440px;
    height: 52px;
    background-color: #7B91FF;
    display: flex;
    align-items: center;
    & > img:first-child {
        width: 50px;
        margin-left: 180px;
    }
`;
export const List = style.div `
    font-size: 12px;
    margin-right: 120px;
`;
export const Search = style.input `
    width: 302px;
    height: 22px;
    background-color: white;
    border: 1px solid black;
    border-left: none;
    border-right: none;
    border-radius: 1px;
    padding-left: 28px;
    display: flex;
    &::placeholder {
        color: black;
        font-size: 10px;
    }
    & > div:first-child {
        font-size: 10px;
    }
`;
export const Range = style.div `
    width: 56px;
    height: 24px;
    display: flex;
    background-color: white;
    border: 1px solid black;
    border-right: none;
    align-items: center;
    margin-left: 118px;
    & > div:first-child {
        font-size: 10px;
        margin-left: 9px;
    }
    & > div:last-child {
        font-size: 7px;
        margin-left: 10px;
        margin-right: 7px;
    }
`;
export const SearchImg = style.div `
    width: 19px;
    height: 24px;
    background-color: white;
    border: 1px solid black;
    border-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 180px;
    & > img {
        width: 7.5px;
        height: 8px;
    }
`;