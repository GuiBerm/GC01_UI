/*
 * Additional Info Management API
 * API for managing views, reviews, continue-watching functionality, and other additional operations for content on a streaming platform.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The ViewResponse model module.
 * @module model/ViewResponse
 * @version 1.0.0
 */
export default class ViewResponse {
  /**
   * Constructs a new <code>ViewResponse</code>.
   * @alias module:model/ViewResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ViewResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ViewResponse} obj Optional instance to populate.
   * @return {module:model/ViewResponse} The populated <code>ViewResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ViewResponse();
      if (data.hasOwnProperty('views'))
        obj.views = ApiClient.convertToType(data['views'], 'Number');
    }
    return obj;
  }
}

/**
 * Total number of views for the content
 * @member {Number} views
 */
ViewResponse.prototype.views = undefined;

