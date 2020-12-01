import React, { useState } from 'react';
import * as S from './style';
import axios from 'axios';

const StoreUserInfo = () => {
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');

    const onModifyBtnClick = e => {
        if(password === pwConfirm) {
            axios.put('ttp://10.156.147.138:8080/user/mypage/update', {password})
            .then((res) => {
                console.log('ok');
            })
            .catch((err) => {
                if(err.status === 400) alert('비밀번호 변경을 실패했습니다.');
                console.log(err);
            })
        }
        else alert('비밀번호를 다시 한번 확인해 주세요');
    }

    const checkPw = e => {
        setPassword(e.target.value);
    }
    const checkCpw = e => {
        setPwConfirm(e.target.value);
    }

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
                    <S.ModifyInput type='password' onChange={checkPw}/>
                </S.InfoLi>
                <S.InfoLi>
                    <div>비밀번호 재확인</div>
                    <S.ModifyInput type='password' onChange={checkCpw}/>
                </S.InfoLi>
                <S.InfoLi>
                    <div>전화번호</div>
                    <S.ModifyInput type='password' />
                </S.InfoLi>
                <S.InfoLi>
                    <div>서점 주소</div>
                    <S.InfoInput disabled value='address'/>
                </S.InfoLi>
                <S.InfoLi>
                    <div>영업시간</div>
                    <S.ModifyInput />
                </S.InfoLi>
                <S.ModifyBtn onClick={onModifyBtnClick}>정보수정</S.ModifyBtn>
            </S.InfoUl>
        </S.InfoSize>
    )
}

export default StoreUserInfo;