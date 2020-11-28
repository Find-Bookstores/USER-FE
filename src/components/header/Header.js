import React, { useState } from 'react';
import * as S from './style';
import { Logo, Search } from '../../assets';
import { Link } from 'react-router-dom';

const Header = () => {
    const [searchType, setSearchType] = useState('전체');
    const [isTypeClick, setIsTypeClick] = useState(false);

    const onTypeClick = e => {
        const clickedType = e.target.dataset.type;
        if(clickedType === 'all') {
            setSearchType('전체');
        }
        else if(clickedType === 'book') {
            setSearchType('책');
        }
        else {
            setSearchType('서점');
        }
    }

    const onTypeBtnClick = e => {
        setIsTypeClick(!isTypeClick);
    }

    return (
        <S.Size>
            <div>
                <Link to='/'>
                    <img src={ Logo } alt="탐책"/>
                </Link>
                <S.Range onClick={onTypeBtnClick}>
                    <S.More boolean={isTypeClick}>▼</S.More>
                    <div>{ searchType }</div>
                </S.Range>
                <S.Search placeholder="검색어를 입력해주세요" />
                <S.SearchImg>
                    <img src={ Search } alt="검색" />
                </S.SearchImg>
                <S.List>
                    <Link to='/upload/book'>책 등록</Link>
                </S.List>
                <S.List>
                    <Link to='/mypage/user'>마이페이지</Link>
                </S.List>
                <S.List>
                    <Link to='/login'>로그인</Link>
                </S.List>
            </div>
            <S.TypeUl boolean={isTypeClick}>
                    <S.TypeLi data-type='all' onClick={onTypeClick}>전체</S.TypeLi>
                    <S.TypeLi data-type='book' onClick={onTypeClick}>책</S.TypeLi>
                    <S.TypeLi data-type='bookStore' onClick={onTypeClick}>서점</S.TypeLi>
            </S.TypeUl>
        </S.Size>
    )
}

export default Header;