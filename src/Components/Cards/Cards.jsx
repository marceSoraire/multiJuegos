import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Cards =({ img, title })=> {
  return (
    <Card sx={{ maxWidth: 345 }} className='border border-gray-900 hover:shadow-lg hover:shadow-gray-800 my-4  mx-auto'>
      <CardActionArea>
        <CardMedia
          component="img"
          className='h-[80%]'
          image={img}
          alt={title}
        />
      </CardActionArea>
    </Card>
  );
}

export default Cards;