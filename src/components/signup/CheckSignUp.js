import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { BSadmin, BSuser } from '../../assets';

const CheckSignUp = () => {
    return (
        <S.Size>
            <div>
                <S.Title>회원가입</S.Title>
                <S.Line />
            </div>
            <div>
                <Link to='/signup/user'>
                    <S.SignUpBox>
                        <img src={ BSuser } alt='유저 회원가입'/>
                        <S.Name>고객</S.Name>
                    </S.SignUpBox>
                </Link>
                <Link to='/signup/store-user'>
                    <S.SignUpBox>
                        <img src={ BSadmin } alt='관리자 회원가입'/>
                        <S.Name>서점 관계자</S.Name>
                    </S.SignUpBox>
                </Link>
            </div>
        </S.Size>
    )
}

export default CheckSignUp;