# UserAndProfileManagementApi.UsersApi

All URIs are relative to *https://myapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Get all users
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Create a new user
[**usersUserIdDelete**](UsersApi.md#usersUserIdDelete) | **DELETE** /users/{userId} | Delete a user
[**usersUserIdGet**](UsersApi.md#usersUserIdGet) | **GET** /users/{userId} | Get a specific user by ID
[**usersUserIdPut**](UsersApi.md#usersUserIdPut) | **PUT** /users/{userId} | Update user details

<a name="usersGet"></a>
# **usersGet**
> [User] usersGet()

Get all users

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.UsersApi();
apiInstance.usersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> usersPost(body)

Create a new user

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.UsersApi();
let body = new UserAndProfileManagementApi.User(); // User | User data

apiInstance.usersPost(body, (error, data, response) => {
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
 **body** | [**User**](User.md)| User data | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="usersUserIdDelete"></a>
# **usersUserIdDelete**
> usersUserIdDelete(userId)

Delete a user

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.UsersApi();
let userId = 56; // Number | 

apiInstance.usersUserIdDelete(userId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUserIdGet"></a>
# **usersUserIdGet**
> User usersUserIdGet(userId)

Get a specific user by ID

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.UsersApi();
let userId = 56; // Number | 

apiInstance.usersUserIdGet(userId, (error, data, response) => {
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdPut"></a>
# **usersUserIdPut**
> usersUserIdPut(body, userId)

Update user details

### Example
```javascript
import {UserAndProfileManagementApi} from 'user_and_profile_management_api';

let apiInstance = new UserAndProfileManagementApi.UsersApi();
let body = new UserAndProfileManagementApi.User(); // User | Updated user data
let userId = 56; // Number | 

apiInstance.usersUserIdPut(body, userId, (error, data, response) => {
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
 **body** | [**User**](User.md)| Updated user data | 
 **userId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

