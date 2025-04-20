import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';

const CourseLearningView = ({ course }) => {
  const selectedCourse = course || {
    title: 'React for Beginners',
    modules: [
      { id: 1, title: 'Introduction to React', duration: '12:30' },
      { id: 2, title: 'JSX & Rendering', duration: '10:45' },
      { id: 3, title: 'State & Props', duration: '15:20' },
      { id: 4, title: 'Handling Events', duration: '09:10' },
    ],
    description:
      'This course will help you understand the basics of React and build your first project.',
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        color: '#1e1e1e',
      }}
    >
      {/* Video Section */}
      <Box
        sx={{
            width: '100%',
            maxWidth: '100%',
            mb: 4,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        >

        <video
          width="100%"
          height="auto"
          controls
          poster="https://img.youtube.com/vi/dGcsHMXbSOA/maxresdefault.jpg"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Course Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#222' }}>
        {selectedCourse.title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{ mb: 3, maxWidth: '700px', color: '#555' }}
      >
        {selectedCourse.description}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* Modules */}
      <Typography variant="h6" fontWeight="medium" sx={{ color: '#333', mb: 2 }}>
        Course Modules
      </Typography>

      <List sx={{ maxWidth: 600 }}>
        {selectedCourse.modules.map((module, index) => (
          <ListItem
            key={module.id}
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              mb: 1,
              boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
              transition: '0.2s',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#222' }}>
                  {index + 1}. {module.title}
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: '#888' }}>
                  Duration: {module.duration}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: 'none',
            borderRadius: 2,
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            fontSize: '16px',
          }}
        >
          Start Learning
        </Button>
      </Box>
    </Box>
  );
};

export default CourseLearningView;
