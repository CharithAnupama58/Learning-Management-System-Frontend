import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const EnrollView = () => {
  const { courseTitle } = useParams();
  const navigate = useNavigate();

  const courseDetails = {
    title: courseTitle.replace(/-/g, ' '),
    instructor: {
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      bio: 'Senior Software Engineer with 10+ years of experience in web development and React.',
    },
    duration: '6h 30m',
    modules: 8,
    description:
      'This course is designed to help beginners dive into the world of React development. You’ll learn components, state management, hooks, and best practices.',
    skills: ['React', 'Hooks', 'JSX', 'State', 'Props', 'Frontend'],
  };

  const handleEnroll = () => {
    alert(`Successfully enrolled in ${courseDetails.title}!`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
        onClick={() => navigate(-1)}
      >
        Back to Home
      </Button>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Grid container spacing={4}>
          {/* Course Info */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {courseDetails.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Learn from industry expert {courseDetails.instructor.name}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Chip icon={<AccessTimeIcon />} label={courseDetails.duration} />
              <Chip icon={<AutoStoriesIcon />} label={`${courseDetails.modules} Modules`} />
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>
              {courseDetails.description}
            </Typography>

            <Typography variant="subtitle2" fontWeight="bold">
              What you’ll learn:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {courseDetails.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  variant="outlined"
                  color="primary"
                />
              ))}
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 4, borderRadius: 2 }}
              onClick={handleEnroll}
              startIcon={<CheckCircleIcon />}
            >
              Confirm Enrollment
            </Button>
          </Grid>

          {/* Instructor Info */}
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  src={courseDetails.instructor.avatar}
                  alt={courseDetails.instructor.name}
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {courseDetails.instructor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {courseDetails.instructor.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default EnrollView;
