export default function(user){
    let errors = {};
    if(!user.firstname)
        errors.firstname = 'First name is required';
    else if(user.firstname.length > 50)
        errors.firstname = 'First name length must be less than 50 characters';

    if(!user.lastname)
        errors.lastname = 'Last name is required';
    else if(user.lastname.length > 50)
        errors.lastname = 'Last name length must be less than 50 characters';

    
    if(!user.password)
        errors.password = 'Password is required';
    else if(user.password.length < 6)
        errors.password = 'Password length must be at least 6 characters';

    if(user.password !== user.password2)
        errors.password2 = "Passwords didn't match";

    if(!user.mail)
        errors.mail = 'Email is required';
    else if(!isValidMail(user.mail))
        errors.mail = 'Email not valid';

    let isValid = Object.keys(errors).length == 0;
    return {isValid, errors};
};

function isValidMail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}