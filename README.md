# Base URL of API
```
https://twitter-clone-67iy.onrender.com
```

## 1.SignUp/Register  <br>
This is a new user register API use this API with the **POST Method in postman** to create twitter account
```
https://twitter-clone-67iy.onrender.com/api/v1/user/register
```

##### Register/SignUp step <br>
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

##### Login step <br>
Json Data Pass in body of Postman
```
{
    "email" : "abc@gmail.com",
    "password" : "XYZ@99783203"
}
```

## 3. Get LoggedIn User Profile <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman** <br>
**STEP :  You have got "id" at the time of login. You have to put your id value at the place of :id**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/profile/:id
```


## 4. Get Other-Users-Profile  <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**. <br>
**This API give list of all other people**<br>
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
This API  give successful response after login. Without login, this API responds User not authenticated. Use **POST Method** to see response from **postman**. <br>
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
This API  give successful response after login. Without login, this API responds User not authenticated. Use **POST Method** to see response from **postman**. <br>
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

## 7. Create Tweet API <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **POST Method** to see response from **postman**. <br>
**STEP - 1 : Use this URL**
```
https://twitter-clone-67iy.onrender.com/api/v1/tweet/create
```
**STEP - 2 : In body of postman pass, description of tweet and loggedIn user's 'id', You have got 'id' at the time of login.**
```
{
    "description" : "this tweet created by nikita",
    "id" :  "66b0881809c826ed75c915e3"
}
```

## 8. See LoggedIn User's Tweet and follow user's tweet <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**. <br>

**STEP  : You have to pass loggedIn user's 'id at the place of ':id", You have got 'id' at the time of login.** <br>
You will get all information about tweet and if you have follow someone, who's tweet will be visible and there information also.
```
https://twitter-clone-67iy.onrender.com/api/v1/tweet/alltweets/:id
```


## 9. Follow User's Tweet only<br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**.<br>
You can see tweet's of other users only when if you follow that users.<br>

**STEP : At the place of ':id' keep loggedIn user's 'id', You have got 'id' at the time of login.**
```
https://twitter-clone-67iy.onrender.com/api/v1/tweet/followingtweets/:id
```

## 10. Like Tweet<br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **PUT Method** to see response from **postman**.<br>
You can also dislike the tweet only when, if you liked that tweet <br>

**STEP-1 : At the place of ':id' You have to keep 'tweet id', You will get 'tweet id' from "See LoggedIn User's Tweet and follow user's tweet" API or " Follow User's Tweet only" API.**
```
https://twitter-clone-67iy.onrender.com/api/v1/tweet/like/:id
```

**STEP - 2 : In body of postman pass loggedIn user's 'id', You have got 'id' at the time of login.**
```
{
    "id" : "66b0881809c826ed75c915e3"
}
```

## 11. Delete Tweet <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **DELETE Method** to see response from **postman**.<br>

**STEP-1 : At the place of ':id' You have to keep 'tweet id', You will get 'tweet id' from "See LoggedIn User's Tweet and follow user's tweet" API or "Follow User's Tweet only" API.**
```
https://twitter-clone-67iy.onrender.com/api/v1/tweet/delete/:id
```

## 12. Logout <br>
This API  give successful response after login. Without login, this API responds User not authenticated. Use **GET Method** to see response from **postman**.<br>

**STEP : Use this URL for logout**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/logout
```




