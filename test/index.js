import path from 'path';
import test from 'ava';
import fs from 'fs-extra';
import del from 'del';
import copyTypefaces from '../dist/esm.js';


const context = path.resolve(process.cwd(), 'test/fixtures');
const dist = 'public';

const expected = [
  '1a.txt',
  '1b.txt',
  '2a.txt',
  '2b.txt',
];


test.before(async (t) => {
  await copyTypefaces(context, { dist });
});

/*
test.after.always(async () => {
  await del(path.resolve(context, dist));
});
*/

test('All files were copied', async (t) => {
  const results = await Promise.all(
    expected.map(
      (name) => fs.pathExists(path.resolve(context, dist, 'files', name)),
    ),
  );
 
  t.true(
    results.every((x) => x),
  );
});
