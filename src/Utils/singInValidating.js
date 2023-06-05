export const validating = (information) => {
    const errors = {};

    if (!information.email.trim()) {
        errors.email = "Please complete email field";
    } else if (!/^\S+@\S+\.\S+$/.test(information.email)) {
    errors.email = "Please enter a valid email address";
  } else {
        delete errors.email;
    }

    if (!information.password.trim()) {
        errors.password = "Please enter a password";
    } else if (information.password.length < 6) {
        errors.password = "Password should be at least 6 characters long";
    } else {
        delete errors.password;
    }
    

    return errors;
}
