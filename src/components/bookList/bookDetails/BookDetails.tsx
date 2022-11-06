import React, { useState, useEffect } from 'react';
import { Box, Button, Rating, Typography, Chip, Link } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { iVolumeInfo } from '../../../models/BooksDto';
import noImage from '../../../assets/no-image.png';

interface iBookDetailsProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
  data: iVolumeInfo;
  id: string;
}

const BookDetails = ({ open, setOpen, data, id }: iBookDetailsProps) => {
  const [rating, setRating] = useState(0);
  const [, setSavedRating] = useState(localStorage.getItem(id));

  useEffect(() => {
    localStorage.setItem(id, rating.toString());
    setSavedRating(rating.toString());
  }, [rating]);

  const handleRatingChange = (event: React.SyntheticEvent) => {
    console.log((event.target as HTMLInputElement).value);
    setRating(Number((event.target as HTMLInputElement).value));
  };
  return (
    <Dialog className='dialog-container' maxWidth='lg' open={open}>
      <DialogTitle className='dialog-header-container'>
        <Box>
          {data.title}
          <Typography>{data.subtitle}</Typography>
          {data.authors.map((author, i) => (
            <Typography key={i}>Author: {author}</Typography>
          ))}
          <Typography>Published: {data.publishedDate}</Typography>
          {data.categories?.map((category, i) => (
            <Chip key={i} label={category} color='primary' />
          ))}
        </Box>
        <Box>
          <img
            alt={`${data.title} book cover`}
            src={
              data.imageLinks?.thumbnail ? data.imageLinks?.thumbnail : noImage
            }
          />
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{data.description}</DialogContentText>
        <Box className='link-container'>
          <Link href={data.infoLink}>More info</Link>
          <Link href={data.previewLink}>Preview this title</Link>
        </Box>
        <Box className='rating-container'>
          <Typography>How much did you like the book?</Typography>
          <Rating
            name='size-large'
            value={rating}
            precision={0.5}
            size='large'
            onChange={(event) => handleRatingChange(event)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDetails;
