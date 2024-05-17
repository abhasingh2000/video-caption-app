import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Button, Box, Typography } from '@mui/material';

const VideoPlayer = ({ videoUrl, captions }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentCaption, setCurrentCaption] = useState('');

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const current = captions.find(
          caption => currentTime >= caption.time && currentTime <= caption.time + 5
        );
        if (current) {
          setCurrentCaption(current.text);
        } else {
          setCurrentCaption('');
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [captions]);

  return (
    <Box sx={{ position: 'relative', mb: 3 }}>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        controls
        width="100%"
        height="100%"
      />
      <Button onClick={handlePlayPause} variant="contained" sx={{ mt: 2 }}>
        {playing ? 'Pause' : 'Play'}
      </Button>
      {currentCaption && (
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px'
          }}
        >
          {currentCaption}
        </Typography>
      )}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Current Caption: {currentCaption}
      </Typography>
    </Box>
  );
};

export default VideoPlayer;
