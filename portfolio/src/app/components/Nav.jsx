import React from 'react';
import Link from 'next/link';

const Nav = () => (
    <nav>
        <div>
            <Link href="/">Bella Scholtz Portfolio</Link>
        </div>
        <div className='nav-links'>
            <Link href="/aaboutme">About Me</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </nav>
);

export default Nav;