import { env } from './env';
import axios, { AxiosRequestConfig } from 'axios';

const { PRO_PUB_KEY } = env;

const addProPubKey = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  const headers = config.headers || {};
  const headersWithKey = {
    ...headers,
    'X-API-Key': PRO_PUB_KEY
  };
  return {
    ...config,
    headers: headersWithKey
  };
}

export const callProPub = async (
  config: AxiosRequestConfig
): Promise<any> => {
  const configWithKey = addProPubKey(config);
  try {
    const resp = await axios(configWithKey);
    if (resp && resp.data && resp.data.results) {
      return resp.data.results;
    }
    throw new Error('Could not fetch data from Pro Publica');
  } catch (error) {
    throw error;
  }
};
