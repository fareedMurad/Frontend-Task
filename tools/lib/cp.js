import ncp from 'ncp';

export default (source, dest, options = {}) => new Promise((resolve, reject) => {
  ncp(source, dest, options, err => err ? reject(err) : resolve());
});
