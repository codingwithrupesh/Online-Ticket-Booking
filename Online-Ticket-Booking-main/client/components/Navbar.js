import Link from 'next/link';

export default function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Logged out successfully');
    };

    return (
        <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
            <Link href="/signup" style={{ marginRight: '15px', color: '#fff', textDecoration: 'none' }}>
                Signup
            </Link>
            <Link href="/login" style={{ marginRight: '15px', color: '#fff', textDecoration: 'none' }}>
                Login
            </Link>
            <Link href="/reserve" style={{ marginRight: '15px', color: '#fff', textDecoration: 'none' }}>
                Reserve Seats
            </Link>
            <button onClick={handleLogout} style={{ background: 'red', color: '#fff', border: 'none', padding: '5px 10px' }}>
                Logout
            </button>
        </nav>
    );
}
