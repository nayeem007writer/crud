function validate(schema){

    function check(req, res, next){

        const promise = schema.validate(req.body, { abortEarly:false });
    
        promise
        .then(() =>{
            next();
        })
        .catch((err)=>{
            console.log(err);
            const errMsg = { 
                path:err.inner[0].path ,
                message:err.inner[0].message
            };

            res.status(400).send(errMsg);
        });
    }
    return check;
};

module.exports = validate;
/*
        const regesterSchema = object().shape({
        email: string()
               .email("this field should be a valid email address")
               .required('this feild must not be empty'),
        
        name: string()
                .min(2, "this feild must be at least 2 characters long")
                .max(30, "this feild must be at most 30 character long")   
                .required('this feild must not be empty'),    
    })
*/