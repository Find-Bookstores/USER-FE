import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CheckSignUp,
         UserSignUp,
         LogIn,
         StoreUserSignUp,
         UploadBook,
         UserMyPage,
         BookInfo,
         StoreUserMyPage,
         Main,
         Search,
         BookStoreInfo } from './index.js';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const UserRouter = () => {
    return (
        <>
            <Header />
            <Switch>
                {/* 메인 */}
                <Route exact path='/' component={ Main } />
                {/* 로그인 */}
                <Route exact path='/login' component={ LogIn } />
                {/* 회원가입 */}
                <Route exact path='/signup' component={ CheckSignUp } />
                <Route exact path='/signup/user' component={ UserSignUp } />
                <Route exact path='/signup/store-user' component={ StoreUserSignUp } />
                {/* 마이페이지 */}
                <Route exact path='/mypage/user' component={ UserMyPage } />
                <Route exact path='/mypage/store-user' component={ StoreUserMyPage } />
                {/* 책 등록 */}
                <Route exact path='/upload/book' component={ UploadBook } />
                {/* 정보 */}
                <Route exact path='/info/book' component={ BookInfo } />
                <Route exact path='/info/book-store' component={ BookStoreInfo } />
                {/* 검색 */}
                <Route exact path='/search-result' component={ Search } />
            </Switch>
            <Footer />
        </>
    )
}

export default UserRouter;