import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const LogIn = () => {
    return (
        <S.Size>
            <S.Title>
                <S.LogIn>로그인</S.LogIn>
                <S.UnderLine />
            </S.Title>
            <S.Inputs>
                <S.Input placeholder='아이디를 입력해주세요'/>
                <S.Input placeholder='비밀번호를 입력해주세요'/>
                <S.LogInBtn>로그인</S.LogInBtn>
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