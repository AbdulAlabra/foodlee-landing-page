/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { useTheme } from '@mui/material';
import { ButtonLink } from 'components';
import Link from '@mui/material/Link';
const Footer = () => {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const signURL = `${process.env.NEXT_PUBLIC_SIGN_UP_URL}`;

  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        {t('whatAreYouWaitingFor')}
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        sx={{
          fontSize: {
            xs: theme.typography.h4.fontSize,
            md: theme.typography.h3.fontSize,
          },
        }}
        gutterBottom
        align={'center'}
      >
        {t('startWithFoodleeToday')}
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        marginTop={2}
        sx={{
          fontSize: {
            xs: theme.typography.subtitle1.fontSize,
            md: theme.typography.h6.fontSize,
          },
        }}
        color={'textSecondary'}
        align={'center'}
      >
        {t('cantactUsIfYouHaveAnyQuestion')}
      </Typography>
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Link underline="none" target={'_blank'} href={signURL}>
          <Button variant="contained" color="primary" size="large">
            {t('startFreeTrial')}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
