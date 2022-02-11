module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username can not be empty';
    }
    if(email.trim() === ''){
        errors.email = 'Email can not be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be a valid email address';
        }
    }
    if(password === ''){
        errors.password = 'Password can not be empty'
    } else if(password!== confirmPassword){
        errors.confirmPassword = 'Passwords does not match';
    }
    return{
        errors,
        valid: Object.keys(errors).length < 1
    };
};

//Validate user data
module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim()=== ''){
        errors.username = 'Username can not be Empty';
    }
    if(password.trim() === ''){
        errors.password = 'Password can not be Empty';
    }
    return{
        errors,
        valid: Object.keys(errors).length < 1
    };
}