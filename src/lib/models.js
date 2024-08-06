import mongoose from 'mongoose';

const registrationFormSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    mobile: String,
    technology: String,
    joiningDays: String,
    jobTitle: String,
    preferredLocation: String,
    fileLink : String,
    ndaCheck : Boolean,         
    userType: {
        type: String,
        enum: ['individual', 'company'],
        required: true
    },
    companyName: {
        type: String,
        required: function() {
            return this.userType === 'company';
        }
    }
});

const newsletterSchema = new mongoose.Schema({
    email: String
});

const contactUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    service: String,
    message: String
});

export const RegistrationForm = mongoose.models?.RegistrationForm || mongoose.model('RegistrationForm', registrationFormSchema);
export const Newsletter = mongoose.models?.Newsletter || mongoose.model('Newsletter', newsletterSchema);
export const ContactUs = mongoose.models?.ContactUs || mongoose.model('ContactUs', contactUsSchema);
