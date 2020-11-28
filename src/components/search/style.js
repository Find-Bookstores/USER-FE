import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 960px;
    height: calc(100vh - 104px);
    min-height: 650px;
    margin: 0 auto;
    padding-top: 5%;
`;

export const Title = style.div `
    width: 111px;
    margin-bottom: 60px;
`;
export const SearchResult = style.div `
    font-size: 21px;
    font-weight: bold;
    text-align: center;
`;
export const UnderLine = style.div `
    weigth: 100%;
    height: 5px;
    background-color: #7B91FF;
    border-radius: 4px;
`;

export const ResultUl = style.ul `
    width: 900px;
    height: 450px;
    overflow: auto;
    padding: 0;
    margin-left: 43px;
    > li:not(:last-child) {
        margin-bottom: 10px;
    }
`;
export const ResultLi = style.li `
    box-sizing: border-box;
    padding: 12px 0 0 30px;
    width: 100%;
    height: 45px;
    font-size: 13px;
    color: #575757;
    border: 1px solid black;
`;