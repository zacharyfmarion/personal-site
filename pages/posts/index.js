import { meta as welcomeMeta } from './welcome.mdx';
import { meta as minimaxMeta } from './minimax.mdx';
import { meta as reactSvgTreeMeta } from './react-svg-tree.mdx';
// import { meta as minimaxContinued } from './minimax-continued.mdx';

export default [reactSvgTreeMeta, minimaxMeta, welcomeMeta].filter(
  post => !!post,
);
