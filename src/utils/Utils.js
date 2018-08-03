import validator from 'email-validator';
import passwordSchema from './passwordSchema';

class Utils {
  static validatePassword(password) {
    if (password) {
      return passwordSchema.validate(password) ? null : 'You do not have strong password';
    }
    return 'You must enter passowrd';
  }

  static validateEmail(email) {
    console.log(email);
    if (email) {
      return validator.validate(email) ? null : 'Email not in correct format';
    }
    return 'You must enter email';
  }
}

export default Utils;
