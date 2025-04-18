import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from 'react-router-dom';

const featuredCourses = [
  {
    title: 'React for Beginners',
    instructor: 'Jane Smith',
    image: 'https://source.unsplash.com/400x250/?react',
    category: 'Development',
  },
  {
    title: 'Mastering Python',
    instructor: 'John Doe',
    image: 'https://source.unsplash.com/400x250/?python',
    category: 'Development',
  },
  {
    title: 'UI UX Design Fundamentals',
    instructor: 'Sara Lee',
    image: 'https://source.unsplash.com/400x250/?design',
    category: 'Design',
  },
];

const categories = ['Development', 'Design', 'Marketing', 'Business'];

const Home = () => {
  const navigate = useNavigate();

  const handleEnroll = (title) => {
    const routeTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/enroll/${routeTitle}`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome back, John! 👋
      </Typography>

      <TextField
        fullWidth
        placeholder="Search for courses..."
        variant="outlined"
        sx={{ mb: 5 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Featured Courses
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {featuredCourses.map((course, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: 4, boxShadow: 4, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="180"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Instructor: {course.instructor}
                </Typography>
                <Chip
                  label={course.category}
                  color="primary"
                  variant="outlined"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<PlayCircleOutlineIcon />}
                  onClick={() => handleEnroll(course.title)}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Explore Categories
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1 }}>
        {categories.map((cat, i) => (
          <Button key={i} variant="outlined" color="primary" sx={{ borderRadius: 4 }}>
            {cat}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
