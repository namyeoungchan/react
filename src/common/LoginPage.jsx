import {useState} from 'react';

const LoginPage = () => {
    const [loginId, setLoginId] = useState('')
    const [loginPw, setLoginPw] = useState('')
    const HandleLoginId = (loginid) => {
        setLoginId(loginid)
        console.log(loginid)
    }
    const HandleLoginPw = (loginpw) => {
        setLoginPw(loginpw)
        console.log(loginpw)
    }


    return (
        <div className="login-wrapper">
            <h2>Login</h2>
            <form method="post" action="서버의url" id="login-form">
                <input type="text" name={loginId} onChange={HandleLoginId(loginId)} placeholder="Email"/>
                <input type="password" name={loginPw} onChange={HandleLoginPw(loginPw)} placeholder="Password"/>
                <label htmlFor="remember-check">
                    <input type="checkbox" id="remember-check"/>아이디 저장하기
                </label>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default LoginPage;
