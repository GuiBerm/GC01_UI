# AdditionalInfoManagementApi.ReviewsApi

All URIs are relative to *https://myapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNumericReviewForContent**](ReviewsApi.md#addNumericReviewForContent) | **POST** /contents/{content_id}/reviews/users/{user_id}/profiles/{profile_id} | Add a numeric review for content by user and profile
[**deleteNumericReviewForContent**](ReviewsApi.md#deleteNumericReviewForContent) | **DELETE** /contents/{content_id}/reviews/users/{user_id}/profiles/{profile_id} | Delete a specific review for content by user and profile
[**getNumericReviewForContentByUserAndProfile**](ReviewsApi.md#getNumericReviewForContentByUserAndProfile) | **GET** /contents/{content_id}/reviews/users/{user_id}/profiles/{profile_id} | Get a specific review for content by user and profile
[**getNumericReviewsByUser**](ReviewsApi.md#getNumericReviewsByUser) | **GET** /users/{user_id}/reviews | Get reviews by user
[**getNumericReviewsForContent**](ReviewsApi.md#getNumericReviewsForContent) | **GET** /contents/{content_id}/reviews | Get numeric reviews for specific content
[**updateNumericReviewForContentByUserAndProfile**](ReviewsApi.md#updateNumericReviewForContentByUserAndProfile) | **PUT** /contents/{content_id}/reviews/users/{user_id}/profiles/{profile_id} | Update a specific review for content by user and profile

<a name="addNumericReviewForContent"></a>
# **addNumericReviewForContent**
> SuccessResponse addNumericReviewForContent(body, contentId, userId, profileId)

Add a numeric review for content by user and profile

Submit a numeric review for a specific content by a user and profile.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ReviewsApi();
let body = new AdditionalInfoManagementApi.ReviewRequest(); // ReviewRequest | The review data
let contentId = 56; // Number | The ID of the content
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile

apiInstance.addNumericReviewForContent(body, contentId, userId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReviewRequest**](ReviewRequest.md)| The review data | 
 **contentId** | **Number**| The ID of the content | 
 **userId** | **Number**| The ID of the user | 
 **profileId** | **Number**| The ID of the profile | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNumericReviewForContent"></a>
# **deleteNumericReviewForContent**
> SuccessResponse deleteNumericReviewForContent(contentId, userId, profileId)

Delete a specific review for content by user and profile

Delete a specific numeric review for a given content by a user and profile.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ReviewsApi();
let contentId = 56; // Number | The ID of the content
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile

apiInstance.deleteNumericReviewForContent(contentId, userId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Number**| The ID of the content | 
 **userId** | **Number**| The ID of the user | 
 **profileId** | **Number**| The ID of the profile | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNumericReviewForContentByUserAndProfile"></a>
# **getNumericReviewForContentByUserAndProfile**
> ReviewResponse getNumericReviewForContentByUserAndProfile(contentId, userId, profileId)

Get a specific review for content by user and profile

Retrieve a specific numeric review made by a user for a given content and profile.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ReviewsApi();
let contentId = 56; // Number | The ID of the content
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile

apiInstance.getNumericReviewForContentByUserAndProfile(contentId, userId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Number**| The ID of the content | 
 **userId** | **Number**| The ID of the user | 
 **profileId** | **Number**| The ID of the profile | 

### Return type

[**ReviewResponse**](ReviewResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNumericReviewsByUser"></a>
# **getNumericReviewsByUser**
> ReviewsResponse getNumericReviewsByUser(userId)

Get reviews by user

Retrieve all numeric reviews made by a specific user.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ReviewsApi();
let userId = 56; // Number | The ID of the user

apiInstance.getNumericReviewsByUser(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of the user | 

### Return type

[**ReviewsResponse**](ReviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNumericReviewsForContent"></a>
# **getNumericReviewsForContent**
> ReviewsResponse getNumericReviewsForContent(contentId)

Get numeric reviews for specific content

Retrieve all numeric reviews (user ID and rating) made for a specific content.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ReviewsApi();
let contentId = 56; // Number | The ID of the content

apiInstance.getNumericReviewsForContent(contentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | **Number**| The ID of the content | 

### Return type

[**ReviewsResponse**](ReviewsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNumericReviewForContentByUserAndProfile"></a>
# **updateNumericReviewForContentByUserAndProfile**
> SuccessResponse updateNumericReviewForContentByUserAndProfile(body, contentId, userId, profileId)

Update a specific review for content by user and profile

Update an existing numeric review for a given content, user, and profile.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ReviewsApi();
let body = new AdditionalInfoManagementApi.UpdateReviewRequest(); // UpdateReviewRequest | The updated review data
let contentId = 56; // Number | The ID of the content
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile

apiInstance.updateNumericReviewForContentByUserAndProfile(body, contentId, userId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateReviewRequest**](UpdateReviewRequest.md)| The updated review data | 
 **contentId** | **Number**| The ID of the content | 
 **userId** | **Number**| The ID of the user | 
 **profileId** | **Number**| The ID of the profile | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

