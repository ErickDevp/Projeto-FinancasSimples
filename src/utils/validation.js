
export const isFieldEmpty = (campo) => {
    return !!campo;
}

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isPasswordLengthValid = (password) => {
    return password.length >= 8;
};

export const isPasswordMatching  = (password, repeatedPassword) => {
    return password === repeatedPassword;
};

export const strengthenPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
};

/**
function strengthenPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    let strength = "Weak";
  
    if (isPasswordLengthValid &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar) {
      strength = "Strong";
    } else {
      strength = "Weak";
    }

    if(strength == "Weak") {
        if(hasUpperCase) {
            console.log("A senha precisa ter 1 carater maiusculo")
        }
        if(hasLowerCase) {
            console.log("A senha precisa ter 1 carater minusculo")
        }
        if(hasNumber) {
            console.log('A senha precisa ter 1 numero')
       }
        if(hasSpecialChar) {
            console.log("A senha precisa ter 1 carácter especia")
        }
    }

    return strength
  }
  
//isBlankField  - verificar se o input ta vazio
 */
