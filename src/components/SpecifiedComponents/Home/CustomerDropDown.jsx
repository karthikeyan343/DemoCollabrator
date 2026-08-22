import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const CustomerDropdown = () => {
  const customers=[
     {
      value:'Walk In Cutomer',
      label:'Walk In Cutomer'
     },
     {
      value:'Registered Cutomer',
      label:'Registered Cutomer'
     }
  ]
  return (

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your customer"
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