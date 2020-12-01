import React, { useState } from 'react';
import * as S from './style';
import axios from 'axios';

const UserSignUp = () => {
    const [id, setId] = useState('');
    const [password, setPw] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');
    const [name, setName] = useState('');

    const onJoinBtnClick = e => {
        if(id !== '' && password !== '' && pwConfirm !== '' && name !== '') {
            if(password === pwConfirm) {
                axios.post('http://10.156.147.138:8080/user/signup', {id, password, name})
                .then((res) => {
                    alert('회원가입 성공!');
                })
                .catch((err) => {
                    if(err.response.status === 409) {
                        alert('아이디가 이미 있습니다! 다른 아이디로 바꿔주세요')
                    }
                    else {
                        alert('회원가입 실패...');
                    }
                    console.log(err);
                })
            }
            else {
                alert('비밀번호를 다시 확인하세요');
            }
        }
        else {
            alert('모든 칸을 채워주세요');
        }
    }

    const checkId = e => {
        setId(e.target.value);
    }
    const checkPw = e => {
        setPw(e.target.value);
    }
    const checkCpw = e => {
        setPwConfirm(e.target.value);
    }
    const checkName = e => {
        setName(e.target.value);
    }

    return (
        <S.USUsize>
            <S.USUtitle>회원가입</S.USUtitle>
            <S.Line />
            <div>
                <S.Form placeholder='닉네임을 입력해주세요' onChange={checkName}/>
                <div>
                    <S.Form placeholder='아이디를 입력해주세요' onChange={checkId}/>
                </div>
                <S.Form placeholder='비밀번호를 입력해주세요 (대소문자, 특수문자 필수)' type='passWord' onChange={checkPw}/>
                <S.Form placeholder='비밀번호를 한 번 더 입력해주세요' type='passWord' onChange={checkCpw}/>
                <S.SignUp onClick={onJoinBtnClick}>회 원 가 입</S.SignUp>
            </div>
        </S.USUsize>
    )
}

export default UserSignUp;