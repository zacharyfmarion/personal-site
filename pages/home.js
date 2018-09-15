import * as React from 'react';
import { Flex } from 'rebass';
import { Banner, Section } from 'components/Home';
import Footer from 'components/Footer';
import Card from 'components/Card';

import projects from 'constants/projects';

class Home extends React.Component {
  render() {
    return (
      <Flex flexDirection="column">
        <Banner />
        <Section title="About">
          Hey there! I'm a recent CS graduate with a love for web development. I
          am also becoming increasingly interested in machine learning and in my
          free time I mess around in Keras and Tensorflow. I currently work as a
          frontend engineer at Coinbase. Please get in touch if you want to work
          together, or simply have any questions!
        </Section>
        <Section dark title="Experience">
          Experience here
        </Section>
        <Section title="Education">Education here</Section>
        <Section dark title="Projects">
          {projects.map(project => (
            <Card {...project} />
          ))}
        </Section>
        <Footer author="Zachary Marion" dark />
      </Flex>
    );
  }
}

export default Home;
