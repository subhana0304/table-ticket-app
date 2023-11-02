import './App.css';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';




function App() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('open'); // Set the default value to 'open'

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setOpen(false);
  };

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table>
          <TableHead className='head'>
            <TableRow>
              <TableCell className='box'>Check</TableCell>
              <TableCell className='box'>Ticket Number</TableCell>
              <TableCell className='box'>Classification</TableCell>
              <TableCell className='box'>Priority</TableCell>
              <TableCell className='box'>Status</TableCell>
              <TableCell className='box'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow>
              <TableCell className='box'><Checkbox {...label} /></TableCell>
              <TableCell className='box'>#123</TableCell>
              <TableCell className='box'>Content</TableCell>
              <TableCell className='box'><span className="small">High</span></TableCell>
              <TableCell className='box'>
                <Select
                  label="Select an option"
                  value={selectedValue}
                  onChange={handleChange}
                  open={open}
                  onOpen={handleOpen}
                  onClose={handleClose}
                >
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="option1">Close</MenuItem>
                </Select>
              </TableCell>
              <TableCell className='box'><span className='btn'>Edit</span></TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
