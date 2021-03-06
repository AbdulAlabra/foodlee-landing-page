import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import WebbeeLogo from 'svg/logos/Webbee';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/MailOutlineSharp';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            underline="none"
            href="/"
            title="webbee"
            height={24}
            width={35}
          >
            <WebbeeLogo height={'100%'} width={'100%'} />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box>
              <Link target="_blank" href={process.env.NEXT_PUBLIC_WHATSAPP_URL}>
                <IconButton>
                  <WhatsAppIcon color="primary" fontSize="medium" />
                </IconButton>
              </Link>
            </Box>

            <Box>
              <Link href={'mailto:store@foodlee.io'} target="_blank">
                <IconButton>
                  <MailIcon color="primary" fontSize="medium" />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography
          align={'center'}
          marginBottom={2}
          variant={'subtitle2'}
          color="textSecondary"
          gutterBottom
        >
          {t('aboutus')}
        </Typography>

        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="textSecondary"
          gutterBottom
        >
          &copy; {t('foodlee')} {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
