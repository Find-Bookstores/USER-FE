import React from 'react';
import * as S from './style';

const StoreUserInfo = () => {
    return (
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
                    <S.ModifyInput type='password' />
                </S.InfoLi>
                <S.InfoLi>
                    <div>비밀번호 재확인</div>
                    <S.ModifyInput type='password' />
                </S.InfoLi>
                <S.InfoLi>
                    <div>서점 주소</div>
                    <S.ModifyInput />
                </S.InfoLi>
                <S.InfoLi>
                    <div>영업시간</div>
                    <S.ModifyInput />
                </S.InfoLi>
                <S.ModifyBtn>정보수정</S.ModifyBtn>
            </S.InfoUl>
        </S.InfoSize>
    )
}

export default StoreUserInfo;