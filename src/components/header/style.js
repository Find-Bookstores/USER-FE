import style from 'styled-components';

export const Size = style.div `
    width: 100%;
    min-width: 1440px;
    height: 52px;
    background-color: #7B91FF;
    > div {
        height: 100%;
        display: flex;
        align-items: center;
    }
    > div > a > img:first-child {
        width: 50px;
        margin-left: 180px;
        margin-top: 10px;
    }
`;
export const List = style.div `
    font-size: 12px;
    margin-right: 120px;
    > a {
        color: black;
    }
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
    > div:first-child {
        font-size: 10px;
    }
`;
export const Range = style.div `
    width: 60px;
    height: 24px;
    display: flex;
    background-color: white;
    border: 1px solid black;
    border-right: none;
    align-items: center;
    margin-left: 118px;
    > div:last-child {
        font-size: 7px;
        margin-left: 10px;
        margin-right: 7px;
    }
`;
export const More = style.p `
    font-size: 8px;
    margin-left: 9pt;
    transform: rotate(${({boolean}) => boolean ? 180 : 0}deg);
    transition: 0.5s;
`;
export const TypeUl = style.ul `
    box-sizing: border-box;
    width: 67px;
    height: 60px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
    padding: 5px 0 0 0;
    margin: -15px 0 0 348px;
    display: ${({boolean}) => boolean ? 'block' : 'none'};
`;
export const TypeLi = style.li `
    font-size: 8px;
    text-align: center;
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
    > img {
        width: 7.5px;
        height: 8px;
    }
`;