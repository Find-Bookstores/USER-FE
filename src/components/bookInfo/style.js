import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 1010px;
    height: calc(100vh - 104px);
    min-height: 640px;
    margin: 0 auto;
    padding-top: 3%;
`;

// 책 정보
export const Title = style.div `
    width: 90px;
`;
export const BookInfo = style.div `
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

// 사진과 내용
export const Contents = style.div `
    width: 963px;
    height: 496px;
    display: flex;
    margin-top: 57px;
    margin-left: 99px;
    box-sizing: border-box;
    padding: 40px 56px;
    background-color: #F6F7F8;
    border-radius: 10px;
    > div {
        margin-right: 100px;
    }
`;

// 책 사진
export const Img = style.div `
    width: 318px;
    height: 416px;
    border: 1px solid black;
`;

// 책 정보
export const BookName = style.div `
    font-size: 27px;
    border-bottom: 1px solid black;
    margin-bottom: 52px;
`;
export const BookWriter = style.div `
    font-size: 20px;
    margin-bottom: 20px;
`;
export const Publisher = style(BookWriter) `
    margin: 0;
`;