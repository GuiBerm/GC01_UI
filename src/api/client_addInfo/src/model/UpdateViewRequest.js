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
 * The UpdateViewRequest model module.
 * @module model/UpdateViewRequest
 * @version 1.0.0
 */
export default class UpdateViewRequest {
  /**
   * Constructs a new <code>UpdateViewRequest</code>.
   * @alias module:model/UpdateViewRequest
   * @class
   * @param newViewCount {Number} The new view count value
   */
  constructor(newViewCount) {
    this.newViewCount = newViewCount;
  }

  /**
   * Constructs a <code>UpdateViewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateViewRequest} obj Optional instance to populate.
   * @return {module:model/UpdateViewRequest} The populated <code>UpdateViewRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateViewRequest();
      if (data.hasOwnProperty('new_view_count'))
        obj.newViewCount = ApiClient.convertToType(data['new_view_count'], 'Number');
    }
    return obj;
  }
}

/**
 * The new view count value
 * @member {Number} newViewCount
 */
UpdateViewRequest.prototype.newViewCount = undefined;

