import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

// Posts
import MinimaxPost, { meta as minimaxMeta } from './minimax.mdx';

const Home = () => {
  return (
    <Layout>
      <PostPreview {...minimaxMeta} />
    </Layout>
  );
};

export default Home;
