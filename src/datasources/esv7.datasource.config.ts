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
  mappingProperties: {
    docType: {
      type: 'keyword',
    },
    id: {
      type: 'keyword',
      fields: {
        keyword: {
          type: 'keyword',
          ignore_above: 256,
        },
      },
    },
    name: {
      type: 'text',
      fields: {
        keyword: {
          type: 'keyword',
          ignore_above: 256,
        },
      },
    },
    is_active: {
      type: 'boolean',
    },
    created_at: {
      type: 'date',
    },
    update_at: {
      type: 'date',
    },
  },
};
