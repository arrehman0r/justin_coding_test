import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function AppImageGrid({ images }) {
  return (
    <div style={{ margin: '50px 525px' }}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map((item) => ( // Updated: Use the images prop instead of itemData
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Stack spacing={2} style={{ marginLeft: '50px' }}>
        <Pagination count={10} color="primary" />
      </Stack>
    </div>
  );
}
