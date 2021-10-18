import React, { ReactElement } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';
interface Props {
  btn?: ButtonProps;
  text: string;
  href: string;
  locale?: string;
  replace?: boolean;
}

const ButtonLink = (props: Props): ReactElement => {
  const { btn, text, href, locale, replace } = props;
  return (
    <Button {...btn}>
      <Link href={href} locale={locale} replace={replace}>
        {text}
      </Link>
    </Button>
  );
};

export default ButtonLink;
