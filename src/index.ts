import RestApi from './restapi';
import { where } from './util/query';
import ref from './util/ref';

const createClient: (x: any) => RestApi = (options: any) => new RestApi(options);
const nodeDebug = process.env.NODE_DEBUG || '';
const debug = nodeDebug !== '' && /rally/.test(nodeDebug);

export const rally = {
  createClient,
  debug,
  util: {
    query: {
      where
    },
    ref
  }
};
