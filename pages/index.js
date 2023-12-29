import * as React from 'react';
import { Flex } from 'rebass';

import { Banner, Section } from '@/components/Home';
import EmailForm from '@/components/EmailForm';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

class Home extends React.Component {
  render() {
    return (
      <Flex flexDirection="column">
        <Menu />
        <Banner />
        <Section title="About">
          Hey there! I'm a staff software engineer currently working at{' '}
          <a href="https://www.coinbase.com">Coinbase</a>, where I focus on react
          native performance. Please get in touch if you want to work together, 
          or simply want to chat!
        </Section>
        <EmailForm id="contact" />
        <Footer author="Zachary Marion" dark />
      </Flex>
    );
  }
}

export default Home;
