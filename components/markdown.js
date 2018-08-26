import createComponents from '@rebass/markdown';
import styled from 'styled-components';
import { Flex } from 'rebass';
import Highlight, { defaultProps } from 'prism-react-renderer';

const fontSize = 22;

/**
 * Get rid of the first line, which has the language, and return the langauge
 * with the processed code
 */
const processCode = children => {
  const firstLine = children.split('\n')[0];
  let language, code;
  if (firstLine && typeof firstLine === 'string') {
    language = firstLine ? firstLine.trim().substring(2) : 'python';
    code = children
      .split('\n')
      .filter((line, i) => i !== 0)
      .join('\n');
  } else {
    language = 'python';
    code = children;
  }
  return { code, language };
};

const Code = ({ children }) => {
  const { code, language } = processCode(children);
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <table className={className}>
          <tbody>
            {tokens.map((line, i) => (
              <tr {...getLineProps({ line, key: i })}>
                <LineNumber data-line-number={i} />
                <td>
                  {line.map((token, key) => {
                    const { className, children } = getTokenProps({
                      token,
                      key,
                    });
                    return <Token className={className}>{children}</Token>;
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Highlight>
  );
};

const Token = styled.span`
  &.plain,
  &.punctuation {
    color: #24292e;
  }
  &.keyword,
  &.operator {
    color: #d73a49;
  }
  &.class-name,
  &.function {
    color: #6f42c1;
  }
  &.string,
  &.triple-quoted-string {
    color: #2aa198;
  }
  &.builtin,
  &.number {
    color: #005cc5;
  }
`;

const LineNumber = styled.td`
  padding: 1px 10px !important;
  color: rgba(27, 31, 35, 0.3);

  &::before {
    content: attr(data-line-number);
  }
`;

const InlineCode = styled.code`
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  white-space: pre;
`;

const components = createComponents({
  p: { fontSize },
  li: { fontSize, my: 3 },
});

export default {
  ...components,
  code: Code,
  inlineCode: InlineCode,
};
