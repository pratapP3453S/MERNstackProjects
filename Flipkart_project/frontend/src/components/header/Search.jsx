import { Box, InputBase, styled } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions.js';
import { Link } from 'react-router-dom';

const SearchComponent = styled(Box)`
  min-width: 18.5%;
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
  display: flex;
`
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
`
const ListWrapper = styled(List)`
   position: absolute;
   background: #ffffff;
   color: #000;
   margin-top: 36px;
`

export default function Search() {

  const [text, setText] = useState('');
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getProducts());
  }, [dispatch])

  const getText = (text) => {
    setText(text); 
  }

  return (
    <SearchComponent>
        <InputSearchBase
          placeholder='Search for products, brands and more'
          onChange={(e)=> getText(e.target.value)}
          value={text}
        />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        {
          text && 
          <ListWrapper>
             {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={()=> setText('')}
                    style={{textDecoration: 'none', color: 'inherit'}}
                  >
                  {product.title.longTitle}
                  </Link>
                </ListItem>
              ))
             }
          </ListWrapper>
        }
    </SearchComponent>
  )
}
