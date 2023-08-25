'use strict';

/**
 * reservation-hr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reservation-hr.reservation-hr');
