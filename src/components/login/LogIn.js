import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const LogIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onLoginBtnClick = () => {
        axios.post('http://10.156.147.138:8888/login', {
            id,
            password
        })
        .then((res) => {
            const accessToken = res.data.accessToken;
            localStorage.setItem('token', accessToken);
            console.log('success');
        })
        .catch((err) => {
            if(err.status === 404) {
                alert('존재하지 않는 아이디입니다');
            }
            else alert('아이디와 비밀번호를 확인해주세요');
        })
    }

    const checkId = e => {
        setId(e.target.value);
    }
    const checkPw = e => {
        setPassword(e.target.value)
    }

    return (
        <S.Size>
            <S.Title>
                <S.LogIn>로그인</S.LogIn>
                <S.UnderLine />
            </S.Title>
            <S.Inputs>
                <S.Input placeholder='아이디를 입력해주세요' onChange={checkId}/>
                <S.Input placeholder='비밀번호를 입력해주세요' onChange={checkPw}/>
                <S.LogInBtn onClick={onLoginBtnClick}>로그인</S.LogInBtn>
                <div>
                    <S.NoAccount>
                        <Link to='/signup'>
                            아직 회원이 아니라면
                        </Link>
                    </S.NoAccount>
                </div>
            </S.Inputs>
        </S.Size>
    )
}

export default LogIn;