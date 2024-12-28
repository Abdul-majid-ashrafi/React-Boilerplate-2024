import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setJobs } from '../store/job-slice';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const AddJobPage = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    dispatch(setJobs([newJob]));

    toast.success('Job Added Successfully');

    navigate('/jobs');
  };

  return (
    <Box sx={{ backgroundColor: '#e3f2fd', py: 6 }}>
      <Container maxWidth="md">
        <Box
          component="form"
          onSubmit={submitForm}
          sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
            Add Job
          </Typography>

          {/* Job Type */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Job Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              label="Job Type"
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>

          {/* Job Listing Name */}
          <TextField
            label="Job Listing Name"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            sx={{ mb: 3 }}
          />

          {/* Description */}
          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />

          {/* Salary */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Salary</InputLabel>
            <Select
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
              label="Salary"
            >
              <MenuItem value="Under $50K">Under $50K</MenuItem>
              <MenuItem value="$50K - $60K">$50K - $60K</MenuItem>
              <MenuItem value="$60K - $70K">$60K - $70K</MenuItem>
              <MenuItem value="$70K - $80K">$70K - $80K</MenuItem>
              <MenuItem value="$80K - $90K">$80K - $90K</MenuItem>
              <MenuItem value="$90K - $100K">$90K - $100K</MenuItem>
              <MenuItem value="$100K - $125K">$100K - $125K</MenuItem>
              <MenuItem value="$125K - $150K">$125K - $150K</MenuItem>
              <MenuItem value="$150K - $175K">$150K - $175K</MenuItem>
              <MenuItem value="$175K - $200K">$175K - $200K</MenuItem>
              <MenuItem value="Over $200K">Over $200K</MenuItem>
            </Select>
          </FormControl>

          {/* Location */}
          <TextField
            label="Location"
            fullWidth
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            sx={{ mb: 3 }}
          />

          <Typography variant="h5" fontWeight="bold" mb={3}>
            Company Info
          </Typography>

          {/* Company Name */}
          <TextField
            label="Company Name"
            fullWidth
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Company Description */}
          <TextField
            label="Company Description"
            fullWidth
            variant="outlined"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />

          {/* Contact Email */}
          <TextField
            label="Contact Email"
            fullWidth
            variant="outlined"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
            sx={{ mb: 3 }}
          />

          {/* Contact Phone */}
          <TextField
            label="Contact Phone"
            fullWidth
            variant="outlined"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: 1.5, fontSize: '1rem' }}
          >
            Add Job
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AddJobPage;
