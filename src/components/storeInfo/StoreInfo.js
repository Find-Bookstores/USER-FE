import React, { useState } from 'react';
import * as S from './style';
import { WhiteStar, YellowStar } from '../../assets';
import axios from 'axios';

const StoreInfo = () => {
    const [isStarClick, setIsStarClick] = useState(false);

    const onStarClick = e => {
        setIsStarClick(true);
        axios.put('http://10.156.147.138:8888/store/favoritestore', {
            body: {
                userId: 'userId',
                storeId: 'storeId'
            },
            headers: {
                token: localStorage.getItem()
            }
        })
        .then((res) => {
            console.log('ok');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <S.Info>
            <S.InfoUl>
                <S.TitleInfoLi>
                    동글말랑이네 북극곰 서점
                </S.TitleInfoLi>
                <S.InfoLi>
                    <div>전화번호</div>
                    <S.InfoBox>010-3020-0055</S.InfoBox>
                </S.InfoLi>
                <S.InfoLi>
                    <div>운영시간</div>
                    <S.InfoBox>11:00 ~ 18:00</S.InfoBox>
                </S.InfoLi>
                <S.InfoLi>
                    <div>매장위치</div>
                    <S.InfoBox>대전광역시 유성구 장동 가정북로 76</S.InfoBox>
                </S.InfoLi>
            </S.InfoUl>
            <S.Favourite>
                <div>즐겨찾기</div>
                {isStarClick ? 
                    <img src={YellowStar} alt='star' onClick={onStarClick} /> :
                    <img src={WhiteStar} alt='star' onClick={onStarClick} color={isStarClick} className='whiteStar'/>
                }
            </S.Favourite>
        </S.Info>
    )
}

export default StoreInfo;