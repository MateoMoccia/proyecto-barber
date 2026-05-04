import {createFormService, deleteFormService, getFormByPhoneService, getAllFormsService} from "../services/form.service.js"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createForm = async (req,res) => {
    try {
const creatingForm = await createFormService (req.body)

res.status (201).json ({message: "El formulario ha sido completado y registrado con exito"})

    }
    catch (error) {
         if (error.message === "FORM_ALREADY_BUSY") {
        return res.status (409).json ({error: "El turno ya ha sido ocupado"})
    }
    res.status (500).json ({error: error.message})
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteForm = async (req,res) => {
    try {

const {id} = req.params

if (!id) { 
return res.status (400).json ({error: "El formulario no ha sido encontrado"})
}

const result = await deleteFormService (id)


res.status (200).json ({
    message: "El formulario ha sido encontrado y eliminado con exito",
    alreadyDeletedForm : result
})

    } catch (error) { 
        if (error.message === "THE_FORM_DOES_NOT_EXISTS") { 
            return res.status (404).json ({error: "El formulario no existe"})
        }
       res.status (500).json ({error: error.message})
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getAllForms = async (req,res) => {
    try {
 const forms = await getAllFormsService ()

 res.status (200).json ({
    message: "Aqui estan todos los formularios",
    listOfForms: forms
 })
    }
    catch (error) {
        res.status (500).json ({error: error.message})
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getFormByPhone = async (req,res) => {
    try {
        const {phone} = req.query

        if (!phone) {
            return res.status (400).json ({error: "El usuario no ha enviado el telefono"})
        }
        const getPhone = await getFormByPhoneService (phone)

        res.status (200).json ({
            message: "El formulario ha sido encontrado por su telefono",
            formFoundedByPhone: getPhone
        })
    }
    catch (error) {
        if (error.message === "THE_PHONE_WAS_NOT_FOUND") {
             return res.status (404).json ({error: "El numero de telefono no existe"})
        }
        res.status (500).json ({error: error.message})
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

