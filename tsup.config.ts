import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'bin',
  splitting: false,
  sourcemap: false,
  clean: false,
  format: ['esm', 'cjs']
});
