import React, { useState } from 'react';
import * as S from './style';
import { Link } from '../../assets';
import axios from 'axios';

const UploadBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [image, setImage] = useState('');

    const onUploadBtnClick = e => {
        if(name !== '' && author !== '' && publisher !== '' && image !== '') {
            axios.post('http://10.156.147.138:8888/book/inputbook', {
                Param: {
                    name,
                    author,
                    publisher,
                    image
                },
                header: {
                    token: localStorage.getItem('token')
                }
            })
        }
        else {
            alert('모든 칸을 채워주세요');
        }
    }

    const checkName = e => {
        setName(e.target.value);
    }
    const checkAuthor = e => {
        setAuthor(e.target.value);
    }
    const checkPublisher = e => {
        setPublisher(e.target.value);
    }

    return (
        <S.Size>
            <S.Title>
                <S.Book>책 등록</S.Book>
                <S.UnderLine />
            </S.Title>
            <S.Input>
                <S.Form placeholder='등록하실 책의 이름을 입력해주세요' onChange={checkName}/>
                <S.Form placeholder='등록하실 책의 저자를 입력해주세요' onChange={checkAuthor} />
                <S.Form placeholder='등록하실 책의 출판사를 입력해주세요' onChange={checkPublisher} />
                <S.Img>
                    <div>
                        <S.ImgFlie>등록하실 책의 사진 파일을 첨부해주세요</S.ImgFlie>
                        <S.AddFlie>
                            <img src={ Link } alt='링크'/>
                            파일 첨부
                        </S.AddFlie>
                    </div>
                </S.Img>
            </S.Input>
            <S.Upload onClick={onUploadBtnClick}>책 등록</S.Upload>
        </S.Size>
    )
}

export default UploadBook;