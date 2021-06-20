import { Link } from 'react-router-dom';
import '../styles/Layout.css';
import SearchBar from './SearchBar';

const Layout = ({children, searchBarOn = true}) => {
    return (
        <div className = 'layout'>
            <header className = 'layoutHeader'>
                <Link to = '/' className = 'headerTitle'>The Cat Wiki</Link>
                {searchBarOn && <SearchBar/>}
            </header>
            <main className = 'layoutMain'>
                {children}
            </main>
            <footer className = 'layoutFooter'>
                Created by Swaraj9
            </footer>
        </div>
    )
}

export default Layout
