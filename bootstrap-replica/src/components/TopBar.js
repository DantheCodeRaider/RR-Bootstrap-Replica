import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Burger, Menu } from './components';

function TopBar() {
const [open, setOpen] = useState(false);

return (    
<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <Image src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
        <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        <Nav className="">

        </Nav>
    </Navbar.Collapse>
</Navbar> 
)
}

export default TopBar;

{/* <header>
    <div className="css-2aicfm-SeoHamburgerMenu"><div role="dialog" aria-modal="true" aria-label="Main menu" className="css-1txeit4"><div className="css-l4tmde">
    <button aria-label="Close main menu" data-testid="close-button" className="css-15fokgg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.06 4.94a1.5 1.5 0 010 2.12L14.122 12l4.94 4.94a1.5 1.5 0 01.103 2.007l-.103.114a1.5 1.5 0 01-2.122 0L12 14.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.122L9.878 12l-4.94-4.94a1.5 1.5 0 01-.103-2.007l.103-.114a1.5 1.5 0 012.122 0L12 9.88l4.94-4.94a1.5 1.5 0 012.12 0z"></path></svg></button>
    <Image src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="Instacart logo" className="css-1phlune" />
    <div role="button" tabindex="0" aria-controls="departments" aria-expanded="false" data-testid="nav-section-div" className="css-yniyjc-SeoHamburgerMenu">
    <span>Departments</span><span className="css-zdpt2t">
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" color="brandSecondaryDark">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.879 12l-5.94-5.94a1.5 1.5 0 012.122-2.12l7 7a1.5 1.5 0 010 2.12l-7 7a1.5 1.5 0 01-2.122-2.12L16.88 12z"></path></svg></span></div>
    <div id="departments" className="css-1kg39y1-SeoHamburgerMenu"><a href="https://www.instacart.com/categories/316-food" className="css-ytumd6">
    <div className="css-16lsxe1">Food</div></a>
    <a href="https://www.instacart.com/categories/316-food/844-pantry" className="css-ytumd6"><div className="css-16lsxe1">Pantry</div></a>
    <a href="https://www.instacart.com/categories/316-food/1974-seafood" className="css-ytumd6"><div className="css-16lsxe1">Seafood</div></a>
    <a href="https://www.instacart.com/categories/316-food/1300-baked-goods" className="css-ytumd6"><div className="css-16lsxe1">Baked goods</div></a>
    <a href="https://www.instacart.com/categories/316-food/1326-dairy" className="css-ytumd6"><div className="css-16lsxe1">Dairy</div></a>
    <a href="https://www.instacart.com/categories/316-food/317-fresh-produce" className="css-ytumd6"><div className="css-16lsxe1">Fresh produce</div></a>
    <a href="https://www.instacart.com/categories/316-food/1268-deli" className="css-ytumd6"><div className="css-16lsxe1">Deli</div></a>
    <a href="https://www.instacart.com/categories/316-food/627-frozen-food" className="css-ytumd6"><div className="css-16lsxe1">Frozen food</div></a>
    <a href="https://www.instacart.com/categories/316-food/1807-meat" className="css-ytumd6"><div className="css-16lsxe1">Meat</div></a>
    <a href="https://www.instacart.com/categories/316-food/831-meat-alternatives" className="css-ytumd6"><div className="css-16lsxe1">Meat alternatives</div></a>
    <a href="https://www.instacart.com/categories/243-beverages" className="css-ytumd6"><div className="css-16lsxe1">Beverages</div></a>
    <a href="https://www.instacart.com/categories/2-alcohol" className="css-ytumd6"><div className="css-16lsxe1">Alcohol</div></a>
    <a href="https://www.instacart.com/categories/2-alcohol/91-wine" className="css-ytumd6"><div className="css-16lsxe1">Wine</div></a>
    <a href="https://www.instacart.com/categories/2-alcohol/56-spirits" className="css-ytumd6"><div className="css-16lsxe1">Liquor</div></a>
    <a href="https://www.instacart.com/categories/2-alcohol/3-beer" className="css-ytumd6"><div className="css-16lsxe1">Beer</div></a>
    <a href="https://www.instacart.com/categories/243-beverages/244-coffee" className="css-ytumd6"><div className="css-16lsxe1">Coffee</div></a>
    <a href="https://www.instacart.com/categories/243-beverages/255-juice" className="css-ytumd6"><div className="css-16lsxe1">Juice</div></a>
    <a href="https://www.instacart.com/categories/243-beverages/285-soda" className="css-ytumd6"><div className="css-16lsxe1">Soda</div></a>
    <a href="https://www.instacart.com/categories/243-beverages/293-tea" className="css-ytumd6"><div className="css-16lsxe1">Tea</div></a>
    <a href="https://www.instacart.com/categories/243-beverages/311-water" className="css-ytumd6"><div className="css-16lsxe1">Water</div></a>
    <a href="https://www.instacart.com/shop/organic-food" className="css-ytumd6"><div className="css-16lsxe1">Organic grocery</div></a></div>
    <div role="button" tabindex="0" aria-controls="more-ways-to-shop" aria-expanded="false" data-testid="nav-section-div" className="css-yniyjc-SeoHamburgerMenu"><span>More ways to shop</span>
    <span className="css-zdpt2t"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" color="brandSecondaryDark">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.879 12l-5.94-5.94a1.5 1.5 0 012.122-2.12l7 7a1.5 1.5 0 010 2.12l-7 7a1.5 1.5 0 01-2.122-2.12L16.88 12z"></path></svg></span></div>
    <div id="more-ways-to-shop" className="css-1kg39y1-SeoHamburgerMenu"><a href="https://www.instacart.com/grocery-delivery" className="css-ytumd6"><div className="css-16lsxe1">Shop by location</div></a>
    <a href="https://www.instacart.com/store/hub/deals_tab" className="css-ytumd6"><div className="css-16lsxe1">Shop online deals</div></a>
    <a href="https://www.instacart.com/store/hub/gifts" className="css-ytumd6">
    <div className="css-16lsxe1">Send gifts</div></a><a href="https://www.instacart.com/store/hub/alcohol" className="css-ytumd6">
    <div className="css-16lsxe1">Alcohol</div></a><a href="https://www.instacart.com/store/hub/convenience" className="css-ytumd6">
    <div className="css-16lsxe1">Convenience</div></a><a href="https://www.instacart.com/store/hub/ready_meals" className="css-ytumd6">
    <div className="css-16lsxe1">Ready meals</div></a><a href="https://www.instacart.com/categories/2964-automotive" className="css-ytumd6">
    <div className="css-16lsxe1">Automotive</div></a><a href="https://www.instacart.com/categories/1728-baby" className="css-ytumd6">
    <div className="css-16lsxe1">Baby supplies</div></a><a href="https://www.instacart.com/categories/1484-beauty" className="css-ytumd6">
    <div className="css-16lsxe1">Beauty products</div></a><a href="https://www.instacart.com/categories/2720-apparel" className="css-ytumd6">
    <div className="css-16lsxe1">Clothing and apparel</div></a><a href="https://www.instacart.com/categories/1772-electronics" className="css-ytumd6">
    <div className="css-16lsxe1">Electronics</div></a><a href="https://www.instacart.com/categories/4041-floral" className="css-ytumd6">
    <div className="css-16lsxe1">Flowers</div></a><a href="https://www.instacart.com/categories/2739-furniture" className="css-ytumd6">
    <div className="css-16lsxe1">Furniture</div></a><a href="https://www.instacart.com/categories/1662-health-care" className="css-ytumd6">
    <div className="css-16lsxe1">Health care</div></a><a href="https://www.instacart.com/categories/1779-home-and-garden" className="css-ytumd6">
    <div className="css-16lsxe1">Home and garden</div></a><a href="https://www.instacart.com/categories/1361-household-essentials" className="css-ytumd6">
    <div className="css-16lsxe1">Household essentials</div></a><a href="https://www.instacart.com/categories/1805-ice" className="css-ytumd6">
    <div className="css-16lsxe1">Ice</div></a><a href="https://www.instacart.com/categories/1764-office-supplies" className="css-ytumd6">
    <div className="css-16lsxe1">Office supplies</div></a><a href="https://www.instacart.com/categories/1790-party-and-occasions" className="css-ytumd6">
    <div className="css-16lsxe1">Party supplies</div></a><a href="https://www.instacart.com/categories/1602-personal-care" className="css-ytumd6">
    <div className="css-16lsxe1">Personal care</div></a><a href="https://www.instacart.com/categories/1447-pet-care" className="css-ytumd6">
    <div className="css-16lsxe1">Pet supplies</div></a><a href="https://www.instacart.com/categories/1776-sports-and-outdoors" className="css-ytumd6">
    <div className="css-16lsxe1">Sports and outdoors</div></a></div><div role="button" tabindex="0" aria-controls="help" aria-expanded="false" data-testid="nav-section-div" className="css-yniyjc-SeoHamburgerMenu">
    <span>Help</span><span className="css-zdpt2t"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" color="brandSecondaryDark">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.879 12l-5.94-5.94a1.5 1.5 0 012.122-2.12l7 7a1.5 1.5 0 010 2.12l-7 7a1.5 1.5 0 01-2.122-2.12L16.88 12z"></path></svg></span></div>
    <div id="help" className="css-1kg39y1-SeoHamburgerMenu"><a href="https://www.instacart.com/company/contact-us/" className="css-ytumd6"><div className="css-16lsxe1">Contact</div></a>
    <a href="https://instacart.com/company/newsroom" className="css-ytumd6"><div className="css-16lsxe1">Press</div></a>
    <a href="https://instacart.com/company/blog" className="css-ytumd6"><div className="css-16lsxe1">Blog</div></a>
    <a href="https://www.instacart.com/help" className="css-ytumd6"><div className="css-16lsxe1">Help</div></a>
    <a href="https://instacart.careers" className="css-ytumd6"><div className="css-16lsxe1">Careers</div></a>
    <a href="https://www.instacart.com/privacy" className="css-ytumd6"><div className="css-16lsxe1">Privacy</div></a>
    <a href="https://www.instacart.com/terms" className="css-ytumd6"><div className="css-16lsxe1">Terms</div></a>
    <a href="https://www.instacart.com/instacart-plus" className="css-ytumd6"><div className="css-16lsxe1">Instacart+</div></a>
    <a href="https://ads.instacart.com" className="css-ytumd6"><div className="css-16lsxe1">Advertise on Instacart</div></a>
    <a href="https://www.instacart.com/company/contact-us/" className="css-ytumd6"><div className="css-16lsxe1">Partner program</div></a>
    <a href="https://www.instacart.com/gift-cards" className="css-ytumd6"><div className="css-16lsxe1">Gift cards</div></a>
    <a href="https://shoppers.instacart.com/" className="css-ytumd6"><div className="css-16lsxe1">Shoppers</div></a>
    <a href="https://shoppers.instacart.com/instacart-jobs" className="css-ytumd6"><div className="css-16lsxe1">Shopper locations</div></a>
    <a href="https://www.instacart.com/promos-and-coupons" className="css-ytumd6"><div className="css-16lsxe1">Promos &amp; Coupons</div></a>
    </div></div><div role="button" tabindex="0" className="css-py6a48"></div></div></div>
    <div className="css-0"><nav className="css-1j4jsi3"><button data-testid="menu-button" aria-label="Open main menu" className="css-lq1nu5">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8 17.5c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6z"></path></svg></button>
    <div className="css-hpnlv5"><div aria-label="Open main menu" role="button" tabindex="0" data-testid="hamburger-button" className="css-gfpa35"><svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8 17.5c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6z"></path></svg></div>
    <div className="css-1gjaef-Header"><a href="/"><Image src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="Instacart home" className="css-bu6y0e"/></a></div></div>
    <div className="css-1xhj18k"><button className="css-s55bq"><span className="css-utfnc">Log in</span></button><button className="css-10jak9c"><span className="css-utfnc">Sign up</span></button></div></nav></div></header> */}