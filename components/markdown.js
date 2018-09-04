import createComponents from '@rebass/markdown';
import styled from 'styled-components';
import { Flex, Image } from 'rebass';
import Highlight, { defaultProps } from 'prism-react-renderer';

const fontSize = 22;

/**
 * Get rid of the first line, which has the language, and return the langauge
 * with the processed code
 */
const processCode = children => {
  const firstLine = children.split('\n')[0];
  const language = firstLine
    ? firstLine
        .trim()
        .substring(2)
        .trim()
    : 'python';
  const codeArray = children.split('\n');
  const code = codeArray
    .filter((line, i) => i !== 0 && i !== codeArray.length - 1)
    .join('\n');
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
  &.comment {
    color: #657b83;
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
  font-size: 14px;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  word-break: break-word;
  word-wrap: break-word;
`;

const components = createComponents({
  p: { fontSize },
  li: { fontSize, my: 3 },
});

const BlockQuote = styled(components.blockquote)`
  border-left: 3px solid rgba(0, 0, 0, 0.84);
  padding-left: 20px;
  margin-left: -23px;
  padding-bottom: 2px;

  & > p {
    margin: 0;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Frank Ruhl Libre', serif;
  margin: 0px;
  margin-bottom: 30px;
  font-size: 22px;
  line-height: 1.5;
`;

export const HorizontalRule = styled.hr`
  text-align: center;
  margin-top: -15px;
  margin-bottom: 25px;
  border: 0;
  font-weight: 400;
  font-size: 50px;
  letter-spacing: 0.6em;

  &::before {
    content: '...';
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Link = components.a;

const MarkdownImage = styled(Image)`
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

export default {
  ...components,
  code: Code,
  inlineCode: InlineCode,
  blockquote: BlockQuote,
  p: Paragraph,
  hr: HorizontalRule,
  img: MarkdownImage,
};
