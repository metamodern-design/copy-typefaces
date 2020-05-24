import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';


const plugins = [
  nodeResolve({ preferBuiltins: true }),
  commonjs(),
];


const external = [].concat(
  'path',
  Object.keys(pkg.dependencies),
);


export default [
  {
    input: 'index.js',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' },
    ],
    plugins,
    external,
  }
];
