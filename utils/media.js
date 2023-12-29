import { css } from 'styled-components';
import theme from '@/constants/theme';

const [mobile, tablet, desktop, giant] = theme.breakpoints;
const breakpoints = { mobile, tablet, desktop, giant };

// Iterate through the sizes and create a media template
export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
