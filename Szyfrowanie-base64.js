
/*SZYFROWANIE*/

function encrypt(text) {
    return btoa(text);
}

/*ODSZYFROWYWANIE*/

function decrypt(text) {
    return atob(text);
}

/*UŻYCIE*/

let originalText = "hello world";
let encryptedText = encrypt(originalText);
console.log(encryptedText); // "aGVsbG8gd29ybGQ="
console.log(decrypt(encryptedText)); // "hello world"

