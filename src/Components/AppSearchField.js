import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function AppSearchField({ onSearch }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    onSearch(searchKeyword);
  };

  const handleChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Paper
      style={{ margin: '50px 550px', border: '2px solid black' }}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Image"
        inputProps={{ 'aria-label': 'search image' }}
        value={searchKeyword}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
