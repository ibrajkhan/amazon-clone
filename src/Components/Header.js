import React from 'react'
import '../Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <img 
                alt="Amazon_Logo"
                className='header_logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"   
            />
            <div className="header__search">
                <input 
                    className="header__searchIN
                    put" type="text" 
                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__options">
                    <span 
                    className="header__LineOn
                    ">Hello Guest</span>
                    <span 
                    className="header__LineTw
                    ">Sign In</span>
                </div>
                <div className="header__options">
                    <span 
                    className="header__LineOn
                    ">Returns</span>
                    <span 
                    className="header__LineTw
                    ">& Orders</span>
                </div>
                <div className="header__options">
                    <span 
                    className="header__LineOn
                    ">Yours</span>
                    <span 
                    className="header__LineTw
                    ">Prime</span>
                </div>
               
            </div>
            
        </div>
    )
}

export default Header

