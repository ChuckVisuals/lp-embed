const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;
const postcss = require("rollup-plugin-postcss");
const terser = require("rollup-plugin-terser").terser;
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const image = require('@rollup/plugin-image');
const json = require('@rollup/plugin-json');
const preserveDirectives = require('rollup-plugin-preserve-directives').default;
const useClient = require("rollup-plugin-use-client").default;
const packageJson = require("./package.json");


module.exports = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                preserveModules: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
                preserveModules: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            preserveDirectives(),
            terser(),
            image(),
            json()
        ],
    },
    {
        input: "dist/esm/pages/EmbedPage.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts(), useClient()],
        external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports 
    },
]