import { useLocation } from 'react-router-dom';

export default function NavJSX() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <div className="flex oxfordGradient gap-11 py-5 px-4">
                <div className="flex-1">
                    <a>Matthew's Portfolio</a>
                </div>
                <div className={currentPage === '/' ? 'nav-used' : 'nav-link'}>
                    <a href="/">About</a>
                </div>
                <div className={currentPage === '/Projects' ? 'nav-used' : 'nav-link'}>
                    <a href="/Projects">Projects</a>
                </div>
                <div className={currentPage === '/Contacts' ? 'nav-used' : 'nav-link'}>
                    <a href="/Contacts">Contacts</a>
                </div>
            </div>
        </>
    );
}

