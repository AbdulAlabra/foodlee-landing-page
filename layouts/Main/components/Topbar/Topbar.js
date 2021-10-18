import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { colors, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WebbeeLogo from 'svg/logos/Webbee';
import paletteTypes from 'common/paletteTypes';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ButtonLink } from 'components';
const Topbar = ({
  themeMode,
  themeToggler,
  setThemePalette,
  onSidebarOpen,
  paletteType,
}) => {
  const theme = useTheme();
  const router = useRouter();
  const { t, lang } = useTranslation('common');
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        {/* <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box> */}
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={{ xs: 28, md: 32 }}
          width={100}
        >
          <WebbeeLogo height={'100%'} width={'100%'} />
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          <Box>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://material-ui.com/store/items/webbee-landing-page/"
              size="large"
            >
              Start Now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{ display: 'flex' }}
          alignItems={'center'}
          position="absolute"
          right={10}
        >
          <Box marginX={2}>
            <ButtonLink
              text={lang === 'ar' ? 'English' : 'عربي'}
              href={router.asPath}
              locale={lang === 'ar' ? 'en' : 'ar'}
              replace={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
