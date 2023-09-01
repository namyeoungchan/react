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
        <>
            <form method="post" action="" id="login-form">
                <input type="text" value={loginId} onChange={handleLoginIdChange} placeholder="Email"/>
                <input type="password" value={loginPw} onChange={handleLoginPwChange} placeholder="Password"/>
                <label htmlFor="remember-check">
                </label>
                <input type="submit" value="Login"/>
            </form>
        </>
    );
};

export default LoginPage;
