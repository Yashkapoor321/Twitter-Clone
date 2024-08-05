# Base URL of API
```
https://twitter-clone-67iy.onrender.com
```

## 1.SignUp/Register  <br>
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

## 2.Login <br>
This is a login API after successful creation of tweeter account use this API to login. **Post Method** is required for this API in **postman**
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

## 3. Get LoggedIn User Profile <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**
**Note :  You have got "id" at the time of login. You have to put your id value at the place of :id**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/profile/:id
```


## 4. Get Other-Users-Profile  <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**. <br>
**This API give list of all other people**
**STEP - 1 :  You have got "id" at the time of login.  You have to put your id value at the place of :id**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/otheruser/:id
```

**STEP - 2 : In body of postman pass other people's user Id**
```
{
    "otherUserid" : "66adb759662525a960fb8e05"
}
```
##### List of other people's user Id 
1.  66adb720662525a960fb8e01
2.  66adb759662525a960fb8e05
3.  66b0881809c826ed75c915e3


## 5. Follow Other-Users <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **POST Method** to see response from **postman**.
**STEP - 1 : keep other people "id" at the place of ":id", You will get other people id from above api**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/follow/:id
```
**STEP - 2 : In body of postman pass loggedIn user's "id", You have got "id" at the time of login.**
```
{
    "id" : "66adb720662525a960fb8e01"
}
```

## 6. UnFollow Other-Users <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **POST Method** to see response from **postman**.
**STEP - 1 : keep other people "id" at the place of ":id", You will get other people id from Get others-users profile api(heading serial no.4)**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/unfollow/:id
```
**STEP - 2 : In body of postman pass loggedIn user's "id", You have got "id" at the time of login.**
```
{
    "id" : "66adb720662525a960fb8e01"  
}
```

