import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
import path from "path";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: production,
    format: "iife",
    name: "app",
    file: "dist/bundle.js"
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: css => {
        css.write("dist/bundle.css");
      }
    }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"]
    }),
    commonjs(),

    // start dev server in development mode
    !production &&
      serve({
        open: true,
        port: 5000,
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true
      }),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("dist"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
