import moongoose from 'mongoose';

const formSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    service: {  
        type: String,   
        required: true
    },      
    createdAt: {
        type: Date,
        default: Date.now
    },
    date: {
        type: String,
        required: true  
    },
    time: {
        type: String,
        required: true
    }
    
})

export const FormModel = moongoose.model ('Form', formSchema)
