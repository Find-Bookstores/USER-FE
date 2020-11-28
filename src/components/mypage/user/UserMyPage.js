import React from 'react';
import * as S from './style';
import BookStore from './BookStore';

const UserMyPage = () => {
    return (
        <S.Size>
            <S.Title>
                <S.MyPage>마이페이지</S.MyPage>
                <S.UnderLine />
            </S.Title>
            <S.InfoSize>
                <S.Info>회원정보</S.Info>
                <S.InfoLine />
                <S.InfoUl>
                    <S.InfoLi>
                        <div>닉네임</div>
                        <S.InfoInput disabled value='name'/>
                    </S.InfoLi>
                    <S.InfoLi>
                        <div>아이디</div>
                        <S.InfoInput disabled value='id'/>
                    </S.InfoLi>
                    <S.InfoLi>
                        <div>비밀번호</div>
                        <S.PwInput type='password' />
                    </S.InfoLi>
                    <S.InfoLi>
                        <div>비밀번호 재확인</div>
                        <S.PwInput type='password' />
                    </S.InfoLi>
                    <S.ModifyBtn>정보수정</S.ModifyBtn>
                </S.InfoUl>
            </S.InfoSize>
            <S.StarSize>
                <S.Star>즐겨찾기 서점</S.Star>
                <S.StarLine />
                <S.Stores>    
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                    <BookStore 
                        storename='탐책 서점'
                        time='11:00 ~ 9:00'
                        number='042-000-0000'
                    />
                </S.Stores>
            </S.StarSize>
        </S.Size>
    )
}

export default UserMyPage;