import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useTranslation from 'next-translate/useTranslation';

const PricingCompareTable = () => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  const pricing = [
    {
      title: t('basicPlan'),
      price: {
        monthly: 50,
        annual: 50 * 12,
      },
      features: [3, 2, 4, 5, 6],
      isHighlighted: false,
      btnText: t('basicPlan'),
    },
    {
      title: t('premiumPlan'),
      price: {
        monthly: 99,
        annual: 99 * 12,
      },
      features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13],
      isHighlighted: true,
      btnText: t('premiumPlan'),
    },
    {
      title: t('growthPlan'),
      price: {
        monthly: 199,
        annual: 199 * 12,
      },
      features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      isHighlighted: false,
      btnText: t('growthPlan'),
    },
  ];

  const features = [
    {
      title: t('f3'),
      info: '',

      id: 3,
    },
    {
      title: t('f4'),
      info: '',

      id: 4,
    },
    {
      title: t('f5'),
      info: '',

      id: 5,
    },
    {
      title: t('f6'),
      info: '',

      id: 6,
    },
    {
      title: t('f2'),
      info: '',

      id: 2,
    },
    {
      title: t('f1'),
      info: '',
      id: 1,
    },

    {
      title: t('f7'),
      info: t('soon'),

      id: 7,
    },
    {
      title: t('f8'),
      info: '',

      id: 8,
    },
    {
      title: t('f9'),
      info: t('soon'),

      id: 9,
    },
    {
      title: t('f10'),
      info: t('soon'),

      id: 10,
    },
    {
      title: t('f13'),
      info: '',
      id: 13,
    },
    {
      title: t('f11'),
      info: t('soon'),

      id: 11,
    },
    {
      title: t('f12'),
      info: '',

      id: 12,
    },
  ];
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          sx={{
            fontSize: {
              xs: theme.typography.h4.fontSize,
              md: theme.typography.h3.fontSize,
            },
          }}
          align={'center'}
        >
          {t('comparePlans')}
        </Box>
      </Box>
      <Box>
        <TableContainer component={Paper} elevation={0}>
          <Table aria-label="caption table" sx={{ minWidth: 600 }}>
            {/* <caption>
              Compare the plans and choose the one which works for you the best.
            </caption> */}
            <TableHead>
              <TableRow>
                <TableCell>{t('features')}</TableCell>
                {pricing.map((item, i) => (
                  <TableCell align="center" key={i}>
                    <Typography
                      sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}
                    >
                      {item.title}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.id}>
                  <TableCell component="th" scope="row">
                    {feature.title}
                    <Typography variant="caption" display="block">
                      {feature.info}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      {pricing[0].features.indexOf(feature.id) !== -1 ? (
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      {pricing[1].features.indexOf(feature.id) !== -1 ? (
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box display={'flex'} justifyContent={'center'}>
                      {pricing[2].features.indexOf(feature.id) !== -1 ? (
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                {pricing.map((item, i) => (
                  <TableCell align="center" key={i}>
                    <Button
                      size={'large'}
                      href={process.env.NEXT_PUBLIC_SIGN_UP_URL}
                      target={'_blank'}
                      variant={item.isHighlighted ? 'contained' : 'outlined'}
                    >
                      {item.btnText}
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PricingCompareTable;
