import datasource from './esv7.datasource.config.json';

export default {
  ...datasource,
  connector: 'esv6',
  index: 'catalog',
  version: 7,
  // defaultSize: '',
  configuration: {
    node: process.env.ELATIC_SEARCH_HOST,
    requestTimeout: process.env.ELATIC_SEARCH_REQUEST_TIMEOUT,
    pingTimeout: process.env.ELATIC_SEARCH_PING_TIMEOUT,
  },
  mappingProperties: {},
};
