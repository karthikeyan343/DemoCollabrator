import React, { useState } from 'react';
import { Box, Typography,Button } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const BillingCart = () => {

  const [Items, setItems] = useState([
    {
      id:1,
      title:'Aavin Milk 500ml',
      price:50,
      PPU:25.00,
      count:2
    },
    {
      id:2,
      title:'Aashirvad Aatta 5Kg',
      price:245,
      PPU:245.00,
      count:1
    },
    {
      id:3,
      title:'Nescafe classic 50g',
      price:160,
      PPU:160.00,
      count:1
    }
  ])

  const handleRemove=(id)=>{
    setItems(
      Items.map((item)=>
        item.id==id && item.count>1 ? {...item, count:item.count-1} : item
      )
    );
  };

  const handleInc=(id)=>{
     setItems(
      Items.map((item)=>
        item.id == id ? {...item , count: item.count} : item
      )
     )
  }

  const handleDelete = (id)=>{
    setItems(
      Items.filter((item)=> item.id != id)
    )
  }

  return (
    <Box
      sx={{
        width: '100%',
        height:'100%',
        p: 1,
        boxSizing: 'border-box',
      }}
    >{
      Items.map((items)=>{
         return(
          <Box
        sx={{
          border: '1px solid #d5dbe5',
          borderRadius: 2,
          p: 1,
          mb: 1.2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            {items.title}
          </Typography>

          <Typography sx={{ fontWeight: 600 }}>
            ₹{items.price}  
          </Typography>
        </Box>

        <Typography sx={{ color: 'text.secondary' }}>
          ₹{items.PPU} / unit
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 1.5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems:'center',
              border: '1px solid #d5dbe5',
              borderRadius: 1.5,
              overflow: 'hidden',
              height:'35px'
            }}
           >
            <Button sx={quantityButton} onClick={()=>handleRemove(items.id)}>
              <RemoveIcon />
            </Button>

            <Box sx={quantityNumber}>
              {items.count}
            </Box>

            <Button sx={quantityButton} onClick={()=>handleInc(items.id)} >
              <AddIcon />
            </Button>
          </Box>
        <Button
              sx={{
              color: '#d32f2f',
              ml: 'auto',
            }}

            onClick={()=>{handleDelete(items.id)}}
        >
          <DeleteIcon />
        </Button>  
        </Box>
      </Box>
         )

      })}
      <Box
        sx={{
          border:'1px solid grey',
          mt:2
        }}
      >
          <Box 
            sx={{
              display:'flex',
              justifyContent:'space-between',
              p:1,
              borderBottom:'1px solid grey'
            }}
          >
              <Box>
                    <Typography>Subtotal(4 items)</Typography>
                    <Typography>Discount(Loyalty)</Typography>
                    <Typography>GSTCalculated</Typography>
              </Box>
              <Box>
                   <Typography>₹455.00</Typography>
                   <Typography>-₹37.00</Typography>
                   <Typography>included</Typography>
              </Box>
          </Box>

          <Box>
               <Box sx={{
                display:'flex',
                justifyContent:'space-between'
               }}> 
                <Typography sx={{mt:2,ml:1,fontSize:'20px'}}>Total</Typography>
                <Typography sx={{fontSize:'33px', fontWeight:'200px',mr:1}}>₹418.00</Typography>
               </Box>

               <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                   <Box sx={{border:'1px solid grey',
                   height:'25px',width:'80px', ml:1,display:'flex',alignItems:'center', justifyContent:'center',
                    borderRadius:2}}>
                        <Typography>HoldBill</Typography>
                   </Box>
                   <Box sx={{border:'1px solid grey',
                   height:'25px',width:'80px', mr:1,display:'flex',alignItems:'center', justifyContent:'center',
                    borderRadius:2}}>
                        <Typography>Print</Typography>
                   </Box>
               </Box>
               <Button variant='contained' sx={{m:2,borderRadius:2}}>
                Proceed to Payment Rs 418.00
               </Button>
          </Box>
      </Box>

    </Box>
  );
};

const quantityButton = {
  width: 48,       
  height: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f6f8',
};

const quantityNumber = {
  width: 55,
  height: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderLeft: '1px solid #d5dbe5',
  borderRight: '1px solid #d5dbe5',
};

export default BillingCart;