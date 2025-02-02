import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: false,
	},
	lastName: {
		type: String,
		required: false,
	},
	dateOfBirth: {
		type: String,
		required: false,
	},
	maritalStatus: {
		type: String,
		required: false,
	},
	churchAffiliation: {
		type: String,
		required: false,
	},
	phoneNumber: {
		type: String,
		//Optional validation using a regular expression
		match: [/^\+?[\d\s-]+$/, 'Please enter a valid phone number'],
		required: false,
		trim: true,
	},
	state: {
		type: String,
		required: false,
	},
	city: {  
		type: String,
		required: false,
	},
	zipCode: {
		type: Number,
		required: false,
	},
	isEmailVerified: {
		type: Boolean,
		default: false,
	},
	verificationToken: String,
	verificationTokenExpiry: Date,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;