import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

// Posts
import {
  welcomeMeta,
  minimaxMeta,
  reactSvgTreeMeta,
  minimaxContinued,
} from './posts';

const Home = () => {
  return (
    <Layout>
      <PostPreview {...minimaxContinued} />
      <PostPreview {...reactSvgTreeMeta} />
      <PostPreview {...minimaxMeta} />
      <PostPreview {...welcomeMeta} />
    </Layout>
  );
};

export default Home;
