import {useState} from 'react'
import CustomerDropdown from './CustomerDropDown'
import { Box } from '@mui/material'
import BillingCart from './BillingCart'

const Cart = () => {
  const [discount, setDiscount]=useState(0);
  return (
    <>
    <Box sx={{border:"1px solid #e0e0e0",p:1}}>
    <CustomerDropdown setDiscount={setDiscount}/>
    <BillingCart discount={discount}/>
    </Box>
    </>
  )
}

export default Cart