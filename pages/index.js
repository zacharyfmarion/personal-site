import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

// Posts
import { welcomeMeta, minimaxMeta } from './posts';

const Home = () => {
  return (
    <Layout>
      <PostPreview {...minimaxMeta} />
      <PostPreview {...welcomeMeta} />
    </Layout>
  );
};

export default Home;
