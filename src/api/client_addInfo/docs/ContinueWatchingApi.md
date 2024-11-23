# AdditionalInfoManagementApi.ContinueWatchingApi

All URIs are relative to *https://myapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContinueWatching**](ContinueWatchingApi.md#addContinueWatching) | **POST** /users/{user_id}/profiles/{profile_id}/continue-watching/{content_id} | Add continue watching entry
[**deleteContinueWatching**](ContinueWatchingApi.md#deleteContinueWatching) | **DELETE** /users/{user_id}/profiles/{profile_id}/continue-watching/{content_id} | Delete continue watching entry
[**getContinueWatching**](ContinueWatchingApi.md#getContinueWatching) | **GET** /users/{user_id}/profiles/{profile_id}/continue-watching/{content_id} | Get last watched minute for content
[**updateContinueWatching**](ContinueWatchingApi.md#updateContinueWatching) | **PUT** /users/{user_id}/profiles/{profile_id}/continue-watching/{content_id} | Update continue watching entry

<a name="addContinueWatching"></a>
# **addContinueWatching**
> SuccessResponse addContinueWatching(body, userId, profileId, contentId)

Add continue watching entry

Add a new entry for a user&#x27;s last watched minute for a specific content.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ContinueWatchingApi();
let body = new AdditionalInfoManagementApi.ContinuewatchingContentIdBody1(); // ContinuewatchingContentIdBody1 | Data for the continue watching entry
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile
let contentId = 56; // Number | The ID of the content

apiInstance.addContinueWatching(body, userId, profileId, contentId, (error, data, response) => {
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
 **body** | [**ContinuewatchingContentIdBody1**](ContinuewatchingContentIdBody1.md)| Data for the continue watching entry | 
 **userId** | **Number**| The ID of the user | 
 **profileId** | **Number**| The ID of the profile | 
 **contentId** | **Number**| The ID of the content | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContinueWatching"></a>
# **deleteContinueWatching**
> SuccessResponse deleteContinueWatching(userId, profileId, contentId)

Delete continue watching entry

Delete a continue watching entry for a specific content by a user and profile.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ContinueWatchingApi();
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile
let contentId = 56; // Number | The ID of the content

apiInstance.deleteContinueWatching(userId, profileId, contentId, (error, data, response) => {
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
 **profileId** | **Number**| The ID of the profile | 
 **contentId** | **Number**| The ID of the content | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContinueWatching"></a>
# **getContinueWatching**
> InlineResponse200 getContinueWatching(userId, profileId, contentId)

Get last watched minute for content

Retrieve the last watched minute for a specific content by a user and profile.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ContinueWatchingApi();
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile
let contentId = 56; // Number | The ID of the content

apiInstance.getContinueWatching(userId, profileId, contentId, (error, data, response) => {
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
 **profileId** | **Number**| The ID of the profile | 
 **contentId** | **Number**| The ID of the content | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateContinueWatching"></a>
# **updateContinueWatching**
> SuccessResponse updateContinueWatching(body, userId, profileId, contentId)

Update continue watching entry

Update the last watched minute for a user&#x27;s content.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ContinueWatchingApi();
let body = new AdditionalInfoManagementApi.ContinuewatchingContentIdBody(); // ContinuewatchingContentIdBody | Updated continue watching data
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile
let contentId = 56; // Number | The ID of the content

apiInstance.updateContinueWatching(body, userId, profileId, contentId, (error, data, response) => {
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
 **body** | [**ContinuewatchingContentIdBody**](ContinuewatchingContentIdBody.md)| Updated continue watching data | 
 **userId** | **Number**| The ID of the user | 
 **profileId** | **Number**| The ID of the profile | 
 **contentId** | **Number**| The ID of the content | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

