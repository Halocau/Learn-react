import './header.css'
const Header = () => {
    return (
        <div>
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/users">User</a></li>
                <li><a href="/products">Product</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    );
}
export default Header