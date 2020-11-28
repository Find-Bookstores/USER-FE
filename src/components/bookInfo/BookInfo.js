import React from 'react';
import * as S from './style';

const BookInfo = () => {
    return (
        <S.Size>
            <S.Title>
                <S.BookInfo>책 정보</S.BookInfo>
                <S.UnderLine />
            </S.Title>
            <S.Contents>
                <S.Img>
                    <img src='' alt='책 이미지'/>
                </S.Img>
                <div>
                    <S.BookName>책 제목</S.BookName>
                    <S.BookWriter>지은이: 이름</S.BookWriter>
                    <S.Publisher>출판사: 출판사</S.Publisher>
                </div>
            </S.Contents>
        </S.Size>
    )
}

export default BookInfo;