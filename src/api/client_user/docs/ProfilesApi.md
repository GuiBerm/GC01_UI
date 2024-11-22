# UserAndProfileManagementApi.ProfilesApi

All URIs are relative to *https://myapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserIdProfilesGet**](ProfilesApi.md#usersUserIdProfilesGet) | **GET** /users/{userId}/profiles | Get all profiles of a user
[**usersUserIdProfilesPost**](ProfilesApi.md#usersUserIdProfilesPost) | **POST** /users/{userId}/profiles | Create a new profile for a user
[**usersUserIdProfilesProfileIdDelete**](ProfilesApi.md#usersUserIdProfilesProfileIdDelete) | **DELETE** /users/{userId}/profiles/{profileId} | Delete a profile
[**usersUserIdProfilesProfileIdGet**](ProfilesApi.md#usersUserIdProfilesProfileIdGet) | **GET** /users/{userId}/profiles/{profileId} | Get profile details by ID
[**usersUserIdProfilesProfileIdPut**](ProfilesApi.md#usersUserIdProfilesProfileIdPut) | **PUT** /users/{userId}/profiles/{profileId} | Update a profile

<a name="usersUserIdProfilesGet"></a>
# **usersUserIdProfilesGet**
> [Profile] usersUserIdProfilesGet(userId)

Get all profiles of a user

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ProfilesApi();
let userId = 56; // Number | 

apiInstance.usersUserIdProfilesGet(userId, (error, data, response) => {
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

### Return type

[**[Profile]**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdProfilesPost"></a>
# **usersUserIdProfilesPost**
> usersUserIdProfilesPost(body, userId)

Create a new profile for a user

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ProfilesApi();
let body = new UserAndProfileManagementApi.Profile(); // Profile | Profile data
let userId = 56; // Number | 

apiInstance.usersUserIdProfilesPost(body, userId, (error, data, response) => {
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
 **body** | [**Profile**](Profile.md)| Profile data | 
 **userId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="usersUserIdProfilesProfileIdDelete"></a>
# **usersUserIdProfilesProfileIdDelete**
> usersUserIdProfilesProfileIdDelete(userId, profileId)

Delete a profile

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ProfilesApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdDelete(userId, profileId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUserIdProfilesProfileIdGet"></a>
# **usersUserIdProfilesProfileIdGet**
> Profile usersUserIdProfilesProfileIdGet(userId, profileId)

Get profile details by ID

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ProfilesApi();
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdGet(userId, profileId, (error, data, response) => {
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

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdProfilesProfileIdPut"></a>
# **usersUserIdProfilesProfileIdPut**
> usersUserIdProfilesProfileIdPut(body, userId, profileId)

Update a profile

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.ProfilesApi();
let body = new UserAndProfileManagementApi.Profile(); // Profile | Updated profile data
let userId = 56; // Number | 
let profileId = 56; // Number | 

apiInstance.usersUserIdProfilesProfileIdPut(body, userId, profileId, (error, data, response) => {
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
 **body** | [**Profile**](Profile.md)| Updated profile data | 
 **userId** | **Number**|  | 
 **profileId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

