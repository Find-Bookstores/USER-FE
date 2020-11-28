import React from 'react';
import * as S from './style';
import { Link } from '../../assets';

const UploadBook = () => {
    return (
        <S.Size>
            <S.Title>
                <S.Book>책 등록</S.Book>
                <S.UnderLine />
            </S.Title>
            <S.Input>
                <S.Form placeholder='등록하실 책의 이름을 입력해주세요' />
                <S.Form placeholder='등록하실 책의 저자를 입력해주세요' />
                <S.Form placeholder='등록하실 책의 출판사를 입력해주세요' />
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
            <S.Upload>책 등록</S.Upload>
        </S.Size>
    )
}

export default UploadBook;