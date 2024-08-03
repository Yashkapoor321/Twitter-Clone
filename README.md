# Base URL of API
```
https://twitter-clone-67iy.onrender.com
```

## 1.SignUp/Register API <br>
This is a new user register API use this API with the **POST Method in postman** to create twitter account
```
https://twitter-clone-67iy.onrender.com/api/v1/user/register
```

##### Register/SignUp Format <br>
Json Data Pass in body of Postman
```
{
    "name" : "ABC",  
    "username" : "xyz",
    "email" : "abc@gmail.com",
    "password" : "XYZ@99783203"
}
```

## 2.Login API <br>
This is a login API after successful creation of tweeter account use this API to login. **Post Method** is require for this API in **postman**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/login
```

##### Login Format <br>
Json Data Pass in body of Postman
```
{
    "email" : "abc@gmail.com",
    "password" : "XYZ@99783203"
}
```

## 3. Get LoggedIn User Profile API <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/profile/:id
```

##### LoggedIn User Profile Format <br>
```
https://twitter-clone-67iy.onrender.com/api/v1/user/profile/66adb720662525a960fb8e01
```


## 4. Get Other-Users-Profile API <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**.
```
https://twitter-clone-67iy.onrender.com/api/v1/otheruser/profile/:id
```

##### Other-Users-Profile See Format <br>
step-1 : In URL instead :id pass self/loggedIn  userId
```
https://twitter-clone-67iy.onrender.com/api/v1/user/otheruser/66adb720662525a960fb8e01
```
step-2 : In body of postman pass other users userId
```
{
    "otherUserid" : "66adb759662525a960fb8e05"
}
```

## 5. Follow Other-Users API <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **POST Method** to see response from **postman**.
```
https://twitter-clone-67iy.onrender.com/api/v1/user/follow/:id
```
#####  Other-Users Follow API Format <br>
step-1 : In URL instead :id pass others users Id
```
https://twitter-clone-67iy.onrender.com/api/v1/user/follow/66adb759662525a960fb8e05
```
step-2 : In body of postman pass loggedIn users userId
```
{
    "id" : "66adb720662525a960fb8e01"
}
```

## 6. UnFollow Other-Users API <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **POST Method** to see response from **postman**.
```
https://twitter-clone-67iy.onrender.com/api/v1/user/unfollow/:id
```
#####  Other-Users UnFollow API Format <br>
step-1 : In URL instead :id pass others users Id
```
https://twitter-clone-67iy.onrender.com/api/v1/user/unfollow/66adb759662525a960fb8e05
```
step-2 : In body of postman pass loggedIn users userId
```
{
    "id" : "66adb720662525a960fb8e01"
}
```


