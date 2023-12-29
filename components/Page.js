import * as React from 'react';
import { Flex, Text, Heading, Container } from 'rebass';
import styled from 'styled-components';

import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import media from '@/utils/media';

class Page extends React.Component {
  render() {
    const { title, baseLink, link, children } = this.props;
    return (
      <DemoWrapper flexDirection="column">
        <Menu dark />
        <SubMenu>
          <SubMenuContainer p={3}>
            <span>
              <Link href={baseLink} color="black">
                Demos
              </Link>{' '}
              <LinkDivider>/</LinkDivider>
              <Link href={link} color="black">
                {title}
              </Link>
            </span>
          </SubMenuContainer>
        </SubMenu>
        <Content>{children}</Content>
        <Footer author="Zachary Marion" dark />
      </DemoWrapper>
    );
  }
}

const LinkDivider = styled.span`
  padding: 0 8px;
`;

const SubMenu = styled(Flex)`
  background: #f4f8fb;
  margin-bottom: 20px;
`;

const SubMenuContainer = styled(Container)`
  text-align: left;
  width: 100%;
`;

const PageDescription = styled(Text)`
  width: 100%;
`;

const PageTitle = styled(Heading)`
  width: 100%;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  flex: 1 1 auto;
  width: 100%;
`;

const DemoWrapper = styled(Flex)`
  padding-top: 60px;
  min-height: 100vh;
`;

export default Page;
