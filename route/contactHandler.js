const express = require("express")
const mongoose = require("mongoose")
const router = express.Router();
const contactSchema = require("../schema/contactSchema")

const Contact = new mongoose.model("Contact", contactSchema)

//GET all contacts
router.get('/', async(req,res)=>{
	
})

//GET a contact by ID
router.get('/:id', async(req,res)=>{
	
})

//POST todo
router.post('/', async(req,res)=>{
	const newContact = new Contact(req.body);
	await newContact.save((err)=>{
		if(err){
			res.status(500).json({
				error: "There is server error!"
			});
		}else {
			res.status(200).json({
				message: "Contact was inserted successfully"
			});
		}
	})
})

//POST todo all 
router.post('/all', async(req,res)=>{
	
})

//UPDATE todo
router.put('/:id', async(req,res)=>{
	
})

//DELETE todo
router.delete('/:id', async(req,res)=>{
	
})

module.exports = router;