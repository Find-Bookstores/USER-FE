import React from 'react';
import * as S from './style';

const StoreUserSignUp = () => {
    return (
        <S.ASUsize>
            <S.USUtitle>회원가입</S.USUtitle>
            <S.Line />
            <div>
                <S.Form placeholder='서점 이름을 입력해주세요'/>
                <S.Form placeholder='서점 주소를 입력해주세요'/>
                <div>
                    <S.Form placeholder='아이디를 입력해주세요'/>
                    <S.Test>중복검사</S.Test>
                </div>
                <S.Form placeholder='비밀번호를 입력해주세요 (대소문자, 특수문자 필수)'/>
                <S.Form placeholder='비밀번호를 한 번 더 입력해주세요'/>
                <S.SignUp>회 원 가 입</S.SignUp>
            </div>
        </S.ASUsize>
    )
}

export default StoreUserSignUp;