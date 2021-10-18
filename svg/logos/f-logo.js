import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const FLogo = ({ width = 45, height = 70 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      viewBox="0 0 3162.1000925144112 1103.2863246512425"
    >
      <g transform="scale(8.105004625720571) translate(10, 10)">
        <defs id="SvgjsDefs1021" />
        <g
          id="SvgjsG1022"
          transform="matrix(7.825073922540404,0,0,7.825073922540404,-12.676620724649817,-39.125369612702016)"
          fill={colorPrimaryMain}
        >
          <path d="M11.12 11.12 q0.3 0 0.51 0.21 t0.21 0.51 l0 1.48 q0 0.28 -0.21 0.49 t-0.51 0.21 l-6.58 0 l0 5.12 q0 0.28 -0.2 0.49 t-0.5 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -7.3 q0 -0.3 0.21 -0.51 t0.49 -0.21 l8.8 0 z M12.02 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 1.46 q0 0.3 -0.21 0.51 t-0.49 0.21 l-9.7 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.46 q0 -0.28 0.21 -0.49 t0.49 -0.21 l9.7 0 z" />
        </g>
        {/* <g
          id="SvgjsG1023"
          transform="matrix(3.1968613768826843,0,0,3.1968613768826843,103.8031374798306,15.238347362447037)"
          fill={colorPrimaryMain}
        >
          <path d="M7.44 20 c-1.2 0 -2.3 -0.28 -3.26 -0.84 c-0.98 -0.56 -1.76 -1.36 -2.34 -2.32 c-0.56 -0.98 -0.84 -2.1 -0.84 -3.3 c0 -1.18 0.28 -2.28 0.84 -3.26 c0.58 -0.98 1.34 -1.76 2.32 -2.32 s2.08 -0.84 3.28 -0.84 c1.18 0 2.28 0.28 3.26 0.84 s1.76 1.34 2.32 2.32 c0.58 0.98 0.86 2.08 0.86 3.26 c0 1.2 -0.28 2.3 -0.86 3.28 c-0.56 0.98 -1.34 1.76 -2.32 2.34 c-0.98 0.56 -2.08 0.84 -3.26 0.84 z M7.48 17.12 c0.58 0 1.12 -0.16 1.6 -0.46 c0.5 -0.32 0.9 -0.74 1.18 -1.3 c0.3 -0.54 0.44 -1.16 0.44 -1.82 c0 -0.64 -0.14 -1.26 -0.44 -1.8 c-0.28 -0.54 -0.68 -0.96 -1.18 -1.28 c-0.48 -0.3 -1.02 -0.46 -1.6 -0.46 c-0.6 0 -1.14 0.16 -1.64 0.46 c-0.52 0.32 -0.92 0.74 -1.22 1.28 c-0.3 0.56 -0.44 1.16 -0.44 1.8 c0 0.66 0.14 1.28 0.44 1.82 c0.32 0.54 0.72 0.98 1.22 1.28 c0.5 0.32 1.04 0.48 1.64 0.48 z M23.962500000000002 20 c-1.2 0 -2.3 -0.28 -3.26 -0.84 c-0.98 -0.56 -1.76 -1.36 -2.34 -2.32 c-0.56 -0.98 -0.84 -2.1 -0.84 -3.3 c0 -1.18 0.28 -2.28 0.84 -3.26 c0.58 -0.98 1.34 -1.76 2.32 -2.32 s2.08 -0.84 3.28 -0.84 c1.18 0 2.28 0.28 3.26 0.84 s1.76 1.34 2.32 2.32 c0.58 0.98 0.86 2.08 0.86 3.26 c0 1.2 -0.28 2.3 -0.86 3.28 c-0.56 0.98 -1.34 1.76 -2.32 2.34 c-0.98 0.56 -2.08 0.84 -3.26 0.84 z M24.0025 17.12 c0.58 0 1.12 -0.16 1.6 -0.46 c0.5 -0.32 0.9 -0.74 1.18 -1.3 c0.3 -0.54 0.44 -1.16 0.44 -1.82 c0 -0.64 -0.14 -1.26 -0.44 -1.8 c-0.28 -0.54 -0.68 -0.96 -1.18 -1.28 c-0.48 -0.3 -1.02 -0.46 -1.6 -0.46 c-0.6 0 -1.14 0.16 -1.64 0.46 c-0.52 0.32 -0.92 0.74 -1.22 1.28 c-0.3 0.56 -0.44 1.16 -0.44 1.8 c0 0.66 0.14 1.28 0.44 1.82 c0.32 0.54 0.72 0.98 1.22 1.28 c0.5 0.32 1.04 0.48 1.64 0.48 z M34.505 20 c-0.16 0 -0.26 -0.12 -0.26 -0.26 l0 -11.98 c0 -0.14 0.1 -0.26 0.26 -0.26 l4.54 0 c1.2 0 2.3 0.26 3.26 0.8 c0.96 0.52 1.7 1.26 2.24 2.22 c0.52 0.94 0.8 2.02 0.8 3.22 c0 1.22 -0.28 2.3 -0.82 3.24 c-0.54 0.96 -1.3 1.7 -2.28 2.22 c-0.96 0.54 -2.08 0.8 -3.3 0.8 l-4.44 0 z M37.345000000000006 17.2 l1.76 0 c0.58 0 1.12 -0.14 1.58 -0.42 c0.46 -0.3 0.84 -0.7 1.1 -1.22 s0.4 -1.12 0.4 -1.8 c0 -0.66 -0.14 -1.28 -0.42 -1.8 c-0.28 -0.54 -0.66 -0.94 -1.14 -1.24 c-0.48 -0.28 -1.04 -0.44 -1.64 -0.44 l-1.64 0 l0 6.92 z M49.4475 20 c-0.14 0 -0.26 -0.12 -0.26 -0.26 l0 -11.98 c0 -0.14 0.12 -0.26 0.26 -0.26 l2.6 0 c0.14 0 0.26 0.12 0.26 0.26 l0 9.36 l4.5 0 c0.14 0 0.26 0.12 0.26 0.26 l0 2.36 c0 0.14 -0.12 0.26 -0.26 0.26 l-7.36 0 z M60.91 20 l0 -11.98 c0 -0.5 0.1 -0.6 0.26 -0.6 l8.76 0 c0.14 0 0.26 0.1 0.26 0.24 l0 2.26 c0 0.14 -0.12 0.26 -0.26 0.26 l-5.92 0 l0 2.08 l3.74 0 c0.14 0 0.26 0.12 0.26 0.26 l0 2.24 c0 0.14 -0.12 0.26 -0.26 0.26 l-3.74 0 l0 2.14 l5.9 0 c0.14 0 0.26 0.12 0.26 0.26 l0 2.24 c0 0.14 -0.12 0.26 -0.26 0.26 l-8.74 0 c-0.16 0 -0.26 -0.12 -0.26 0.08 z M74.0325 20 l0 -11.98 c0 -0.5 0.1 -0.6 0.26 -0.6 l8.76 0 c0.14 0 0.26 0.1 0.26 0.24 l0 2.26 c0 0.14 -0.12 0.26 -0.26 0.26 l-5.92 0 l0 2.08 l3.74 0 c0.14 0 0.26 0.12 0.26 0.26 l0 2.24 c0 0.14 -0.12 0.26 -0.26 0.26 l-3.74 0 l0 2.14 l5.9 0 c0.14 0 0.26 0.12 0.26 0.26 l0 2.24 c0 0.14 -0.12 0.26 -0.26 0.26 l-8.74 0 c-0.16 0 -0.26 -0.12 -0.26 0.08 z" />
        </g> */}
      </g>
    </svg>
  );
};

FLogo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default FLogo;
