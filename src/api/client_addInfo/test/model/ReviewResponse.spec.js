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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdditionalInfoManagementApi);
  }
}(this, function(expect, AdditionalInfoManagementApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ReviewResponse', function() {
      beforeEach(function() {
        instance = new AdditionalInfoManagementApi.ReviewResponse();
      });

      it('should create an instance of ReviewResponse', function() {
        // TODO: update the code to test ReviewResponse
        expect(instance).to.be.a(AdditionalInfoManagementApi.ReviewResponse);
      });

      it('should have the property contentId (base name: "content_id")', function() {
        // TODO: update the code to test the property contentId
        expect(instance).to.have.property('contentId');
        // expect(instance.contentId).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "user_id")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property profileId (base name: "profile_id")', function() {
        // TODO: update the code to test the property profileId
        expect(instance).to.have.property('profileId');
        // expect(instance.profileId).to.be(expectedValueLiteral);
      });

    });
  });

}));
