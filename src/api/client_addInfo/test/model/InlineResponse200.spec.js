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
    describe('InlineResponse200', function() {
      beforeEach(function() {
        instance = new AdditionalInfoManagementApi.InlineResponse200();
      });

      it('should create an instance of InlineResponse200', function() {
        // TODO: update the code to test InlineResponse200
        expect(instance).to.be.a(AdditionalInfoManagementApi.InlineResponse200);
      });

      it('should have the property lastWatchedMinute (base name: "last_watched_minute")', function() {
        // TODO: update the code to test the property lastWatchedMinute
        expect(instance).to.have.property('lastWatchedMinute');
        // expect(instance.lastWatchedMinute).to.be(expectedValueLiteral);
      });

    });
  });

}));
