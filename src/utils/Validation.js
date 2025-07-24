export const isValidEmailPass = (email, password, fullName) => {

    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    const isFullName = /^(?=.{4,32}$)(?![_.-])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$/.test(fullName);

    if (!isEmail) return "Email is not valid";

    if (!isPassword) return "Password is not valid";


    if (!isFullName) return "username is not valid";

    else return null;


}