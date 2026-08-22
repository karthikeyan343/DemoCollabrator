import React from 'react'
import CustomerDropdown from './CustomerDropDown'
import { Box } from '@mui/material'
import BillingCart from './BillingCart'

const Cart = () => {
  return (
    <>
    <Box sx={{border:"1px solid #e0e0e0",p:1}}>
    <CustomerDropdown/>
    <BillingCart/>
    </Box>
    </>
  )
}

export default Cart