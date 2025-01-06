// 1. Single Responsibility Principle (SRP)
// A class or function should have only one responsibility.


//Bad: one class doing multiple thingd
class UserManager{
    createUser(userData){
        //logic to create user
        console.log('Creating User:', userData);
        
    }

    sendEmail(email){
        //logic to send email
        console.log('Sending email:', email);
        
    }
}


//Solution is to split responsibilities into separate classes

class UserManager {
    createUser(userData) {
      console.log('Creating user:', userData);
    }
  }
  
  class EmailService {
    sendEmail(email) {
      console.log('Sending email:', email);
    }
}

const UserManager  =new UserManager();
UserManager.createUser({name: 'Arpit', email: 'arpit@gmail.com'});

const emailService =new EmailService();
emailService.sendEmail('arpit@email.com');
  