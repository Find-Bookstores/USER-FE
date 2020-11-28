import React from 'react';
import * as S from './style';

const BookSearch = () => {
    return (
        <S.SearchBox>
            <S.SearchBook>
                <S.SearchInput placeholder='서점에서 찾으실 책을 입력해주세요' />
            </S.SearchBook>
            <S.SearchTitle>
                <div>책이름</div>
                <div>작가</div>
                <div>출판사</div>
                <div>재고여부</div>
            </S.SearchTitle>
            <S.BookUl>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
                <S.BookLine>
                    <div>보노보노 더 무비</div>
                    <div>작가는몰라</div>
                    <div>출판사도몰라</div>
                    <div>있음</div>
                </S.BookLine>
            </S.BookUl>
        </S.SearchBox>
    )
}

export default BookSearch;