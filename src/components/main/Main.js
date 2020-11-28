import React from 'react';
import * as S from './style';
import { Img1, Img2, Img3, Img4, Img5 } from '../../assets';

const Main = () => {
    const sliderMove = e => {
        const sliderBox = e.target;
        let moveCount = 1;
        setInterval(() => {
            sliderBox.style.transition = 10 + "ms";
            sliderBox.style.transform = "translateX(-"+(100*(moveCount % 5))+"%)";
            moveCount++;
        }, 5000);
    }
    return (
        <S.Size>
            <S.Title>
                <S.BestSeller>베스트셀러</S.BestSeller>
                <S.UnderLine />
            </S.Title>
            <S.Slider onLoad={sliderMove}>
                <S.Container>
                    <S.SliderBox>
                        <S.SliderItem>
                            <img src={Img1} alt='best-seller' />
                        </S.SliderItem>
                        <S.SliderItem>
                            <img src={Img2} alt='best-seller' />
                        </S.SliderItem>
                        <S.SliderItem>
                            <img src={Img3} alt='best-seller' />
                        </S.SliderItem>
                        <S.SliderItem>
                            <img src={Img4} alt='best-seller' />
                        </S.SliderItem>
                        <S.SliderItem>
                            <img src={Img5} alt='best-seller' />
                        </S.SliderItem>
                    </S.SliderBox>
                </S.Container>
            </S.Slider>
        </S.Size>
    )
}

export default Main;