import React from 'react';
import * as S from './style';
import BookInvenLine from './BookInvenLine';

const BookInventory = () => {
    return (
        <S.InvenSize>
            <S.Inven>책 목록</S.Inven>
            <S.InvenLine />
            <S.InvenUl>
                <S.InvenTitleLi>
                    <div>사진</div>
                    <div>책 이름</div>
                    <div>저자</div>
                    <div>출판사</div>
                    <div>재고여부</div>
                </S.InvenTitleLi>
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
                <BookInvenLine 
                    name='보노보노보노보노'
                    writer='저자저자저자'
                    company='출판사출판사'
                />
            </S.InvenUl>
        </S.InvenSize>
    )
}

export default BookInventory;