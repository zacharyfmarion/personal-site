import * as React from 'react';
import Layout from '../components/Layout';
import posts from './posts';

class Home extends React.Component {
  get orderedPosts() {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  render() {
    return <Layout posts={this.orderedPosts} />;
  }
}

export default Home;
