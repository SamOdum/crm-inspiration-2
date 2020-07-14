import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

import Container from './Container';
import DimensionContext from '../contexts/DimensionContext';
// import logo from '../assets/logo/front_logo.png';
import logo from '../assets/logo/logo-1.jpg';

const HeaderMiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  color: #333e48;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  vertical-align: middle;
  margin-top: 30px;
  text-align: left;
  display: inline-block;
  margin-bottom: 30px;
  flex: 0 0 25%;
`;

const TopSearch = styled.div`
  color: #333e48;
  display: ${(props) => (props.dimensions < 820 ? 'none' : 'inline-block')};
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-top: 13px;
  flex: 1 1 50%;
`;

const Search = styled.div`
  padding-top: 13px;
`;

const SearchForm = styled.div`
  display: inline;
`;

const SearchInputGroup = styled.div`
  position: relative;
  border-collapse: separate;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  background: #fff;
`;

const SearchInputHidden = styled.input`
  border-collapse: separate;
  height: 40px;
  display: inline-block;
  width: 90%;
  border: none;
  background: #fff;
  border-left: 1px solid #eaeaea;
  box-shadow: none;
`;

const SearchInputNameFilter = styled.input`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-collapse: separate;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  position: relative;
  z-index: 2;
  float: left;
  margin-bottom: 0;
  border-radius: 0;
  height: 40px;
  /* display: inline-block; */
  width: 90%;
  border: none;
  background: #fff;
  border-left: 1px solid #eaeaea;
  box-shadow: none;
`;

const SearchSubmitButton = styled.button`
  border-collapse: separate;
  font: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  line-height: 28px;
  padding: 6px 20px 6px 18px;
  float: right;
  /* display: inline-block; */
  background: #fafafa;
  border: none;
  color: #333e48;
  border-left: 1px #eaeaea solid;
`;

const TopCart = styled.div`
  position: relative;
  min-height: 1px;
  /* padding-right: 15px; */
  width: 25%;
  padding-left: 0px;
  /* float: right; */
  flex: 0 0 25%;
`;

const TopCartContainer = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #fff;
  margin-top: 21px;
  /* float: right; */
`;

const MiniCart = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  /* text-align: center; */
  cursor: pointer;
`;

const BasketDropDown = styled.div`
  font-weight: 400;
  line-height: 20px;
  color: #fff;
  /* text-align: center; */
  cursor: pointer;
  font-size: 12px;
  text-transform: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CartIcon = styled.div`
  text-transform: none;
  color: #fff;
  /* line-height: 55px; */
  font-weight: bold;
  /* float: left; */
  /* text-align: left; */

  height: 46px;
  width: 46px;

  font-size: 16px;
  margin-right: ${(props) => (props.dimensions < 576 ? '0' : '12px')};
  background: ${(props) => props.theme.colours.black2};
  padding: 15px 16px;
  color: #fff;
  border-radius: 100px;
`;

const CartInner = styled.div`
  color: #000;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: column;
  display: ${(props) => (props.dimensions < 576 ? 'none' : 'flex')};
`;

const CartTitle = styled.span`
  text-transform: uppercase;
`;

const CartTotal = styled.span`
  color: black;
`;

const HeaderMiddle = () => {
  const [dimensions] = useContext(DimensionContext);

  return (
    <Container>
      <HeaderMiddleWrapper>
        <LogoContainer>
          <a title="Afia.com" href="home.html">
            <img
              alt="responsive theme logo"
              src={logo}
              classNameName="img-logo"
            />
          </a>
        </LogoContainer>
        <TopSearch dimensions={dimensions.width}>
          <Search>
            <SearchForm
              method="post"
              action="/multecartultimate/multefront/web/product/default/search"
              _lpchecked="1"
            >
              <SearchInputGroup>
                <SearchInputHidden
                  type="hidden"
                  name="_csrf"
                  value="Zk4rn_Uh1yKATpFiIFLDs7VRkXH6S1QqAlrCJ_Nuqp0iL0frw1icT7B4xCl4JZHHg2bzAbMOZUlXbZFJlB3o2g=="
                />
                <SearchInputNameFilter
                  id="filter_name"
                  type="text"
                  name="searchbox"
                  placeholder="Search"
                  className="form-control"
                />
                <SearchSubmitButton type="submit" className="btn-search">
                  <FaSearch />
                </SearchSubmitButton>
              </SearchInputGroup>
            </SearchForm>
          </Search>
        </TopSearch>
        <TopCart>
          <TopCartContainer>
            <MiniCart>
              <BasketDropDown data-toggle="dropdown" data-hover="dropdown">
                <CartIcon dimensions={dimensions.width}>
                  <FaShoppingCart />
                </CartIcon>
                <CartInner dimensions={dimensions.width}>
                  <CartTitle>Shopping Cart</CartTitle>
{' '}
                  <CartTotal>4 Item(s): $520.00</CartTotal>
                </CartInner>
              </BasketDropDown>
              {/* <div>
              <div className="top-cart-content">
                <div className="block-subtitle hidden-xs">
                  Recently added item(s)
                </div>
                <ul id="cart-sidebar" className="mini-products-list">
                  <li className="item odd">
                    {' '}
                    <a
                      href="shopping_cart.html"
                      title="Ipsums Dolors Untra"
                      className="product-image"
                    >
                      <img
                        src="images/products/img07.jpg"
                        alt="Lorem ipsum dolor"
                        width="65"
                      />
                    </a>
                    <div className="product-details">
                      {' '}
                      <a
                        href="#"
                        title="Remove This Item"
                        className="remove-cart"
                      >
                        <i className="icon-close" />
                      </a>
                      <p className="product-name">
                        <a href="shopping_cart.html">
                          Lorem ipsum dolor sit amet Consectetur
                        </a>
{' '}
                      </p>
                      <strong>1</strong>
{' '}
x<span className="price">$20.00</span>
{' '}
                    </div>
                  </li>
                  <li className="item even">
                    {' '}
                    <a
                      href="shopping_cart.html"
                      title="Ipsums Dolors Untra"
                      className="product-image"
                    >
                      <img
                        src="images/products/img11.jpg"
                        alt="Lorem ipsum dolor"
                        width="65"
                      />
                    </a>
                    <div className="product-details">
                      {' '}
                      <a
                        href="#"
                        title="Remove This Item"
                        className="remove-cart"
                      >
                        <i className="icon-close" />
                      </a>
                      <p className="product-name">
                        <a href="shopping_cart.html">
                          Consectetur utes anet adipisicing elit
                        </a>
{' '}
                      </p>
                      <strong>1</strong>
{' '}
x<span className="price">$230.00</span>
{' '}
                    </div>
                  </li>
                  <li className="item last odd">
                    {' '}
                    <a
                      href="shopping_cart.html"
                      title="Ipsums Dolors Untra"
                      className="product-image"
                    >
                      <img
                        src="images/products/img10.jpg"
                        alt="Lorem ipsum dolor"
                        width="65"
                      />
                    </a>
                    <div className="product-details">
                      {' '}
                      <a
                        href="#"
                        title="Remove This Item"
                        className="remove-cart"
                      >
                        <i className="icon-close" />
                      </a>
                      <p className="product-name">
                        <a href="shopping_cart.html">
                          Sed do eiusmod tempor incidist
                        </a>
{' '}
                      </p>
                      <strong>2</strong>
{' '}
x<span className="price">$420.00</span>
{' '}
                    </div>
                  </li>
                </ul>
                <div className="top-subtotal">
                  Subtotal: <span className="price">$520.00</span>
                </div>
                <div className="actions">
                  <button className="btn-checkout" type="button">
                    <span>Checkout</span>
                  </button>
                  <button className="view-cart" type="button">
                    <span>View Cart</span>
                  </button>
                </div>
              </div>
            </div> */}
            </MiniCart>
          </TopCartContainer>
        </TopCart>
      </HeaderMiddleWrapper>
    </Container>
  );
};

export default HeaderMiddle;
