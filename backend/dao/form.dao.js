import FormModel from "../config/models/form.model";
/////////////////////////////////////////////////////////////////////

export class FormDAO {
 async createForm (formData) {
    const turno = new FormModel(FormData);
    return await turno.save ()
}
/////////////////////////////////////////////////////////////////////

 async getAllForms  () {
    return await FormModel.find();
}  
/////////////////////////////////////////////////////////////////////
async getFormByPhone (phone)  { 
    return await FormModel.findOne({phone: phone});
}
/////////////////////////////////////////////////////////////////////
async getFormByTimeAndDate (time, date) {
    return await FormModel.findOne ({time: time, date: date})
}
/////////////////////////////////////////////////////////////////////

 async getFormById  (id)  {
    return await FormModel.findById(id);
}
/////////////////////////////////////////////////////////////////////
 async deleteForm (id)  {   
    return await FormModel.findByIdAndDelete(id);
}}


export const formDAO = new FormDAO ()