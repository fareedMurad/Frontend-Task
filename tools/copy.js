import del from 'del';
import cp from './lib/cp';
import task from './lib/task';

export default task(async function copy() {
  // first delete all files in dist folder
  await del(['dist/*', '!dist/.git'], { dot: true });
  // then copy all static assets from public folder
  await cp('public', 'dist', {filter: /^(?!.*\.(txt)$).*$/});
});
