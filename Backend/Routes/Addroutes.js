import express from 'express'

import { CheckAvailability, Add, fetchData }  from '../Controller/Usercontroller.js';
const router=express.Router();
router.post('/add',Add)
router.post('/check',CheckAvailability)
router.get('/view',fetchData)
export  default router