const Users = require("../models/users");
const { id } = require("../schemas/signUp");

const findById = async(id) => {
    try {
        const user = await Users.findById(id);
        return user;
    } catch (err) {
        return "User is not found"
    }
}

const findAll = async() => {
    return await Users.find();
}

const updatePass = async(updateUserpass) => {
    // to upate pass
    const { _id, oldpassword, newpassword, confirmNewpass } = updateUserpass;
    const updateUserpassnew = await Users.findByIdAndUpdate(_id, {
        oldpassword: oldpassword,
        newpassword: newpassword,
        confirmNewpass: confirmNewpass,
    });
    return {
        success: true,
        message: "You updated your password!",
        data: updateUserpassnew,
    };
}

const update = async(updateUserinfo) => {
    // to info user
    const { _id, firstName, lastName, phone } = updateUserinfo;

    let updateUserInfo = await Users.findById(_id);

    if (firstName) updateUserInfo.firstName = firstName
    if (lastName) updateUserInfo.lastName = lastName
    if (phone) updateUserInfo.phone = phone

    await updateUserInfo.save();

    return {
        success: true,
        message: "Now Store is updated",
        data: updateUserInfo,
    };
}

const remove = async(id) => {
    const removeUser = await Users.findByIdAndRemove(id);
    console.log("Removed");
    return {
        success: true,
        message: "Users is delete successfull",
        data: removeUser,
    };
}

module.exports = {
    findById,
    updatePass,
    update,
    remove,
    findAll
}