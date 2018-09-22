import * as React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

import { Menu, Banner, Section, EmailForm } from '../components/Home';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Timeline, Event } from '../components/Timeline';
import ModalTrigger from '../components/ModalTrigger';
import Modal from '../components/Modal';

import projects from '../constants/projects';
import experiences from '../constants/experiences';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper flexDirection="column">
        <Menu />
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
            <ModalTrigger
              key={project.title}
              modal={
                <Modal
                  {...project}
                  footerContent={
                    <Flex>
                      <FooterLink href={project.demoLink}>Demo</FooterLink>
                      <FooterLink href={project.sourceCodeLink}>
                        Source
                      </FooterLink>
                    </Flex>
                  }
                />
              }
            >
              <Card {...project}>Click to learn more</Card>
            </ModalTrigger>
          ))}
        </Section>
        <EmailForm id="contact" />
        <Footer author="Zachary Marion" dark />
      </HomeWrapper>
    );
  }
}

const FooterLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-left: 10px;
`;

const HomeWrapper = styled(Flex)``;

export default Home;
