import {Router} from "express";
import {createForm,deleteForm,getAllForms,getFormByPhone} from "../controllers/form.controller.js"
const router = new Router ()

router.post ('/form',createForm)

router.get ('/getForms', getAllForms)

router.get ('/getFormByPhone', getFormByPhone)

router.delete ('/delete/:id', deleteForm)

