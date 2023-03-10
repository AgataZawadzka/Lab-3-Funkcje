
function generateSecurePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    let password = "";
    let characters = lowercase + uppercase + numbers + specialCharacters;

    for (let i = 0; i < 8; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}
