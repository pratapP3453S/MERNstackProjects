import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SearchComponent = styled(Box)`
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
  padding: 5px
`

export default function Search() {
  return (
    <SearchComponent>
        <InputSearchBase
          placeholder='Search for products, brands and more'
        />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
    </SearchComponent>
  )
}
