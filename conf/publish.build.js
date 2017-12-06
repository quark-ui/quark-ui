const rollup = require('rollup');
const fs = require('fs');
const path = require('path');
const upperFirst = require('lodash/upperFirst');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const postcssPlugin = require('rollup-plugin-postcss');
const cssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssModules = require('postcss-modules');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');
const postcss = require('postcss');

// theme
const DEFAULT_THEME = require('../src/styles/theme');
const ORANGE_THEME = require('../src/styles/orange');
const RED_THEME = require('../src/styles/red');

// css module name pattern
const CSSMODULE_NAME_PATTERN = '[hash:base64:7]';

const themes = {
  default: DEFAULT_THEME,
  orange: ORANGE_THEME,
  red: RED_THEME,
};

// get cssnext config
const getCssnextConfig = (theme = 'default') => ({
  features: {
    browsers: [
      '> 1%',
      'last 2 versions',
      'ie >= 8',
    ],
    customProperties: {
      variables: themes[theme],
    },
  },
});

const cwd = process.cwd();
const cssExportMap = {};
const componentList = fs.readdirSync(path.join(cwd, './src/components'));

const generateCSS = (name, theme) => {
  const src = name ? `./src/components/${name}/${upperFirst(name)}.css` : './src/index.css';
  let dest;
  if (theme) {
    dest = name ? `./lib/${name}.${theme}.css` : `./lib/index.${theme}.css`;
  } else {
    dest = name ? `./lib/${name}.css` : './lib/index.css';
  }
  const cssPlugins = [
    cssnext(getCssnextConfig(theme)),
    postcssModules({
      generateScopedName: CSSMODULE_NAME_PATTERN,
    }),
  ];
  fs.readFile(src, (err, data) => {
    postcss(cssPlugins)
      .use(postcssImport({
        plugins: cssPlugins,
      }))
      .process(data, {
        from: src,
        to: dest,
      })
      .then((res) => {
        fs.writeFile(dest, res.css);
      })
      .catch((e) => {
        console.error(`generateCSS failed with name: ${name}, theme: ${theme}`, e);
      });
  });
};

const external = [
  'react',
  'react-dom',
  'moment',
  'rc-',
];
const plugins = [
  resolve({
    jsnext: true,
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  postcssPlugin({
    plugins: [
      cssnext(getCssnextConfig()),
      postcssModules({
        generateScopedName: CSSMODULE_NAME_PATTERN,
        getJSON(id, exportTokens) {
          cssExportMap[id] = exportTokens;
        },
      }),
    ],
    getExport(id) {
      return cssExportMap[id];
    },
    extract: true,
  }),
  babel({
    exclude: 'node_modules/**',
    presets: [
      [
        'env',
        {
          modules: false,
        },
      ],
      'react',
      'stage-1',
    ],
    plugins: [
      'external-helpers',
      'transform-decorators-legacy',
      'inline-react-svg',
    ],
    babelrc: false,
  }),
];


const build = (name) => {
  // pack js
  rollup.rollup({
    entry: `./src/components/${name}/index.js`,
    external(id) {
      return external.concat(['lodash', 'prop-types']).some(n => id.startsWith(n));
    },
    // external: external.concat(['lodash', 'prop-types']),
    plugins,
    legacy: true,
  }).then((bundle) => {
    bundle.write({
      format: 'cjs',
      dest: `./lib/${name}.js`,
      sourceMap: true,
    });

    bundle.write({
      format: 'es',
      dest: `./es/${name}.js`,
      sourceMap: true,
    });
  }).catch(err => console.error(err));

  generateCSS(name, 'orange');
  generateCSS(name, 'red');
};

// build separate component
componentList.forEach(build);

// build one big package
rollup.rollup({
  entry: './src/index.js',
  // external,
  external(id) {
    return external.some(n => id.startsWith(n));
  },
  plugins: plugins.concat([
    uglify(),
  ]),
  legacy: true,
}).then((bundle) => {
  bundle.write({
    format: 'umd',
    moduleName: 'QuarkUI',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      moment: 'moment',
    },
    dest: './lib/index.js',
    sourceMap: true,
  });
}).catch(err => console.error(err));

rollup.rollup({
  entry: './src/index.js',
  external,
  plugins,
  legacy: true,
}).then((bundle) => {
  bundle.write({
    format: 'es',
    dest: './es/index.js',
    sourceMap: true,
  });
}).catch(err => console.error(err));

generateCSS(false);
generateCSS(false, 'orange');
generateCSS(false, 'red');
