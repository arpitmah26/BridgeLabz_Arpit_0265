


// BAD: High-level class depends on a low-level class
class EmailService {
    send(email) {
      console.log(`Sending email to ${email}`);
    }
  }
  
  class Notification {
    constructor() {
      this.emailService = new EmailService();
    }
  
    notify(email) {
      this.emailService.send(email);
    }
  }
  
  // Usage
  const notification = new Notification();
  notification.notify('user@example.com');
  




  
  // Solution with DIP: Depend on abstractions (interfaces)
  class EmailService {
    send(email) {
      console.log(`Sending email to ${email}`);
    }
  }
  
  class SMSService {
    send(email) {
      console.log(`Sending SMS to ${email}`);
    }
  }
  
  class Notification {
    constructor(messagingService) {
      this.messagingService = messagingService;
    }
  
    notify(email) {
      this.messagingService.send(email);
    }
  }
  
  // Usage with Dependency Injection
  const emailService = new EmailService();
  const smsService = new SMSService();
  
  const emailNotification = new Notification(emailService);
  emailNotification.notify('user@example.com');
  
  const smsNotification = new Notification(smsService);
  smsNotification.notify('user@example.com');
  