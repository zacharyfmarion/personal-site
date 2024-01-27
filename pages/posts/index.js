import * as React from 'react';
import Layout from '@/components/Layout';
import { posts } from '@/constants/posts';

export default function Home() {
  return (
    <Layout
      title="Blog"
      subtitle="Thoughts, code, & ideas"
      posts={posts}
    />
  );
}
