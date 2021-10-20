import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import useTranslation from 'next-translate/useTranslation';

const PricingCards = () => {
  const theme = useTheme();
  const [pricingOption, setPricingOption] = useState('monthly');
  const { t } = useTranslation('common');
  const url = process.env.NEXT_PUBLIC_SIGN_UP_URL;
  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };
  const pricing = [
    {
      title: t('basicPlan'),
      price: {
        monthly: 50,
        annual: 50 * 12,
      },
      features: [
        {
          title: t('f5'),
          isIncluded: true,
        },
        {
          title: t('f6'),
          isIncluded: true,
        },
        {
          title: t('f4'),
          isIncluded: true,
        },
        {
          title: t('f8'),
          isIncluded: false,
        },

        {
          title: t('f1'),
          isIncluded: false,
        },
        {
          title: t('f11'),
          isIncluded: false,
        },
        {
          title: t('f12'),
          isIncluded: false,
        },
      ],
      isHighlighted: false,
      btnText: t('basicPlan'),
    },
    {
      title: t('premiumPlan'),
      price: {
        annual: 99 * 12,
        monthly: 99,
      },
      features: [
        {
          title: t('f5'),
          isIncluded: true,
        },
        {
          title: t('f6'),
          isIncluded: true,
        },
        {
          title: t('f4'),
          isIncluded: true,
        },
        {
          title: t('f8'),
          isIncluded: true,
        },

        {
          title: t('f1'),
          isIncluded: true,
        },
        {
          title: t('f11'),
          isIncluded: false,
        },
        {
          title: t('f12'),
          isIncluded: false,
        },
      ],
      isHighlighted: true,

      btnText: t('premiumPlan'),
    },
    {
      title: t('growthPlan'),
      price: {
        annual: 199 * 12,
        monthly: 199,
      },
      features: [
        {
          title: t('f5'),
          isIncluded: true,
        },
        {
          title: t('f6'),
          isIncluded: true,
        },
        {
          title: t('f4'),
          isIncluded: true,
        },
        {
          title: t('f8'),
          isIncluded: true,
        },

        {
          title: t('f1'),
          isIncluded: true,
        },
        {
          title: t('f11'),
          isIncluded: true,
        },
        {
          title: t('f12'),
          isIncluded: true,
        },
      ],
      isHighlighted: false,
      btnText: t('growthPlan'),
    },
  ];
  return (
    <Box>
      <Box marginBottom={4}>
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
          align={'center'}
        >
          {t('pickTheBestPlanForYourBusinessNeeds')}
        </Box>
        <Box
          fontWeight={700}
          marginTop={2}
          color={theme.palette.secondary.light}
          component={Typography}
          sx={{
            fontSize: {
              xs: theme.typography.subtitle1.fontSize,
              md: theme.typography.h6.fontSize,
            },
          }}
          align={'center'}
        >
          {t('twoFreeMonthsIfPaidAnnully')}
        </Box>
      </Box>
      <Box>
        <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
          <ToggleButtonGroup
            value={pricingOption}
            exclusive
            onChange={handleClick}
          >
            <ToggleButton
              value="monthly"
              size={'small'}
              sx={{
                backgroundColor:
                  pricingOption === 'monthly'
                    ? `${theme.palette.primary.light} !important`
                    : 'transparent',
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'medium',
                  color:
                    pricingOption !== 'annual'
                      ? theme.palette.common.white
                      : 'primary',
                }}
              >
                {t('monthly')}
              </Typography>
            </ToggleButton>
            <ToggleButton
              value="annual"
              size={'small'}
              sx={{
                backgroundColor:
                  pricingOption === 'annual'
                    ? `${theme.palette.primary.light} !important`
                    : 'transparent',
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'medium',
                  color:
                    pricingOption === 'annual'
                      ? theme.palette.common.white
                      : 'primary',
                }}
              >
                {t('annual')}
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Grid container spacing={4}>
          {pricing.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={Card}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
                boxShadow={item.isHighlighted ? 4 : 0}
                borderRadius={4}
              >
                <Box component={CardContent} padding={4}>
                  <Box
                    marginBottom={4}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Box
                      marginBottom={1}
                      display={'flex'}
                      width={'100%'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Typography variant={'h6'}>
                        <Box component={'span'} fontWeight={600}>
                          {item.title}
                        </Box>
                      </Typography>
                      <Box display={'flex'} alignItems={'flex-start'}>
                        <Typography variant={'subtitle1'} color={'primary'}>
                          <Box
                            component={'span'}
                            fontWeight={600}
                            marginRight={1 / 2}
                          >
                            SAR
                          </Box>
                        </Typography>
                        <Typography variant={'h4'} color={'primary'}>
                          <Box component={'span'} fontWeight={600}>
                            {pricingOption === 'annual'
                              ? item.price.annual
                              : item.price.monthly}
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant={'subtitle2'} color={'textSecondary'}>
                      {t('taxIsNotIncluded')}
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {item.features.map((feature, j) => (
                      <Grid item xs={12} key={j}>
                        <Typography
                          component={'p'}
                          align={'center'}
                          style={{
                            textDecoration: !feature.isIncluded
                              ? 'line-through'
                              : 'none',
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box flexGrow={1} />
                <Box
                  component={CardActions}
                  justifyContent={'center'}
                  padding={4}
                >
                  <Button
                    size={'large'}
                    variant={item.isHighlighted ? 'contained' : 'outlined'}
                    href={url}
                    target="_blank"
                  >
                    {item.btnText}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingCards;
