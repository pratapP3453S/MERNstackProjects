import { Box, Grid, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import React from 'react'

const SmallText = styled(Box)`
   text-size: 14px;
   vertical-align: baseline;
   & > p{
     font-size: 14px;
     margin-top: 10px;
   }
`
const StyledTag = styled(LocalOfferIcon)`
   margin-right: 10px;
   color: #00cc00;
   font-size: 15px;
`
const ColumnText = styled(TableRow)`
   font-size: 14px;
   vertical-align: baseline;
   & > td {
      font-size: 14px;
      margin-top: 10px;
      border: none;
   }
`
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const date = new Date(new Date().getTime()+(5*24*60*1000))

function ProductDetails({ product }) {
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14, }}>
                8 Ratings & 1 Reviews
                <Box component="span"><img src={fassured} alt="fassured_image" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388e3c' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledTag />Bank Offer10% off up to ₹749 on HDFC Bank Credit Card Transactions.T&C</Typography>
                <Typography><StyledTag />Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>
                <Typography><StyledTag />Bank Offer10% off up to ₹1,250 on HDFC Bank Credit Card Transactions. Min Txn Value: ₹7,499T&C</Typography>
                <Typography><StyledTag />Special PriceGet extra 80% off (price inclusive of cashback/coupon)T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                        <TableCell style={{fontWeight: 600}}>No Warranty </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color: '#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View More sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                           <img src={adURL} style={{width: 390}} alt="flipkartpoints" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                    <TableCell style={{color: '#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails
