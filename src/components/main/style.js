import style from 'styled-components';

export const Size = style.div `
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 104px);
    min-height: 570px;
    padding-top: 7%;
`;

export const Title = style.div `
    width: 127px;
    text-align: center;
    margin-bottom: 22px;
    margin-left: 217px;
`;
export const BestSeller = style.div `
    font-size: 21px;
    font-weight: bold;
`;
export const UnderLine = style.div `
    width: 100%;
    height: 5px;
    background-color: #7B91FF;
    border-radius: 4px;
`;

// 슬라이드 배너
export const Slider = style.div `
    width: 100%;
    height: 379px;
    position: relative;
`;
export const Container = style.div `
    width: 794px;
    height: 379px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
`;
export const SliderBox = style.div `
    width: 500%;
    height: 379px;
`;
export const SliderItem = style.div `
    width: calc(100%/5);
    float: left;
    > img {
        width: 100%;
        height: 100%;
    }
`;