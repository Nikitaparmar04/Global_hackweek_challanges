function evaluatePasswordStrength(password) {
    // Define a set of criteria for password strength
    const minLength = 8;
    const minUpperCase = 1;
    const minLowerCase = 1;
    const minDigits = 1;
    const minSpecialChars = 1;
  
    // Check the length of the password
    if (password.length < minLength) {
      return 'Password should be at least ' + minLength + ' characters long.';
    }
  
    // Check for uppercase letters
    const upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(password)) {
      return 'Password should contain at least ' + minUpperCase + ' uppercase letter.';
    }
  
    // Check for lowercase letters
    const lowerCaseRegex = /[a-z]/;
    if (!lowerCaseRegex.test(password)) {
      return 'Password should contain at least ' + minLowerCase + ' lowercase letter.';
    }
  
    // Check for digits
    const digitsRegex = /[0-9]/;
    if (!digitsRegex.test(password)) {
      return 'Password should contain at least ' + minDigits + ' digit.';
    }
  
    // Check for special characters
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharsRegex.test(password)) {
      return 'Password should contain at least ' + minSpecialChars + ' special character.';
    }
  
    // Password meets all the criteria
    return 'Password strength is strong.';
  }
  
  // Usage example
  const password = 'MySecureP@ssw0rd';
  const strength = evaluatePasswordStrength(password);
  console.log(strength);
  