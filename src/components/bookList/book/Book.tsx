import React from 'react';
import { iVolumeInfo } from '../../../models/BooksDto';
import './Book.scss';
import noImage from '../../../assets/no-image.png';
import { Button, Divider, Box } from '@mui/material';

interface iBookProps {
  details: iVolumeInfo;
}

const Book = ({ details }: iBookProps) => {
  return (
    <div className='book-card'>
      <Box className='image-container'>
        <img
          src={
            details.imageLinks?.thumbnail
              ? details.imageLinks?.thumbnail
              : noImage
          }
        />
      </Box>
      <Box>
        <Divider />

        <h3>{details.title}</h3>
      </Box>
      <Button variant='text' color='info'>
        See Details
      </Button>
    </div>
  );
};

export default Book;
