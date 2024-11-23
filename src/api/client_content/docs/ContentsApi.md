# MovieStreamingApi.ContentsApi

All URIs are relative to *http://localhost:8081/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContent**](ContentsApi.md#addContent) | **POST** /contents | Add new content
[**deleteContent**](ContentsApi.md#deleteContent) | **DELETE** /contents/{contentId} | Delete content
[**filterContentsByGenres**](ContentsApi.md#filterContentsByGenres) | **GET** /contents/filterByGenres | Filter contents by genres
[**getAllGenres**](ContentsApi.md#getAllGenres) | **GET** /contents/genres | Retrieve all available genres
[**getContentById**](ContentsApi.md#getContentById) | **GET** /contents/{contentId} | Get content details
[**getContents**](ContentsApi.md#getContents) | **GET** /contents | Get a list of all contents
[**searchContents**](ContentsApi.md#searchContents) | **GET** /contents/search | Search contents by keyword
[**updateContent**](ContentsApi.md#updateContent) | **PUT** /contents/{contentId} | Update content

<a name="addContent"></a>
# **addContent**
> Content addContent(body)

Add new content

Add new content to the platform

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
let body = new MovieStreamingApi.Content(); // Content | 

apiInstance.addContent(body, (error, data, response) => {
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
 **body** | [**Content**](Content.md)|  | 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContent"></a>
# **deleteContent**
> deleteContent(contentId)

Delete content

Delete content by its ID

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
let contentId = 56; // Number | The ID of the content to delete

apiInstance.deleteContent(contentId, (error, data, response) => {
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
 **contentId** | **Number**| The ID of the content to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="filterContentsByGenres"></a>
# **filterContentsByGenres**
> [Content] filterContentsByGenres(genres)

Filter contents by genres

Retrieve contents filtered by one or more genres

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
let genres = ["genres_example"]; // [String] | List of genres to filter by

apiInstance.filterContentsByGenres(genres, (error, data, response) => {
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
 **genres** | [**[String]**](String.md)| List of genres to filter by | 

### Return type

[**[Content]**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllGenres"></a>
# **getAllGenres**
> getAllGenres()

Retrieve all available genres

Get a list of all genres available on the platform

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
apiInstance.getAllGenres((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContentById"></a>
# **getContentById**
> Content getContentById(contentId)

Get content details

Get detailed information about a specific content

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
let contentId = 56; // Number | The ID of the content to retrieve

apiInstance.getContentById(contentId, (error, data, response) => {
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
 **contentId** | **Number**| The ID of the content to retrieve | 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContents"></a>
# **getContents**
> [Content] getContents()

Get a list of all contents

Retrieve a list of all contents available on the platform

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
apiInstance.getContents((error, data, response) => {
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

[**[Content]**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchContents"></a>
# **searchContents**
> Content searchContents(keyword)

Search contents by keyword

Search contents using a single keyword that matches title, synopsis, actor names, or director names

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
let keyword = "keyword_example"; // String | Keyword to search across title, synopsis, actor names, or director names

apiInstance.searchContents(keyword, (error, data, response) => {
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
 **keyword** | **String**| Keyword to search across title, synopsis, actor names, or director names | 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateContent"></a>
# **updateContent**
> Content updateContent(body, contentId)

Update content

Update information about specific content

### Example
```javascript
import {MovieStreamingApi} from 'movie_streaming_api';

let apiInstance = new MovieStreamingApi.ContentsApi();
let body = new MovieStreamingApi.Content(); // Content | 
let contentId = 56; // Number | The ID of the content to update

apiInstance.updateContent(body, contentId, (error, data, response) => {
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
 **body** | [**Content**](Content.md)|  | 
 **contentId** | **Number**| The ID of the content to update | 

### Return type

[**Content**](Content.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

