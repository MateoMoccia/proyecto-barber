import { formDAO } from "../dao/form.dao";

export const createFormService =  async (formData) => {
    const {name, phone, service, date, time} = formData 
    
    const formAlreadyBusy = await formDAO.getFormByTimeAndDate (time, date)
    
    if (formAlreadyBusy) {
        throw new Error ("FORM_ALREADY_BUSY")
    }

    const newForm = {
        ...formData
    }

    return await formDAO.createForm (newForm)
}

export const getAllFormsService = async () => { 
    const forms = await formDAO.getAllForms ()
    return forms
}

export const deleteFormService = async (id) => { 
  
    const deletedForm = await formDAO.deleteForm (id)
    if (deletedForm === null) {
        throw new Error ("THE_FORM_DOES_NOT_EXISTS")
    }
    return deletedForm
}

export const getFormByPhoneService = async (phone) => {  
    const formByPhone = await formDAO.getFormByPhone (phone)
    if (formByPhone === null) {
        throw new Error ("THE_PHONE_WAS_NOT_FOUND")
    }
    return formByPhone
}

