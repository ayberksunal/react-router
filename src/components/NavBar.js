import React from 'react';

const Navbar = () => {
    return(
            <nav className='ui raised very padded segment'>
                <a className='ui teal inverted segment'>WELCOME TO MY REACT ROUTER PROJECT</a>
                <div className='ui right floated header'>
                    <button classname='ui button'>
                        <a href="/home">home</a>
                    </button>
                    <button classname='ui button'>
                        <a href="/about">about</a>
                    </button>
                    <button classname='ui button'>
                        <a href="/contact">contact</a>
                    </button>
                </div>
            </nav>
    )
}

export default Navbar;