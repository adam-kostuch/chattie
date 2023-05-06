import React from 'react';
import { motion } from 'framer-motion';
import './PickAPartner.css';
import { styled, Container, Box, Typography, Grid } from '@mui/material';

import Menu from './Menu';

import RealPartner from '../../assets/HyperspaceFloating.png';
import RobotPartner from '../../assets/HyperspaceRobot1.png';

const ChatPartnerData = [
  {
    name: 'Robot A.I. Chattie',
    image: RobotPartner,
    alt: 'image of robot partner',
  },
  {
    name: 'Random person',
    image: RealPartner,
    alt: 'image of real partner',
  },
];

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PickAPartner = () => {
  return (
    <>
      <Menu />
      <Container
        sx={{ justifyContent: 'center', display: 'flex', textAlign: 'center' }}
      >
        <Box sx={{ position: 'absolute', paddingTop: '100px' }}>
          <Typography variant="h3">Choose Your Chatter!</Typography>
        </Box>
        <CustomContainer
          maxWidth={false}
          disableGutters
          className="full-width container"
        >
          <Grid
            container
            sx={{
              justifyContent: 'center',
              display: 'flex',
              marginTop: '100px',
            }}
          >
            {ChatPartnerData.map((partner) => (
              <Grid item className="example-container" p={20} key="grid">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}
                >
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    style={{ width: '150px', height: '150px' }}
                  />
                </motion.div>
                <Typography variant="h5" pt={5}>
                  {partner.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CustomContainer>
      </Container>
    </>
  );
};

export default PickAPartner;