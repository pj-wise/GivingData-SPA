import { useState } from 'react';
import { iVolumeInfo } from '../../../models/BooksDto';
import './Book.scss';
import noImage from '../../../assets/no-image.png';
import { Button, Divider, Box } from '@mui/material';
import BookDetails from '../bookDetails/BookDetails';

interface iBookProps {
  details: iVolumeInfo;
  id: string;
}

const Book = ({ details, id }: iBookProps) => {
  const [toggleDialog, setToggleDialog] = useState(false);

  const openDialog = () => {
    setToggleDialog(true);
  };

  return (
    <div className='book-card'>
      <Box className='image-container'>
        <img
          alt={`${details.title} book cover`}
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
      <Button onClick={openDialog} variant='text' color='info'>
        See Details
      </Button>
      <BookDetails
        open={toggleDialog}
        setOpen={setToggleDialog}
        data={details}
        id={id}
      />
    </div>
  );
};

export default Book;
