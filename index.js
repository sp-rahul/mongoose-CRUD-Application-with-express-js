const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//const contactHandler = require("./route/contactHandler")
const { Schema } = mongoose;
const contactSchema = new Schema({
 name: String, 
 phone: String
 
});

//const Contact = new mongoose.model("Contact", contactSchema)

const Contact = mongoose.model('contact', contactSchema);

const app = express();
const port = 5000;

app.use(bodyParser.json());

const dbConnection = async()=>{
try {
	console.log('checking connection ...')
	  await mongoose.connect('mongodb://127.0.0.1:27017/dbContact');
	  console.log('DB connected Successfully');
	} catch (error) {
	  console.log(error.message);
}
}
dbConnection();

//app.get('/contact',(req, res)=> {
	
	//res.send('Hello man');
	// res.sendFile( 'D:/Ruhul/Back End/anserVai/crud' + '/index.html')
//});

app.post ('/',async(req, res)=> {
	try{
	 // const newContact = new Contact(req.body);
	 
     const newContact = new Contact({
		 name: req.body.name,
		 phone: req.body.phone
	 });
	 
	 
	 const doc = await newContact.save();
	  console.log("success")
	  if(doc){
		   res.send({data: doc})
	  }else {
		   throw new e("myException"); 
	  }		
	}catch (error){
		throw error;
	}	
});



//app.use('/contact', contactHandler);

// app.post("/",async(req,res)=>{
	// const newContact = new Contact(req.body);
	// await newContact.save(err)=>{
		// if(err){
			// res.status(500).json({
				// error: "serveer error",
			// })
		// } else {
			// res.status(200).json({
				// message: "succsessful inserted",
			// })
		// }
	// }
// })



//get data 
app.get('/all', async (req, res) => {
	res.send(req.params)
})

//get all  data
app.get('/', async (req, res) => {
	try{
		const data = await Contact.find();
		res.status(200).json(data);
		
	}catch(error){
		console.log(error)
		
	}
})

// GET element by :id

app.get('/:id', async (req, res) => {
	try{
		const id = req.params.id;
		const data = await Contact.findById(id);
		res.status(200).json(data);
		
	}catch(error){
		console.log(error)
		
	}
})

// Update data
app.put('/:id', async (req, res) => {
	try{
		const id = req.params.id;
		const data = req.body;
	const options ={new: true};
		const result = await Contact.findByIdAndUpdate(id,data,options);
		res.status(200).json(result);
		
	}catch(error){
		console.log(error)
		//res.status(500).json(error: error.message)
		
		
	}
})


// delete
app.delete('/:id', async (req, res) => {
	try{
		const id = req.params.id;
		const result = await Contact.findByIdAndDelete(id);
		res.status(200).json({message: "Deletes Successfully"});
		
	}catch(error){
		console.log(error)
		//res.status(500).json(error: error.message)
		
		
	}
})

 
function errorHandler(err, req, res, next){
	if(res.headersSent) {
		return next(err);
	}
}

app.listen(port,()=>{
	console.log(`Port run at ${port}`)
})