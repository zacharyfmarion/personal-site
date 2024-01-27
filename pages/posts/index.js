import * as React from 'react';
import Layout from '@/components/Layout';
import { posts } from './posts';

const orderedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Home() {
  return (
    <Layout
      title="Blog"
      subtitle="Thoughts, code, & ideas"
      posts={orderedPosts}
    />
  );
}
