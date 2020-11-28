import React, { useState } from 'react';
import * as S from './style';
import { BookImg } from '../../../assets';

const BookInvenLine = ({name, writer, company}) => {
    const [isCheck, setIsCheck] = useState(false);

    const onCheckBtnClick = e => {
        setIsCheck(!isCheck);
    }

    return (
        <S.InvenLi>
            <div>
                <img src={BookImg} alt='사진'/>
            </div>
            <div>{name}</div>
            <div>{writer}</div>
            <div>{company}</div>
            <div>
                <S.CheckBtn onClick={onCheckBtnClick} color={isCheck}/>
            </div>
        </S.InvenLi>
    )
}

export default BookInvenLine;