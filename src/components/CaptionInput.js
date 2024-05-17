import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const CaptionInput = ({ caption, setCaption, timestamp, setTimestamp, handleAddCaption }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        label="Caption"
        variant="outlined"
        fullWidth
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Timestamp (seconds)"
        variant="outlined"
        fullWidth
        type="number"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button onClick={handleAddCaption} variant="contained" color="primary">
        Add Caption
      </Button>
    </Box>
  );
};

export default CaptionInput;
