# 📚 Books_Management_System 📚
This project is an part of my MERN learning, in which i learn Create, Read, Update and Delete operations using MERN. Books Management System contains add book, display book, update book, delete book features.

# Tech stack
MERN
- MongoDB(Database)
- Express(Backend)
- React(Frontend)
- Node(Backend)

# Commands 👨‍🏫
## Back-end(Folder:API) ⚙
### 1️⃣ Create package.json
       npm init -y
### 2️⃣ Install mongoos and express 
       npm i mongoose express
### 3️⃣ Run backend file 'server.js'
       node server.js
### 4️⃣ Install nodemon globally for automatic run server.js file on save
#### 4.1 install nodemon 
       npm i -g nodemon
#### 4.2 Add bellow code to package.json file
       "scripts": {
              "dev": "nodemon server.js"
       }
#### 4.3 run server
      npm run dev

### 5️⃣ for use module import structure add following in package.json
       //example : import cors from "cors"
       "type": "module"

## Front-end(Folder:Client)  ⛺
### 1️⃣ Create react app
       npm create vite@latest
### 2️⃣ Install node modules and run app
       npm install
       npm run dev
### 3️⃣ Add Bootstrap in index.html and remove app.css 
### 3.1 Add bootstrap css in <head>
       <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"/>
### 3.2 Add bootstrap js in <head>
       <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"></script>
### 4️⃣ Connect frontend to backend
#### 4.1 Install axis foe API calling 
       npm install axios
#### 4.2 For allow Cross origin acces
##### 4.2.1 install cors in backend(folder:API)
       npm install cors
##### 4.2.2 add following code snipat in server.js(API's)
       import cors from "cors"

       //for allow front end access
       app.use(
         cors({
           origin: true,
           methods: ["GET", "POST", "PUT", "DELETE"],
           credentials: true,
         })
       );

# Implementation
### Home Screen
<kbd>![image](https://github.com/Nimisha-Mavar/Books_Management_System/assets/112267753/26dedaff-5df6-4276-9a6f-f39c844e20ed)</kbd>

### Add book
<kbd>![image](https://github.com/Nimisha-Mavar/Books_Management_System/assets/112267753/a0aec7cc-8d73-4d99-b1f2-ad2fcb5fda98)</kbd>

### Update book
<kbd>![image](https://github.com/Nimisha-Mavar/Books_Management_System/assets/112267753/00bf0716-fab2-40a6-8d7f-8966365f70f0)</kbd>

### Delete book
<kbd>![image](https://github.com/Nimisha-Mavar/Books_Management_System/assets/112267753/9e540ec1-0a79-4b02-a16d-aa627589753c)</kbd>
