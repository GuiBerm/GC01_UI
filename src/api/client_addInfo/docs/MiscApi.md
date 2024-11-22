# AdditionalInfoManagementApi.MiscApi

All URIs are relative to *https://myapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContentLanguages**](MiscApi.md#getContentLanguages) | **GET** /contents/{content_id}/languages | Get available languages for content
[**getRecommendationsForUser**](MiscApi.md#getRecommendationsForUser) | **GET** /users/{user_id}/profiles/{profile_id}/recommendations | Get recommendations for a profile

<a name="getContentLanguages"></a>
# **getContentLanguages**
> InlineResponse2001 getContentLanguages(contentId)

Get available languages for content

Retrieve a list of available languages for a specific content.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.MiscApi();
let contentId = 56; // Number | The ID of the content

apiInstance.getContentLanguages(contentId, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecommendationsForUser"></a>
# **getRecommendationsForUser**
> InlineResponse2002 getRecommendationsForUser(userId, profileId)

Get recommendations for a profile

Retrieve content recommendations based on a user&#x27;s viewing history.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.MiscApi();
let userId = 56; // Number | The ID of the user
let profileId = 56; // Number | The ID of the profile

apiInstance.getRecommendationsForUser(userId, profileId, (error, data, response) => {
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

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

