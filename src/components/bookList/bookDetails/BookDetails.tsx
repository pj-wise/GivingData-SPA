import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface iBookDetailsProps {
  isOpen: boolean;
}

const BookDetails = ({ isOpen }: iBookDetailsProps) => {
  return <Dialog open={isOpen}></Dialog>;
};

export default BookDetails;
