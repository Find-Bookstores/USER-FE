import React from 'react';
import * as S from './style';
import StoreInfo from './StoreInfo';
import BookSearch from './BookSearch';

const BookStoreInfo = () => {
    return (
        <S.Size>
            <S.Title>
                <S.StoreInfo>서점 정보</S.StoreInfo>
                <S.UnderLine />
            </S.Title>
            <div>
                <StoreInfo />
                <BookSearch />
            </div>
        </S.Size>
    )
}

export default BookStoreInfo;