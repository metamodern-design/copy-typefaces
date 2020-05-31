import path from 'path';
import fs from 'fs-extra';


const copyTypefaces = async (context, {
  dist = 'dist',
} = {}) => {
  const jsonString = await fs.readFile(
    path.resolve(context, 'package.json'),
    'utf8',
  );

  const { dependencies } = JSON.parse(jsonString);

  const typefaces = Object.keys(dependencies).filter(
    (str) => str.startsWith('typeface-'),
  );

  const dest = path.resolve(context, dist, 'files');

  const sourceDirs = typefaces.map(
    (name) => path.resolve(context, `node_modules/${name}/files`),
  );

  await fs.ensureDir(dest);

  await Promise.all(
    sourceDirs.map(
      (dir) => fs.copy(dir, dest),
    ),
  );
};


export default copyTypefaces;
