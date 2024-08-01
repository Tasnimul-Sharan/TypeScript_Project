// 1. Form Validation
// Problem You need to validate a user registration form to ensure that all required fields are filled out correctly.

interface FormData {
    username: string;
    email: string;
    password: string;
  }
  
  function validateForm(data: FormData): string[] {
    const errors: string[] = [];
  
    if (!data.username) {
      errors.push("Username is required");
    }
    if (!data.email) {
      errors.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.push("Email is invalid");
    }
    if (!data.password) {
      errors.push("Password is required");
    } else if (data.password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }
  
    return errors;
  }
  
  // const formData: FormData = { username: "", email: "test@example", password: "123" };
  // console.log(validateForm(formData)); // ["Username is required", "Email is invalid", "Password must be at least 6 characters long"]
  