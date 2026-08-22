import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Carde = ({ carde }) => {
  return (
    <Card
      sx={{
        width: 115,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 105,
          backgroundColor: '#f5f5f5',
        }}
      >
        <CardMedia
          component="img"
          image={carde.img}
          alt={carde.title}
          sx={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
            p: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 5,
            right: 5,
            backgroundColor: 'white',
            borderRadius: 1,
            boxShadow: 1,
            px: 0.7,
            py: 0.3,
            fontSize: 8,
            whiteSpace: 'nowrap',
          }}
        >
          {carde.Badge}
        </Box>
      </Box>
      <CardContent
        sx={{
          p: 1,
          '&:last-child': {
            pb: 1,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {carde.title}
        </Typography>

        <Typography
          sx={{
            color: 'primary.main',
            fontSize: 13,
            fontWeight: 700,
            mt: 0.5,
          }}
        >
          ₹{carde.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Carde;