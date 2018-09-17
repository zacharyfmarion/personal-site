import * as React from 'react';
import Layout from 'components/Layout';

// posts
import { meta as welcomeMeta } from './welcome.mdx';
import { meta as minimaxMeta } from './minimax.mdx';
import { meta as reactSvgTreeMeta } from './react-svg-tree.mdx';
import { meta as minimaxContinued } from './minimax-continued.mdx';

class Home extends React.Component {
  get orderedPosts() {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  render() {
    return <Layout posts={this.orderedPosts} />;
  }
}

export const posts = [
  minimaxContinued,
  reactSvgTreeMeta,
  minimaxMeta,
  welcomeMeta,
].filter(post => !!post);

export default Home;
