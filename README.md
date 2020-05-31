# @metamodern/copy-typefaces

*Automates copying font files from [typeface-\* packages](https://github.com/KyleAMathews/typefaces) in your dependencies*

## Install

```sh
npm i @metamodern/copy-typefaces

```

## Usage

This package is released as an ES module only. Minimum Node.js version is 12 (latest LTS as of release date). CommonJS `require()` is not supported.

```js
import copyTypefaces from '@metamodern/copy-typefaces';

const onRender = async () => {
  await copyTypefaces(process.cwd(), { dist = 'public' });
}; 

```

## API

The module's default export is an async function with the following parameters:

```ts
async function(context: string, { dist = 'dist' } = {}): Promise<void>

```

#### Required

- __context__: path to the project's root directory containing the relevant *package.json* and *node_modules* (will be resolved as described [here](https://nodejs.org/api/fs.html#fs_file_paths))

#### Options

- __dist__: name of (or path) to the public directory where the files will be copied (will be resolved relative to *context*)

## Notes

The exported function only copies the relevant font files to *context/dist*. You must also import each typeface's *index.css* to load the `@font-face` rules into your bundle. 
