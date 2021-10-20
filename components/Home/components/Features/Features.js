/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TeamWorkingIllustration from 'svg/illustrations/TeamWorking';
import useTranslation from 'next-translate/useTranslation';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicIcon from '@mui/icons-material/Public';
const Features = () => {
  const theme = useTheme();
  const { t } = useTranslation('common');
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          {t('features')}
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          sx={{
            fontSize: {
              xs: theme.typography.h4.fontSize,
              md: theme.typography.h3.fontSize,
            },
          }}
          gutterBottom
          align={'center'}
        >
          {t('featureHeadLine')}
        </Box>
        <Typography
          marginTop={3}
          variant={'h6'}
          sx={{
            fontSize: {
              xs: theme.typography.subtitle1.fontSize,
              md: theme.typography.h6.fontSize,
            },
          }}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          {t('foodleeGiveFlexableMenu')}
        </Typography>
        {/* <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Button
            component={'a'}
            href={'https://material-ui.com/store/items/webbee-landing-page/'}
            target={'_blank'}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Purchase now
          </Button>
        </Box> */}
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginBottom={4}
      >
        <Box height={'100%'} width={'100%'} maxWidth={600}>
          <TeamWorkingIllustration height={'100%'} width={'100%'} />
        </Box>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {[
            {
              title: t('cf1'),
              subtitle: t('cd1'),
              icon: (
                <svg
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              ),
            },
            {
              title: t('cf2'),
              subtitle: t('cd2'),
              icon: (
                <svg
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ),
            },
            {
              title: t('cf3'),
              subtitle: t('cd3'),
              icon: <PublicIcon />,
            },
            {
              title: t('cf4'),
              subtitle: t('cd4'),
              icon: <InstagramIcon />,
            },
            {
              title: t('cf5'),
              subtitle: t('cd5'),
              icon: <FastfoodIcon />,
            },
            {
              title: t('cf6'),
              subtitle: t('cd6'),
              icon: (
                <svg
                  height={24}
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ),
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={Card}
                padding={4}
                borderRadius={4}
                width={'100%'}
                height={'100%'}
                data-aos={'fade-up'}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
