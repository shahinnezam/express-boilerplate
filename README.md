## Mini Media Platform App
## List of api
 ---
### View a list of media resources: 
### GET /media

**Request:**

- **Method:** `GET`
- **URL:** `/media`

**Response:** 

- **200 OK:** The request was successful, and a list of images was returned.

```json
    [
        {
          "id": 1,
          "title": "pic1",
          "category": "music",
          "url": "https://example.com/media/1.jpg",
        },
        {
          "id": 2,
          "title": "pic2",
          "category": "film",
          "url": "https://example.com/media/2.jpg",
        }
    ]
```

- **404 Not Found:** The requested media resource was not found.

```json
    {
        "message": "Media resource not found"
    } 
```
 ---
### View a single media resource:
### GET /media/:id

**Request:**

- **Method:** `GET`
- **URL:** `/media/:id`

**Response:**

- **200 OK:** The request was successful, and the media resource was returned.

```json
    {
      "id": 1,
      "title": "pic1",
      "category": "music",
      "url": "https://example.com/media/1.jpg",
    }
``` 
- **404 Not Found:** The requested media resource was not found.
```json
    {
      "message": "Media resource not found."
    }
```
 --- 
### Create a new media post 
### POST /media

**Request:**

- **Method:** `POST`
- **URL:** `/media/:id`
- **Headers:**
```json
Content-Type: application/json
```
- **Body:**
```json
    {
      "title": "pic3",
      "category": "photo",
      "url": "https://example.com/media/new.jpg",
    }
```

**Response:**

- **201 Created:** The media resource was successfully created.
```json
    {
      "id": 3,
      "title": "pic3",
      "category": "photo",
      "url": "https://example.com/media/new.jpg",
    }
```
- **400 Bad Request:** The request was invalid.
```json
    {
      "message": "Invalid request body."
    }
```

 ---
### Update a media resource:
### PUT /media/:id

**Request:**

- **Method:** `PUT`
- **URL:** `/media/:id`
- **Headers:**
```json
Content-Type: application/json
```

- **Body:**

```json
    {
      "title": "Updated pic1",
      "category": "music",
    }
```

**Response:**

- **200 OK:** The media requested successfully updated.

```json
    {
      "id": 1,
      "title": "Updated pic1",
      "category": "music",
    }
```

- **404 Not Found:** The requested media resource was not found.
```json
    {
      "message": "Media resource not found."
    }
```
 ---
### Delete a media resource: 
### DELETE /media/:id

**Request:**

- **Method:** `DELETE`
- **URL:** `/media/:id`

**Response:**
- **204 No Content:** The media resource was successfully deleted.
- **404 Not Found:**  The requested media resource was not found.

```json
    {
      "message": "Media resource not found."
    }
```
 ---
### View images filtered by category:
### GET /media

**Request:**

- **Method:** `GET`
- **URL:** `/media`
- **Query Param:**
  - `category`: a string representing the media category

```
GET /media?category=music HTTP/1.1
```
**Response:**

- **200 OK:** The media resources were successfully retrieved.
```json
[
  {
    "id": 1,
    "title": "pic1",
    "category": "music",
  },
  {
    "id": 2,
    "title": "pic2",
    "category": "music",
  }
]
```

- **400 Bad Request:** Invalid category request.
```json
{
  "message": "Invalid request parameters."
}
```
 ---
### Login to account:
### POST /users/login 

**Request:**

- **Method:** `POST`
- **URL:** `/users/login`
- **Body:**
```json
{
  "username": <string>,
  "password": <string>
}
```

**Response:**

- **200 OK** 
```json
{
   "access_token": <access_token>
}
```
 ---
### Signup an account:
### POST /media/signup 

**Request:**

- **Method:** `POST`
- **URL:** `/users/signup`
- **Body:**
```json
{
  "username": <string>,
  "email": <string>,
  "password": <string>
}
```

**Response:**

- **201 Created** 
```json
{
  "id": number
  "username": <string>,
  "email": <string>,
  "created_at": <string>
}
```