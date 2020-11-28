import React, { useState } from 'react';
import * as S from './style';
import StoreUserInfo from './StoreUserInfo';
import BookInventory from './BookInventory';

const StoreUserMyPage = () => {
    const [isInfoBtnCLick, setIsInfoBtnClick] = useState(false);
    const [isInventoryBtnClick, setIsInventoryBtnClick] = useState(true);

    // 회원 정보 버튼 눌렀을 때
    const onInfoBtnClick = () => {
        setIsInfoBtnClick(true);
        setIsInventoryBtnClick(false);
    }
    // 재고 관리 눌렀을 때
    const onInventoryBtnClick = () => {
        setIsInfoBtnClick(false);
        setIsInventoryBtnClick(true);
    }

    return (
        <S.Size>
            <S.Title>
                <S.MyPage>마이페이지</S.MyPage>
                <S.UnderLine />
            </S.Title>
            <div>
                <S.Category>
                    <S.CategoryBtn onClick={onInfoBtnClick} color={isInfoBtnCLick}>
                        회원정보
                        <div>〉</div>
                    </S.CategoryBtn>
                    <S.CategoryBtn onClick={onInventoryBtnClick} color={isInventoryBtnClick}>
                        재고 관리
                        <div>〉</div>
                    </S.CategoryBtn>
                </S.Category>
                {isInfoBtnCLick &&
                    <StoreUserInfo />
                }
                {isInventoryBtnClick &&
                    <BookInventory />
                }
            </div>
        </S.Size>
    )
}

export default StoreUserMyPage;