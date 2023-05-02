import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const SPECTRAL_RUNTIME_DEPS = [
  '@stoplight/spectral-core',
  '@stoplight/spectral-formats',
  '@stoplight/spectral-functions',
  '@stoplight/spectral-runtime',
];

export default {
  input: 'src/ruleset.ts',
  output: {
    file: 'dist/ruleset.mjs',
    format: 'esm'
  },
  external: [...SPECTRAL_RUNTIME_DEPS, /* any other dep you want to resolve at runtime */],
  plugins: [
    typescript(),
    json(),
    commonjs({
      esmExternals: SPECTRAL_RUNTIME_DEPS,
    }),
    nodeResolve({ browser: true }),
    terser(),
  ],
};
