# Todo List App

## Installation

1. Client - Vue
   1. Make it run. Require ```Vue-cli```
      1. ```npm install``` - Install npm and requirement
      2. ```npm run serve``` - Start running client side
2. Server - Php Laravel
   1. Make it run. Require ```Laravel```
      1. ```composer install``` - Install composer and requirement
      2. Setting ```.env```
         1. ```DB_DATABASE```
         2. ```DB_USERNAME```
         3. ```DB_PASSWORD```
      3. ```php artisan migrate``` - Run migration
      4. ```php artisan passport:install``` - Install OAuth2 secret key
      5. Setting ```.env```
         1. ```PASSPORT_CLIENT_ID``` - Select the second keys (Client ID: 2)
         2. ```PASSPORT_CLIENT_SECRET``` - Select the second keys (Client secret)
      6. ```php artisan key:generate``` - Install sercret key
      7. ```php artisan config:cache``` - Config cache
      8. ```php artisan serve --port=8000``` - Start running server on port 8000(Running on 8000 is a must)
   2. Debug
      1. Make sure setting .env accordingly to current environment
      2. Alway run ```php artisan config:cache``` when finish changing anything in .env

## Routing

1. Checking on ```./server/routes/api.php```

## Documentation - Tutorial

1. Vue-cli
   1. Document
      1. Official Document: https://vuejs.org/v2/guide/
      2. Vue Routing: https://vuejs.org/v2/guide/routing.html
      3. How to connect with server
         1. Axios: https://www.npmjs.com/package/vue-axios
      4. How to remember token with cookies
         1. Vue-cookies: https://www.npmjs.com/package/vue-cookies
      5. Vuex - State management: https://vuex.vuejs.org/guide/
      6. Vuex Mutations: https://vuex.vuejs.org/guide/mutations.html
   2. Tutorial
      1. Vue Tutorial: https://www.youtube.com/watch?v=Wy9q22isx3U
      2. Vuex Tutorial: https://www.youtube.com/watch?v=5lVQgZzLMHc
2. Laravel
   1. Document
      1. Offucial Document: https://laravel.com/docs/5.8
      2. Migration: https://laravel.com/docs/5.8/migrations
      3. Laravel Passport(OAuth2): https://laravel.com/docs/5.8/passport
      4. Middleware: https://laravel.com/docs/5.8/middleware
      5. Allow CROS: https://github.com/barryvdh/laravel-cors
   2. Tutorial
      1. Laravel: https://www.youtube.com/watch?v=EU7PRmCpx-0&list=PLillGF-RfqbYhQsN5WMXy6VsDMKGadrJ-
      2. Laravel Passport: https://www.youtube.com/watch?v=HGh0cKEVXPI
