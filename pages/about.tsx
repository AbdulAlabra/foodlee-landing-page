import React from 'react';
import { SEO } from 'components';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <div>
      <SEO title="About" />
      <Typography variant="h1">About</Typography>
      <h1>About</h1>
      <Button color="primary" variant="contained">
        Home
      </Button>
    </div>
  );
}
