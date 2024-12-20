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
 * The ReviewRequest model module.
 * @module model/ReviewRequest
 * @version 1.0.0
 */
export default class ReviewRequest {
  /**
   * Constructs a new <code>ReviewRequest</code>.
   * @alias module:model/ReviewRequest
   * @class
   * @param rating {Number} Rating for the content (1 to 5 stars)
   */
  constructor(rating) {
    this.rating = rating;
  }

  /**
   * Constructs a <code>ReviewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReviewRequest} obj Optional instance to populate.
   * @return {module:model/ReviewRequest} The populated <code>ReviewRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReviewRequest();
      if (data.hasOwnProperty('rating'))
        obj.rating = ApiClient.convertToType(data['rating'], 'Number');
    }
    return obj;
  }
}

/**
 * Rating for the content (1 to 5 stars)
 * @member {Number} rating
 */
ReviewRequest.prototype.rating = undefined;

