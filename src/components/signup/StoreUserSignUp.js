import React, { useState } from 'react';
import * as S from './style';
import axios from 'axios';

const StoreUserSignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
    const [storeName, setstorename] = useState('');
    const [address, setAddress] = useState('');
    
    const onJoinBtnClick = e => {
        if(id !== '' && password !== '' && pwConfirm !== '' && storeName !== '' && address !== '') {
            if(password === pwConfirm) {
                axios.post('http://10.156.147.138:8080/storeuser/signup', {id, password, storeName, address})
                .then((res) => {
                    alert('회원가입 성공!');
                })
                .catch((err) => {
                    if(err.status === 409) {
                        alert('아이디가 이미 있습니다!');
                    }
                    else {
                        alert('회원가입 실패...');
                    }
                    console.log(err);
                })
            }
            else alert('비밀번호를 다시 확인하세요');
        }
        else alert('모든 칸을 채워주세요');
    }

    const checkId = e => {
        setId(e.target.value);
    }
    const checkPw = e => {
        setPassword(e.target.value);
    }
    const checkCpw = e => {
        setPwConfirm(e.target.value);
    }
    const checkStoreName = e => {
        setstorename(e.target.value);
    }
    const checkAddress = e => {
        setAddress(e.target.value);
    }

    return (
        <S.ASUsize>
            <S.USUtitle>회원가입</S.USUtitle>
            <S.Line />
            <div>
                <S.Form placeholder='서점 이름을 입력해주세요' onChange={checkStoreName}/>
                <S.Form placeholder='서점 주소를 입력해주세요' onChange={checkAddress}/>
                <div>
                    <S.Form placeholder='아이디를 입력해주세요' onChange={checkId}/>
                </div>
                <S.Form placeholder='비밀번호를 입력해주세요 (대소문자, 특수문자 필수)' type='passWord' onChange={checkPw}/>
                <S.Form placeholder='비밀번호를 한 번 더 입력해주세요' type='passWord' onChange={checkCpw}/>
                <S.SignUp onClick={onJoinBtnClick}>회 원 가 입</S.SignUp>
            </div>
        </S.ASUsize>
    )
}

export default StoreUserSignUp;