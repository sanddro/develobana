export default function(user){
    let errors = {};

    if(!user.mail)
        errors.mail = 'Email is required';
    else if(!isValidMail(user.mail))
        errors.mail = 'Email not valid';

    if(!user.password)
        errors.password = 'Password is required';

    let isValid = Object.keys(errors).length == 0;
    return {isValid, errors};
};

function isValidMail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}