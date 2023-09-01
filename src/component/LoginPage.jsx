import {useState} from 'react';

const LoginPage = () => {
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');

    const handleLoginIdChange = (event) => {
        setLoginId(event.target.value);
    };

    const handleLoginPwChange = (event) => {
        setLoginPw(event.target.value);
    };

    return (
        <div className="login-wrapper">
            <h2>Login</h2>
            <form method="post" action="서버의url" id="login-form">
                <input type="text" value={loginId} onChange={handleLoginIdChange} placeholder="Email"/>
                <input type="password" value={loginPw} onChange={handleLoginPwChange} placeholder="Password"/>
                <label htmlFor="remember-check">
                    <input type="checkbox" id="remember-check"/>아이디 저장하기
                </label>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default LoginPage;
