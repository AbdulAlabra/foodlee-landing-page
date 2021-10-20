/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RocketIllustration from 'svg/illustrations/QRCode';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
const Hero = () => {
  const theme = useTheme();
  const { t } = useTranslation('common');
  const router = useRouter();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const demoStoreURL = process.env.NEXT_PUBLIC_DEMO_STORE_URL;

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              color="textPrimary"
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: theme.typography.h4.fontSize,
                  md: theme.typography.h2.fontSize,
                },
              }}
            >
              {t('foodleeGiveYouOnlineMenu')}{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                display={{
                  xs: router.locale === 'en' ? 'block' : 'inline',
                  md: 'inline',
                }}
              >
                <Typed
                  strings={[t('modern'), t('beautiful'), t('easy')]}
                  typeSpeed={100}
                  loop={true}
                />
              </Typography>
            </Typography>
          </Box>
          {/* <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              {t('foodleeGiveYouOnlineMenu')}{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                <Typed
                  strings={[t('modern'), t('beautiful'), t('easy')]}
                  typeSpeed={100}
                  loop={true}
                />
              </Typography>
            </Typography>
          
          </Box> */}
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="textSecondary"
              sx={{ fontWeight: 400 }}
            >
              {t('headline')}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={demoStoreURL}
              target={'_blank'}
            >
              {t('startFreeTrial')}
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={demoStoreURL}
                target={'_blank'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                {t('seeDemo')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={'100%'} width={'100%'} maxHeight={600}>
            <RocketIllustration width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
