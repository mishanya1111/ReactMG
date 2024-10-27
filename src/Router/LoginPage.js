import { useNavigate } from 'react-router-dom';
function LoginPage() {
    let navigate = useNavigate();
    function redirectToCards() {
        return navigate('/cards');
    }
    return (
        <div id="main-holder">
            <h2>Login</h2>
            <form onSubmit={redirectToCards} id="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
