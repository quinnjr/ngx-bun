import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      'index': 'src/index.ts',
      'server/index': 'src/server/index.ts',
      'prerender/index': 'src/prerender/index.ts',
    },
    format: ['cjs', 'esm'],
    // Declarations are emitted separately via `tsc -p tsconfig.build.json`
    // (see the "build" script). tsup's dts bundling goes through
    // rollup-plugin-dts, which crashes under TypeScript 7
    // ("Cannot read properties of undefined (reading
    // 'useCaseSensitiveFileNames')") because it wasn't built against the
    // TS7 compiler API. Plain `tsc` declaration-only emission has no such
    // dependency on rollup-plugin-dts and works fine with TS7.
    dts: false,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    external: [
      '@angular/core',
      '@angular/common',
      '@angular/platform-server',
      '@angular/ssr',
      'bun',
    ],
    treeshake: true,
    splitting: false,
  },
]);
