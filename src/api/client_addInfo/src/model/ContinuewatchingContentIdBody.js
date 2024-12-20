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
 * The ContinuewatchingContentIdBody model module.
 * @module model/ContinuewatchingContentIdBody
 * @version 1.0.0
 */
export default class ContinuewatchingContentIdBody {
  /**
   * Constructs a new <code>ContinuewatchingContentIdBody</code>.
   * @alias module:model/ContinuewatchingContentIdBody
   * @class
   * @param newLastWatchedMinute {Number} The new minute where the user stopped watching
   */
  constructor(newLastWatchedMinute) {
    this.newLastWatchedMinute = newLastWatchedMinute;
  }

  /**
   * Constructs a <code>ContinuewatchingContentIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContinuewatchingContentIdBody} obj Optional instance to populate.
   * @return {module:model/ContinuewatchingContentIdBody} The populated <code>ContinuewatchingContentIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ContinuewatchingContentIdBody();
      if (data.hasOwnProperty('new_last_watched_minute'))
        obj.newLastWatchedMinute = ApiClient.convertToType(data['new_last_watched_minute'], 'Number');
    }
    return obj;
  }
}

/**
 * The new minute where the user stopped watching
 * @member {Number} newLastWatchedMinute
 */
ContinuewatchingContentIdBody.prototype.newLastWatchedMinute = undefined;

