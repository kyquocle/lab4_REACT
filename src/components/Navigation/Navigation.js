import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../Navigation/Navigation.css'
import { ThemeContext} from '../Navigation/ThemeContext'

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='navi'>
            <nav  style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href={`/contact`}>Contact</a></li>
                </ul>

                <div style={{ position: 'relative' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </nav>
        </div>
    )

}
