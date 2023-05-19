const { string, object, ref } = require('yup');

const createSchema = object().shape({
    firstName: string()
            .min(2, "this feild must be at least 2 characters long")
            .max(30, "this feild must be at most 30 character long")   
            .required('this feild must not be empty'),    
    lastName: string()
            .min(2, "this feild must be at least 2 characters long")
            .max(30, "this feild must be at most 30 character long")   
            .required('this feild must not be empty'),  
    email: string()
           .email("this field should be a valid email address")
           .required('this feild must not be empty'),
    password: string()
    .min(8,"password must be at least 8 characters long")
    .max(50,"password must be at most 50 characters long")
    .required('password will be required'),
    confirmPassword: string()
            .required("confirm password is required")
            .oneOf([ref['password'],null],"password and confirm password must be matched")
    
});

const userUpdateSchema = object().shape({
        firstName: string()
                .min(2, "this feild must be at least 2 characters long")
                .max(30, "this feild must be at most 30 character long")   
                .required('this feild must not be empty'),    
        lastName: string()
                .min(2, "this feild must be at least 2 characters long")
                .max(30, "this feild must be at most 30 character long")   
                .required('this feild must not be empty'),  
        
    });

module.exports.createSchema = createSchema;
module.exports.userUpdateSchema = userUpdateSchema;