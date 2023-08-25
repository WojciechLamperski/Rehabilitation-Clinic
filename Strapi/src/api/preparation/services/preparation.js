'use strict';

/**
 * preparation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::preparation.preparation');
