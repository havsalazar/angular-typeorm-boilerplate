## How to Use

**Step 1:**

Download or clone this repo by using the link below:

```
https://github.com/havsalazar/angular-typeorm-boilerplate.git
```

**Step 2:**

Go to project root and execute the following command in console to get the required dependencies:

```
npm install
```

## Development server

To to start a node.js Development server with Server Side Rendering (SSR) run

```
npm run dev:ssr
```

now navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## Build and Serve

Run below command to build the project. The build artifacts will be stored in the `dist/` directory.

```
npm run build:ssr
```

Now run

```
npm run serve:ssr
```

and your production build form `dist` folder will be served on node.js server and you can navigate to `http://localhost:4200` OR `http://localhost:4000` (or your custom PORT) to view the app.

## Boilerplate features

* Home
* Routing
* HTTP
* Server Side Rendering (SSR) / Angular Universal
* Dependency Injection
* Angular hydration
* TypeORM


### Folder Structure

Here is the folder structure we have been using in this project
Angular folders
```
src/app/
|- pages/
|- services/
|- app.component.html
|- app.component.ts
|- app.module.ts
|- app-routing.module.ts
|- app-server.module.ts
```

Express folders
```
src/server/
|- entity/
    |- user.entity.ts
|- routes/
    |- user.route.ts
|- migration/
|- data-source.ts
```

### Pages

This directory contains all the application top level Pages. A separate folder is created for each page as shown in example below:

```
pages/
|- users/
    |- user-detail/
        |- users-detail.component.ts
        |- users-detail.component.html
        |- users-detail.component.scss
        |- users-detail.component.spec.ts
    |- user-list/ 
        |- users-list.component.ts
        |- users-list.component.html
        |- users-list.component.scss
        |- users-list.component.spec.ts
    |- users-routing.module.ts
    |- users.module.ts

``` 