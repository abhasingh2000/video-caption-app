import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import CaptionInput from './components/CaptionInput';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const [caption, setCaption] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleAddCaption = () => {
    if (caption && timestamp) {
      setCaptions([...captions, { text: caption, time: parseFloat(timestamp) }]);
      setCaption('');
      setTimestamp('');
    }
  };

  return (
    <Container>
      <h1>Video Captioning App</h1>
      <TextField
        label="Video URL"
        variant="outlined"
        fullWidth
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <CaptionInput
        caption={caption}
        setCaption={setCaption}
        timestamp={timestamp}
        setTimestamp={setTimestamp}
        handleAddCaption={handleAddCaption}
      />
      <VideoPlayer videoUrl={videoUrl} captions={captions} />
    </Container>
  );
}

export default App;
