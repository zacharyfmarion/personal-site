import * as React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

import { Banner, Section, EmailForm } from '../components/Home';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Timeline, Event } from '../components/Timeline';

import projects from '../constants/projects';
import experiences from '../constants/experiences';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper flexDirection="column">
        <Banner />
        <Section title="About">
          Hey there! I'm a recent CS graduate with a love for web development. I
          am also becoming increasingly interested in machine learning and in my
          free time I mess around in Keras and Tensorflow. I currently work as a
          frontend engineer at Coinbase. Please get in touch if you want to work
          together, or simply have any questions!
        </Section>
        <Section dark title="Experience">
          <Timeline>
            {experiences.map(experience => (
              <Event key={experience.title} {...experience} />
            ))}
          </Timeline>
        </Section>
        <Section title="Education">
          I recently graduated from Duke University, with a major in Computer
          Science and minors in Mathematics and Philosophy. I was president of
          club tennis and spent most of my free time learning web development
          and working on ridiculously ambitious personal projects I never
          finished. Below are some more recent projects I actually managed to
          complete.
        </Section>
        <Section dark title="Projects">
          {projects.map(project => (
            <Card key={project.title} {...project} />
          ))}
        </Section>
        <EmailForm />
        <Footer author="Zachary Marion" dark />
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled(Flex)``;

export default Home;
