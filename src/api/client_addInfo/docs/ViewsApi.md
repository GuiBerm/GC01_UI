# AdditionalInfoManagementApi.ViewsApi

All URIs are relative to *https://myapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContentView**](ViewsApi.md#addContentView) | **POST** /contents/{content_id}/views | Add a view entry for content
[**deleteContentView**](ViewsApi.md#deleteContentView) | **DELETE** /contents/{content_id}/views | Delete view entry for content by user
[**getContentViews**](ViewsApi.md#getContentViews) | **GET** /contents/{content_id}/views | Get number of views for content
[**updateContentView**](ViewsApi.md#updateContentView) | **PUT** /contents/{content_id}/views | Update view count for specific content and user

<a name="addContentView"></a>
# **addContentView**
> SuccessResponse addContentView(body, contentId)

Add a view entry for content

Add a new view entry for a specific content.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ViewsApi();
let body = new AdditionalInfoManagementApi.ViewRequest(); // ViewRequest | Data for the new view entry
let contentId = 56; // Number | The ID of the content

apiInstance.addContentView(body, contentId, (error, data, response) => {
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
 **body** | [**ViewRequest**](ViewRequest.md)| Data for the new view entry | 
 **contentId** | **Number**| The ID of the content | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContentView"></a>
# **deleteContentView**
> SuccessResponse deleteContentView(contentId)

Delete view entry for content by user

Delete a view entry for a specific content and user.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ViewsApi();
let contentId = 56; // Number | The ID of the content

apiInstance.deleteContentView(contentId, (error, data, response) => {
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

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContentViews"></a>
# **getContentViews**
> ViewResponse getContentViews(contentId)

Get number of views for content

Retrieve the number of views for a specific content.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ViewsApi();
let contentId = 56; // Number | The ID of the content

apiInstance.getContentViews(contentId, (error, data, response) => {
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

[**ViewResponse**](ViewResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateContentView"></a>
# **updateContentView**
> SuccessResponse updateContentView(body, contentId)

Update view count for specific content and user

Update the view count for a specific content by a user.

### Example
```javascript
import {AdditionalInfoManagementApi} from 'additional_info_management_api';

let apiInstance = new AdditionalInfoManagementApi.ViewsApi();
let body = new AdditionalInfoManagementApi.UpdateViewRequest(); // UpdateViewRequest | Updated view count
let contentId = 56; // Number | The ID of the content

apiInstance.updateContentView(body, contentId, (error, data, response) => {
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
 **body** | [**UpdateViewRequest**](UpdateViewRequest.md)| Updated view count | 
 **contentId** | **Number**| The ID of the content | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

