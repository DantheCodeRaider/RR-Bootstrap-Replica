import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Nav.Link href="https://www.instacart.com/categories/316-food/844-pantry" className="">Pantry</Nav.Link>
        <Nav.Link href="https://www.instacart.com/categories/316-food/1974-seafood" className="">Seafood</Nav.Link>
        <Nav.Link href="https://www.instacart.com/categories/316-food/1300-baked-goods" className="">Baked goods</Nav.Link>
        <Nav.Link href="https://www.instacart.com/categories/316-food/1326-dairy" className="">Dairy</Nav.Link>
        <Nav.Link href="https://www.instacart.com/categories/316-food/317-fresh-produce" className="">Fresh produce</Nav.Link>
        <Nav.Link href="https://www.instacart.com/categories/316-food/1268-deli" className="">Deli</Nav.Link>
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;