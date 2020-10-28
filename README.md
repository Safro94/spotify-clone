# Spotify Clone

## Descripción
Spotify clone with a home page and the album list functionality. This is a simple project to test out Expo and React Native w/Typescript. There's also a REST API with Node Js and mock data to feed the client.

## Stack

### Server
  - Node JS
  - Express

### Frontend
    - React Native
    - Expo
    - Typescript

## How to run
### Clonar

Clone the repo running the command

```
git clone https://github.com/Safro94/spotify-clone.git
```

### Install dependencies

On the root

Run command

```
npm install
```

You can run the client using the command

```
expo start
```

Go to the server folder

```
cd server
```

Run command

```
npm install
```

You can run the server using the command

```
npm start
```

The server should be running on http://localhost:8000. For the client see the console output.

## Server endpoints

Para ver la documentación de los endpoints ir a http://localhost:8000/docs

- GET http://localhost:8000/api/albums
- GET http://localhost:8000/api/albums/:id
- GET http://localhost:8000/api/songs
- GET http://localhost:8000/api/songs/:id
