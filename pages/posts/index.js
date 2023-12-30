import * as React from 'react';
import Layout from '@/components/Layout';

// posts
import { metadata as welcomeMeta } from './welcome.mdx';
import { metadata as minimaxMeta } from './minimax.mdx';
import { metadata as reactSvgTreeMeta } from './react-svg-tree.mdx';
// import { metadata as minimaxContinued } from './minimax-continued.mdx';

export const posts = [
  // minimaxContinued,
  reactSvgTreeMeta,
  minimaxMeta,
  welcomeMeta,
].filter(post => !!post);

class Home extends React.Component {
  get orderedPosts() {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  render() {
    return (
      <Layout
        title="Blog"
        subtitle="Thoughts, code, & ideas"
        posts={this.orderedPosts}
      />
    );
  }
}

export default Home;
