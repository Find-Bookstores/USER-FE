import React from 'react';
import * as S from './style';

const BookStore = ({storename, time, number}) => {
    return (
        <S.BookStoreBox>
            <div>{storename}</div>
            <div>영업시간: {time}</div>
            <div>전화번호: {number}</div>
        </S.BookStoreBox>
    )
};

export default BookStore;