import { Box, Container, styled } from '@mui/material';
import React from 'react';
import FooterData from './FooterData';

const CustomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: '0 15px',
  },
}));

const CustomBoxItems = styled(Box)(({ theme }) => ({
  height: '400px',
  backgroundColor: '#FF6700',
  position: 'relative',
  borderRadius: '20px',
  display: 'flex',
  padding: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
    padding: '15px',
  },
}));

const SloganBox = styled(Box)(({ theme }) => ({
  width: '50%',
  fontSize: '26px',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    marginTop: '0',
    width: 'auto',
    fontSize: '18px',
    fontWeight: 350,
  },
}));

const GroupsBox = styled(Box)(({ theme }) => ({
  alignItems: 'flex-start',
  display: 'flex',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    width: 'auto',
  },
}));

const CustomBoxGroup = styled(Box)(({ theme }) => ({
  width: '190px',
  marginRight: '40px',
  [theme.breakpoints.down('md')]: {
    marginRight: '24px',
    width: 'auto',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '10px',
  },
}));

const CopyrightContainer = styled(Container)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
  marginTop: '20px',
  color: '#FF6700',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    fontSize: '12px',
    fontWeight: 350,
    justifyContent: 'flex-start',
    marginBottom: '35px',
    marginTop: '20px',
  },
}));

const CustomTermsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.75rem',
  },
}));

const CustomTermsTypography = styled('p')(({ theme }) => ({
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    margin: '4px 8px 0 0',
  },
}));

const Footer = () => {
  return (
    <Container
      className="dark-container"
      sx={{ paddingTop: '120px', paddingBottom: '10px', position: 'relative' }}
    >
      <CustomContainer className="footerContainer">
        <CustomBoxItems className="footer-items">
          <SloganBox className="slogan">
            <h3>
              Hello. We are CHATTIE,
              <br />
              connecting people with others
              <br />
              and with robots.
            </h3>
          </SloganBox>
          <GroupsBox className="groups">
            {FooterData.map((data) => (
              <CustomBoxGroup className={data.className} key="">
                <h4>{data.name}</h4>
                <div style={{ fontSize: '25px' }}>
                  {data.subnames.map((subname) => (
                    <p key="subname">{subname}</p>
                  ))}
                </div>
              </CustomBoxGroup>
            ))}
          </GroupsBox>
        </CustomBoxItems>
      </CustomContainer>
      <CopyrightContainer className="copyright-container">
        <p>&copy; Chattie. All rights reserved.</p>
        <CustomTermsBox>
          <CustomTermsTypography>Privacy policy</CustomTermsTypography>
          <CustomTermsTypography>Terms and services</CustomTermsTypography>
        </CustomTermsBox>
      </CopyrightContainer>
    </Container>
  );
};

export default Footer;
