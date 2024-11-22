# UserAndProfileManagementApi.ListsApi

All URIs are relative to *https://myapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserIdProfilesProfileIdListsFavoritesContentIdDelete**](ListsApi.md#usersUserIdProfilesProfileIdListsFavoritesContentIdDelete) | **DELETE** /users/{userId}/profiles/{profileId}/lists/favorites/{contentId} | Remove content from favorites
[**usersUserIdProfilesProfileIdListsFavoritesGet**](ListsApi.md#usersUserIdProfilesProfileIdListsFavoritesGet) | **GET** /users/{userId}/profiles/{profileId}/lists/favorites | Get favorite content list
[**usersUserIdProfilesProfileIdListsFavoritesPost**](ListsApi.md#usersUserIdProfilesProfileIdListsFavoritesPost) | **POST** /users/{userId}/profiles/{profileId}/lists/favorites | Add content to favorites
[**usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete**](ListsApi.md#usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete) | **DELETE** /users/{userId}/profiles/{profileId}/lists/recently-watched/{contentId} | Remove content from recently watched list
[**usersUserIdProfilesProfileIdListsRecentlyWatchedGet**](ListsApi.md#usersUserIdProfilesProfileIdListsRecentlyWatchedGet) | **GET** /users/{userId}/profiles/{profileId}/lists/recently-watched | Get recently watched content list
[**usersUserIdProfilesProfileIdListsRecentlyWatchedPost**](ListsApi.md#usersUserIdProfilesProfileIdListsRecentlyWatchedPost) | **POST** /users/{userId}/profiles/{profileId}/lists/recently-watched | Add content to recently watched
[**usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete**](ListsApi.md#usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete) | **DELETE** /users/{userId}/profiles/{profileId}/lists/watch-later/{contentId} | Remove content from watch later list
[**usersUserIdProfilesProfileIdListsWatchLaterGet**](ListsApi.md#usersUserIdProfilesProfileIdListsWatchLaterGet) | **GET** /users/{userId}/profiles/{profileId}/lists/watch-later | Get watch later content list
[**usersUserIdProfilesProfileIdListsWatchLaterPost**](ListsApi.md#usersUserIdProfilesProfileIdListsWatchLaterPost) | **POST** /users/{userId}/profiles/{profileId}/lists/watch-later | Add content to watch later

<a name="usersUserIdProfilesProfileIdListsFavoritesContentIdDelete"></a>
# **usersUserIdProfilesProfileIdListsFavoritesContentIdDelete**
> usersUserIdProfilesProfileIdListsFavoritesContentIdDelete(userId, profileId, contentId)

Remove content from favorites

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 
let contentId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsFavoritesContentIdDelete(userId, profileId, contentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 
 **contentId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUserIdProfilesProfileIdListsFavoritesGet"></a>
# **usersUserIdProfilesProfileIdListsFavoritesGet**
> [&#x27;Number&#x27;] usersUserIdProfilesProfileIdListsFavoritesGet(userId, profileId)

Get favorite content list

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsFavoritesGet(userId, profileId, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 

### Return type

**[&#x27;Number&#x27;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdProfilesProfileIdListsFavoritesPost"></a>
# **usersUserIdProfilesProfileIdListsFavoritesPost**
> usersUserIdProfilesProfileIdListsFavoritesPost(body, userId, profileId)

Add content to favorites

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let body = 3.4; // Number | ID of the content to be added to favorites
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsFavoritesPost(body, userId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Number**](Number.md)| ID of the content to be added to favorites | 
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete"></a>
# **usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete**
> usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete(userId, profileId, contentId)

Remove content from recently watched list

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 
let contentId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete(userId, profileId, contentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 
 **contentId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUserIdProfilesProfileIdListsRecentlyWatchedGet"></a>
# **usersUserIdProfilesProfileIdListsRecentlyWatchedGet**
> [&#x27;Number&#x27;] usersUserIdProfilesProfileIdListsRecentlyWatchedGet(userId, profileId)

Get recently watched content list

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsRecentlyWatchedGet(userId, profileId, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 

### Return type

**[&#x27;Number&#x27;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdProfilesProfileIdListsRecentlyWatchedPost"></a>
# **usersUserIdProfilesProfileIdListsRecentlyWatchedPost**
> usersUserIdProfilesProfileIdListsRecentlyWatchedPost(body, userId, profileId)

Add content to recently watched

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let body = 3.4; // Number | ID of the content to be added to recently watched list
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsRecentlyWatchedPost(body, userId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Number**](Number.md)| ID of the content to be added to recently watched list | 
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete"></a>
# **usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete**
> usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete(userId, profileId, contentId)

Remove content from watch later list

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 
let contentId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete(userId, profileId, contentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 
 **contentId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUserIdProfilesProfileIdListsWatchLaterGet"></a>
# **usersUserIdProfilesProfileIdListsWatchLaterGet**
> [&#x27;Number&#x27;] usersUserIdProfilesProfileIdListsWatchLaterGet(userId, profileId)

Get watch later content list

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsWatchLaterGet(userId, profileId, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 

### Return type

**[&#x27;Number&#x27;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdProfilesProfileIdListsWatchLaterPost"></a>
# **usersUserIdProfilesProfileIdListsWatchLaterPost**
> usersUserIdProfilesProfileIdListsWatchLaterPost(body, userId, profileId)

Add content to watch later

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ListsApi();
let body = 3.4; // Number | ID of the content to be added to watch later list
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdListsWatchLaterPost(body, userId, profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Number**](Number.md)| ID of the content to be added to watch later list | 
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

