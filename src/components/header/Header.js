import React from 'react';
import * as S from './style';
import { Logo, Search } from '../../assets';

const Header = () => {
    return (
        <S.Size>
            <img src={ Logo } alt="탐책"/>
            <S.Range>
                <div>▼</div>
                <div>전체</div>
            </S.Range>
            <S.Search placeholder="검색어를 입력해주세요" />
            <S.SearchImg>
                <img src={ Search } alt="검색" />
            </S.SearchImg>
            <S.List>책 등록</S.List>
            <S.List>마이페이지</S.List>
            <S.List>로그인</S.List>
        </S.Size>
    )
}

export default Header;