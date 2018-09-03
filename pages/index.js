import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

// Posts
import { welcomeMeta, minimaxMeta, reactSvgTreeMeta } from './posts';

const Home = () => {
  return (
    <Layout>
      <PostPreview {...reactSvgTreeMeta} />
      <PostPreview {...minimaxMeta} />
      <PostPreview {...welcomeMeta} />
    </Layout>
  );
};

export default Home;
