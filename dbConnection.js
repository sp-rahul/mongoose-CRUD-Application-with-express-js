const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

const dbConnection = async =>{
	try{
		await mongoose.connection("mongodb://127.0.0.1:27017/simple_crud",{
			useNewUrlParser: true
		});
		console.log('database connection successful');
		
	}catch(error){
		console.log(error.message);
	}
};
module.exports = dbConnection;

