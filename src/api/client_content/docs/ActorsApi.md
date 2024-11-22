# MovieStreamingApi.ActorsApi

All URIs are relative to *http://localhost:8081/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addActor**](ActorsApi.md#addActor) | **POST** /actors | Add a new actor
[**deleteActor**](ActorsApi.md#deleteActor) | **DELETE** /actors/{actorId} | Delete actor
[**getActorById**](ActorsApi.md#getActorById) | **GET** /actors/{actorId} | Get actor details
[**getActors**](ActorsApi.md#getActors) | **GET** /actors | Get a list of all actors
[**updateActor**](ActorsApi.md#updateActor) | **PUT** /actors/{actorId} | Update actor

<a name="addActor"></a>
# **addActor**
> Actor addActor(body)

Add a new actor

Add a new actor to the platform

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ActorsApi();
let body = new MovieStreamingApi.Actor(); // Actor | 

apiInstance.addActor(body, (error, data, response) => {
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
 **body** | [**Actor**](Actor.md)|  | 

### Return type

[**Actor**](Actor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteActor"></a>
# **deleteActor**
> deleteActor(actorId)

Delete actor

Delete actor by its ID

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ActorsApi();
let actorId = 56; // Number | The ID of the actor to delete

apiInstance.deleteActor(actorId, (error, data, response) => {
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
 **actorId** | **Number**| The ID of the actor to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getActorById"></a>
# **getActorById**
> Actor getActorById(actorId)

Get actor details

Get detailed information about a specific actor

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ActorsApi();
let actorId = 56; // Number | The ID of the actor to retrieve

apiInstance.getActorById(actorId, (error, data, response) => {
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
 **actorId** | **Number**| The ID of the actor to retrieve | 

### Return type

[**Actor**](Actor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getActors"></a>
# **getActors**
> [Actor] getActors()

Get a list of all actors

Retrieve a list of all actors available in the platform

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ActorsApi();
apiInstance.getActors((error, data, response) => {
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

[**[Actor]**](Actor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateActor"></a>
# **updateActor**
> Actor updateActor(body, actorId)

Update actor

Update information about a specific actor

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ActorsApi();
let body = new MovieStreamingApi.Actor(); // Actor | 
let actorId = 56; // Number | The ID of the actor to update

apiInstance.updateActor(body, actorId, (error, data, response) => {
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
 **body** | [**Actor**](Actor.md)|  | 
 **actorId** | **Number**| The ID of the actor to update | 

### Return type

[**Actor**](Actor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

