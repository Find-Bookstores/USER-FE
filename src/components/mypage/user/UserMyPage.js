import React, { useState } from 'react';
import * as S from './style';
import BookStore from './BookStore';
import axios from 'axios';

const UserMyPage = () => {
    const [data, setData] = useState('');
    const [password, setPassword] = useState('');
    const [CheckPw, setCheckPw] = useState('');
    axios.get('http://10.156.147.138:8888/user/mypage', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then((res) => {
        setData(res);
        console.log('ok');
    })
    .catch((err) => {
        console.log(err);
    })

    const onModifyBtnClick = e => {
        if(password === CheckPw) {
            axios.put('http://10.156.147.138:8888/user/mypage/update', {
                body: {
                    password
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then((res) => {
                alert('비밀번호가 수정되었습니다');
                console.log('ok');
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    const checkPw = e => {
        setPassword(e.target.value);
    }
    const checkCpw = e => {
        setCheckPw(e.target.value);
    }

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
                        <S.InfoInput disabled value={data.name}/>
                    </S.InfoLi>
                    <S.InfoLi>
                        <div>아이디</div>
                        <S.InfoInput disabled value={data.id}/>
                    </S.InfoLi>
                    <S.InfoLi>
                        <div>비밀번호</div>
                        <S.PwInput type='password' onChange={checkPw}/>
                    </S.InfoLi>
                    <S.InfoLi>
                        <div>비밀번호 재확인</div>
                        <S.PwInput type='password' onChange={checkCpw} />
                    </S.InfoLi>
                    <S.ModifyBtn onClick={onModifyBtnClick}>정보수정</S.ModifyBtn>
                </S.InfoUl>
            </S.InfoSize>
            <S.StarSize>
                <S.Star>즐겨찾기 서점</S.Star>
                <S.StarLine />
                <S.Stores>    
                    {data.map(data => {
                        return(
                            <BookStore 
                                storename={data.storename}
                                time={data.time}
                                number={data.number}
                            />
                        )
                    })}
                </S.Stores>
            </S.StarSize>
        </S.Size>
    )
}

export default UserMyPage;