## Base URL of API
```
https://twitter-clone-67iy.onrender.com
```

### SignUp/Register API <br>
This is a new user register API use this API with the **POST Method in postman** to create twitter account
```
https://twitter-clone-67iy.onrender.com/api/v1/user/register
```

##### Register/SignUp Format <br>
Data Pass in body of Postman
```
{
    "name" : "ABC",  
    "username" : "xyz",
    "email" : "ABC@gmail.com",
    "password" : "XYZ@99783203"
}
```

### Login API <br>
This is a login API after successful creation of tweeter account use this API to login. **Post Method** is require for this API in **postman**
```
https://twitter-clone-67iy.onrender.com/api/v1/user/login
```

##### Login Format <br>
Data Pass in body of Postman
```
{
    "email" : "ABC@gmail.com",
    "password" : "XYZ@99783203"
}
```

