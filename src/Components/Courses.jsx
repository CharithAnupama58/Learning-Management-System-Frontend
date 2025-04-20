import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Drawer,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Course = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Dummy data for courses
  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Master the basics of React including components, props, and state.',
      image: '/images/react-course.jpg',
      level: 'Beginner',
      duration: '3h 45m',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Deep dive into closures, async programming, and advanced ES6+ features.',
      image: '/images/js-course.jpg',
      level: 'Advanced',
      duration: '4h 20m',
    },
  ];

  const handleOpenDrawer = (course) => {
    setSelectedCourse(course);
    setDrawerOpen(true);
  };

  const handleContinueLearning = () => {
    setDrawerOpen(false);
    navigate('/learning', { state: { course: selectedCourse } });
  };

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Your Courses
      </Typography>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="160"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {course.description}
                </Typography>
                <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="caption" color="primary">
                    {course.level}
                  </Typography>
                  <Typography variant="caption">{course.duration}</Typography>
                </Box>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleOpenDrawer(course)}
                  >
                    Continue
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Drawer Section */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: { xs: '100%', sm: 400 }, p: 3, borderTopLeftRadius: 12 },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            {selectedCourse?.title}
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <CardMedia
          component="img"
          height="180"
          image={selectedCourse?.image}
          alt={selectedCourse?.title}
          sx={{ borderRadius: 2 }}
        />
        <Typography variant="body1" mt={2}>
          {selectedCourse?.description}
        </Typography>

        <Typography variant="caption" color="text.secondary" mt={1} display="block">
          Level: {selectedCourse?.level} • Duration: {selectedCourse?.duration}
        </Typography>

        <Box mt={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleContinueLearning}
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Continue Learning
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Course;
