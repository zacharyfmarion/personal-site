import createComponents from '@rebass/markdown';
import { Code as RebassCode } from 'rebass';
import styled from 'styled-components';

const fontSize = 22;

const Code = styled(RebassCode)`
  font-family: monospace;
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
`;

const components = createComponents({
  p: { fontSize },
  li: { fontSize, my: 3 },
});

console.log(components);

export default {
  ...components,
  code: Code,
};
