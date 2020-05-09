import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor} from './style.js';

const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><Link className="anchor" to="/">Home</Link></ListItem>
                    <ListItem><Anchor to="#">Work</Anchor></ListItem>
                    <ListItem><Anchor to="portfolio">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor to="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor to="#">About</Anchor></ListItem>
                    <ListItem><Link className="anchor" to="/contact">Contact</Link></ListItem>
                </UlList>    
            </div>
        </NavbarSection>
    )
}

export default Navbar;