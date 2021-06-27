# Online-Louvre
An online web-application that allows you to view art!

## How to run
1- copy .env file in the api folder (backend)

.env example:

- DB_HOST=mongoURI
- JWT_PRIVATE_KEY=privateKey
- CLOUDINARY_CLOUD_NAME=cloudinaryname
- CLOUDINARY_API_KEY =cloudinaryapikey
- CLOUDINARY_API_SECRET =cloudinarySeceret


2- copy the other .env file in the client folder (frontend)
 
 .env example:
  - REACT_APP_BASE_URL = "http://localhost:3000/api"
  
  
  
3- access the api folder , run "npm install"  then run "npm start" and the backend should be running


4- access the client folder, run "npm install" then run "npm start" and frontend should be running and you can access it from browser



{
	"info": {
		"_postman_id": "9a0e67a5-aa80-47db-970b-e946d6862a83",
		"name": "Online Louvre",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "register",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\":\"mohamed@gmail.com\",\n    \"password\":\"password\",\n    \"userRole\":\"ADMIN\",\n    \"phone\":{\n        \"code\":\"20\",\n        \"number\":\"01003275080\"\n    }\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						""
					]
				},
				"description": "register an account by giving in email, password,userRole and finally phone number consistion of country code (20) and number (010022344353)"
			},
			"response": []
		},
		{
			"name": "login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\":\"mohamed@gmail.com\",\n    \"password\":\"password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"login"
					]
				},
				"description": "Login using email and password"
			},
			"response": []
		},
		{
			"name": "Add new art piece to website",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2ZiOThhM2VjMGIyOGQwNTkzNjc5MiIsInVzZXJuYW1lIjoibW9oYW1lZEBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6IkFETUlOIiwiaWF0IjoxNjI0MzA0NDAxLCJleHAiOjE2MjQzMDgwMDF9.9shFHESZa2HXJkL0AzixIS55CwByYkIBTP2LdqW9ZTM",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "myImage",
							"type": "file",
							"src": "/home/arkoth24/Mido/Software Projects/New Projects/Online Louvre/docs/Assets-20210620T103250Z-001/Assets/gallery/Icon Background-11.png"
						},
						{
							"key": "artist",
							"value": "davinci",
							"type": "text"
						},
						{
							"key": "description",
							"value": "the best painting ever",
							"type": "text"
						}
					],
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/art/addNewArtPiece",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"art",
						"addNewArtPiece"
					]
				},
				"description": "Add a new art piece to the db by giving its name, artists, desc and finally upload an image file"
			},
			"response": []
		},
		{
			"name": "Get all Art Pieces",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2ZiOThhM2VjMGIyOGQwNTkzNjc5MiIsInVzZXJuYW1lIjoibW9oYW1lZEBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6IkFETUlOIiwiaWF0IjoxNjI0MzA0NDAxLCJleHAiOjE2MjQzMDgwMDF9.9shFHESZa2HXJkL0AzixIS55CwByYkIBTP2LdqW9ZTM",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/art/getAllArt?pageLimit=2&pageNumber=3",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"art",
						"getAllArt"
					],
					"query": [
						{
							"key": "pageLimit",
							"value": "2"
						},
						{
							"key": "pageNumber",
							"value": "3"
						}
					]
				},
				"description": "Returns all art pieces paginated"
			},
			"response": []
		},
		{
			"name": "Get all users by admins",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDBmYzc0ZjNlZjBlNDU4YzhhNDEwZCIsInVzZXJuYW1lIjoibW9oYW1lZEBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6IkFETUlOIiwiaWF0IjoxNjI0MzA5MTQ1LCJleHAiOjE2MjQzMTI3NDV9.DiHQGPGrk1WLy1K3jkChESbF03fWvXUlBzGDFsK86oo",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/getUsers?pageLimit=2&pageNumber=2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"getUsers"
					],
					"query": [
						{
							"key": "pageLimit",
							"value": "2"
						},
						{
							"key": "pageNumber",
							"value": "2"
						}
					]
				},
				"description": "Returns all users paginted for admin view"
			},
			"response": []
		},
		{
			"name": "Delete art piece by admin",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDBmYzc0ZjNlZjBlNDU4YzhhNDEwZCIsInVzZXJuYW1lIjoibW9oYW1lZEBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6IkFETUlOIiwiaWF0IjoxNjI0MzA5MTQ1LCJleHAiOjE2MjQzMTI3NDV9.DiHQGPGrk1WLy1K3jkChESbF03fWvXUlBzGDFsK86oo",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"id\":\"60d0f043474268157f4c45bb\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/art/deleteArtPiece",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"art",
						"deleteArtPiece"
					]
				},
				"description": "given the art piece id it gets deleted from db"
			},
			"response": []
		},
		{
			"name": "Edit art piece info",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDBmYzc0ZjNlZjBlNDU4YzhhNDEwZCIsInVzZXJuYW1lIjoibW9oYW1lZEBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6IkFETUlOIiwiaWF0IjoxNjI0MzEzMzUyLCJleHAiOjE2MjQzMTY5NTJ9.cHBAQEeU3T2CWwEIBjUQEAnSXKuSu9tSMw4p3u6UbOI",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"artist\":\"marawan pablo\",\n    \"id\":\"60d10998145d825823bf2acb\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/art/editArtPieceInfo",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"art",
						"editArtPieceInfo"
					]
				},
				"description": "Allows admin to edit art piece information except picture(handled in a seperate api)"
			},
			"response": []
		},
		{
			"name": "Edit art piece photo",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": ""
				},
				"description": "edits art piece photo"
			},
			"response": []
		}
	]
}
