const User = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


//.                                           SignUp/Register
const register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        // basic validation
        // if (!name || !username || !email || !password) {
        //     return res.status(401).json({
        //         message: "All fields are required.",
        //         success: false
        //     })
        // }
        // if(!email.includes('@')){
        //     return res.status(400).json({
        //         success : false,
        //         message : "Email address must contains @ symbol"
        //    })
        // }
         //name Validations
         if (!name) {
            return res.status(400).json({
                success : false,
                message : "name is required"
           })
        }
        if (name[0] !== name[0].toUpperCase()) {
            return res.status(400).json({
             success : false,
             message : "name first letter must be capital letter"
        })
        }

        //username validation
        if(!username ){
            return res.status(400).json({
              success : false,
              message : "username is required"
            })
         }

         const userName = await User.findOne({ username });
         if (userName) {
             return res.status(401).json({
                 message: "Username already exist, try another username",
                 success: false
             })
         }

          // Email Validation
     if (!email) {
        return res.status(400).json({
            success : false,
            message : "Please enter a email id"
       })
    }else if(!email.includes('@')){
        return res.status(400).json({
            success : false,
            message : "Email address must contains @ symbol"
       })
    }

      // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
        return res.status(400).json({
            success : false,
            message : "Please Enter a password"  
        })
    }else if(!passwordRegex.test(password)){
        return res.status(400).json({
            success : false,
            message : "Password must be at least 8 characters long and include one special character, one uppercase letter, and one numeric character."  
        })
    }



        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "User already exist.",
                success: false
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}


//.                                           Login
 const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        };
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorect email or password",
                success: false
            });
        }
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: `Welcome ${user.name}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

//.                                      Logout
const logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully.",
        success: true
    })
}


//.                                      Bookmark
 const bookmark = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const user = await User.findById(loggedInUserId);
        if (user.bookmarks.includes(tweetId)) {
            // remove
            await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
            return res.status(200).json({
                message: "Removed from bookmarks."
            });
        } else {
            // bookmark
            await User.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: tweetId } });
            return res.status(200).json({
                message: "Saved to bookmarks."
            });
        }
    } catch (error) {
        console.log(error);
    }
};

//.                                     My Profile
const getMyProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).select("-password");
        return res.status(200).json({
            user,
        })
    } catch (error) {
        console.log(error);
    }
};

//.                                     OtherUser get
 const getOtherUsers = async (req,res) =>{ 
    try {
         const {id} = req.params;
         const otherUsers = await User.find({_id:{$ne:id}}).select("-password");
         if(!otherUsers){
            return res.status(401).json({
                message:"Currently do not have any users."
            })
         };
         return res.status(200).json({
            otherUsers
        })
    } catch (error) {
        console.log(error);
    }
}

//.                                     follow
const follow = async(req,res)=>{
    try {
        const loggedInUserId = req.body.id;    //me
        const userId = req.params.id;          // another user
        const loggedInUser = await User.findById(loggedInUserId);   // me
        const user = await User.findById(userId);          //anotheruser
        if(!user.followers.includes(loggedInUserId)){
            await user.updateOne({$push:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$push:{following:userId}});
        }else{
            return res.status(400).json({
                message:`User already followed to ${user.name}`
            })
        };
        return res.status(200).json({
            message:`${loggedInUser.name} just follow to ${user.name}`,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

//.                                     unfollow
const unfollow = async (req,res) => {
    try {
        const loggedInUserId = req.body.id; 
        const userId = req.params.id; 
        const loggedInUser = await User.findById(loggedInUserId);//patel
        const user = await User.findById(userId);//keshav
        if(loggedInUser.following.includes(userId)){
            await user.updateOne({$pull:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$pull:{following:userId}});
        }else{
            return res.status(400).json({
                message:`User has not followed yet`
            })
        };
        return res.status(200).json({
            message:`${loggedInUser.name} unfollow to ${user.name}`,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

const userController = {
    register,
    login,
    logout,
    bookmark,
    getMyProfile,
    getOtherUsers,
    follow,
    unfollow
}

module.exports = userController