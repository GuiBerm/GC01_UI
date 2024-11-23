# MovieStreamingApi.DirectorsApi

All URIs are relative to *http://localhost:8081/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDirector**](DirectorsApi.md#addDirector) | **POST** /directors | Add a new director
[**deleteDirector**](DirectorsApi.md#deleteDirector) | **DELETE** /directors/{directorId} | Delete director
[**getDirectorById**](DirectorsApi.md#getDirectorById) | **GET** /directors/{directorId} | Get director details
[**getDirectors**](DirectorsApi.md#getDirectors) | **GET** /directors | Get a list of all directors
[**updateDirector**](DirectorsApi.md#updateDirector) | **PUT** /directors/{directorId} | Update director

<a name="addDirector"></a>
# **addDirector**
> Director addDirector(body)

Add a new director

Add a new director to the platform

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.DirectorsApi();
let body = new MovieStreamingApi.Director(); // Director | 

apiInstance.addDirector(body, (error, data, response) => {
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
 **body** | [**Director**](Director.md)|  | 

### Return type

[**Director**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDirector"></a>
# **deleteDirector**
> deleteDirector(directorId)

Delete director

Delete director by its ID

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.DirectorsApi();
let directorId = 56; // Number | The ID of the director to delete

apiInstance.deleteDirector(directorId, (error, data, response) => {
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
 **directorId** | **Number**| The ID of the director to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getDirectorById"></a>
# **getDirectorById**
> Director getDirectorById(directorId)

Get director details

Get detailed information about a specific director

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.DirectorsApi();
let directorId = 56; // Number | The ID of the director to retrieve

apiInstance.getDirectorById(directorId, (error, data, response) => {
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
 **directorId** | **Number**| The ID of the director to retrieve | 

### Return type

[**Director**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDirectors"></a>
# **getDirectors**
> [Director] getDirectors()

Get a list of all directors

Retrieve a list of all directors available in the platform

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.DirectorsApi();
apiInstance.getDirectors((error, data, response) => {
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

[**[Director]**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDirector"></a>
# **updateDirector**
> Director updateDirector(body, directorId)

Update director

Update information about a specific director

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.DirectorsApi();
let body = new MovieStreamingApi.Director(); // Director | 
let directorId = 56; // Number | The ID of the director to update

apiInstance.updateDirector(body, directorId, (error, data, response) => {
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
 **body** | [**Director**](Director.md)|  | 
 **directorId** | **Number**| The ID of the director to update | 

### Return type

[**Director**](Director.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

