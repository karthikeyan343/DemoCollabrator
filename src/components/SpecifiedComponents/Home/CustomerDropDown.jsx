import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const CustomerDropdown = ({setDiscount}) => {
  const [Customer, setCustomers] = useState('');
  const customers=[
     {
      value:'Walk In Cutomer',
      label:'Walk In Cutomer',
      discount:30
     },
     {
      value:'Registered Cutomer',
      label:'Registered Cutomer',
      discount:100
     },
     {
      value:'None',
      label:'None',
      discount:0
     },
  ]

  const handleChange = (event)=>{
    const value=event.target.value;
    setCustomers(value)
    const selectCustomer=customers.find(
      (customer)=>customer.value === value
    )
    setDiscount(selectCustomer ? selectCustomer.discount : 0);
  }
  return (

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={Customer}
          helperText="Please select your customer"
          onChange={handleChange}
          sx={{
            width:'100%'
          }}
        >
          {customers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  
  );
};

export default CustomerDropdown;