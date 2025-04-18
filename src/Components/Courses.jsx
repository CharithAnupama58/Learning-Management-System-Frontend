import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Select,
  MenuItem,
  LinearProgress,
  FormControl,
  InputLabel,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const allCourses = [
  {
    id: 1,
    title: 'React for Beginners',
    instructor: 'Jane Smith',
    image:
      'https://img.freepik.com/free-vector/react-native-framework-mobile-development_23-2148785202.jpg',
    category: 'Development',
    progress: 60,
  },
  {
    id: 2,
    title: 'UI/UX Design Essentials',
    instructor: 'Alex Johnson',
    image:
      'https://img.freepik.com/free-vector/user-interface-design-concept_23-2148799590.jpg',
    category: 'Design',
    progress: 0,
  },
  {
    id: 3,
    title: 'Advanced Python',
    instructor: 'John Doe',
    image:
      'https://img.freepik.com/free-vector/python-programming-language-learning-concept_23-2149219957.jpg',
    category: 'Development',
    progress: 20,
  },
  {
    id: 4,
    title: 'Marketing Strategies',
    instructor: 'Sara Lee',
    image:
      'https://img.freepik.com/free-vector/digital-marketing-concept-with-isometric-elements_1284-63796.jpg',
    category: 'Marketing',
    progress: 0,
  },
];

const categories = ['All', 'Development', 'Design', 'Marketing'];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses =
    selectedCategory === 'All'
      ? allCourses
      : allCourses.filter((course) => course.category === selectedCategory);

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Your Courses
        </Typography>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            label="Category"
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                transition: '0.3s',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '&:hover': { boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Instructor: {course.instructor}
                </Typography>
                <Chip
                  label={course.category}
                  size="small"
                  variant="outlined"
                  color="primary"
                  sx={{ mb: 2, alignSelf: 'flex-start' }}
                />

                {course.progress > 0 ? (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      Progress: {course.progress}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={course.progress}
                      sx={{ height: 8, borderRadius: 5, mt: 0.5 }}
                    />
                  </Box>
                ) : (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Not started
                  </Typography>
                )}

                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    mt: 'auto', // Push to bottom
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={<PlayArrowIcon />}
                  >
                    {course.progress > 0 ? 'Continue' : 'Start'}
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    startIcon={<FavoriteBorderIcon />}
                  >
                    Wishlist
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
