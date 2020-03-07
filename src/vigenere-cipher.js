class VigenereCipheringMachine {
    encrypt(plainStr, key) {
        if(!plainStr || !key) throw new Error();
        let numRept = Math.ceil(plainStr.length/key.length);
        const arrCodeStr = [...plainStr.toLowerCase()].map(val => val.charCodeAt(0));
        const arrCodeKey = [...key.repeat(numRept).toLowerCase()].map(val => val.charCodeAt(0));
        const encryptedArr = [];
        let j = 0;
        for(let i = 0; i < arrCodeStr.length; i++) {
            if(arrCodeStr[i] >= 97 && arrCodeStr[i] <= 122) {
                let temp = ((arrCodeStr[i] - 96) + (arrCodeKey[j]) - 96) % 26;
                (temp === 0) ? encryptedArr.push(121) : encryptedArr.push(temp + 95);
                j++;
            } else {
                encryptedArr.push(arrCodeStr[i]);
            }
        }
        return String.fromCharCode(...encryptedArr).toUpperCase();    
    }

    decrypt(cipher, key) {
        if(!cipher || !key) throw new Error();
        let numRept = Math.ceil(cipher.length/key.length);
        const arrCodeCipher = [...cipher.toLowerCase()].map(val => val.charCodeAt(0));
        const arrCodeKey = [...key.repeat(numRept).toLowerCase()].map(val => val.charCodeAt(0));
        const decryptedArr = [];
        let j = 0;
        for(let i = 0; i < arrCodeCipher.length; i++) {
            if(arrCodeCipher[i] >= 97 && arrCodeCipher[i] <= 122) {
                let sub = (arrCodeCipher[i] - 96) - (arrCodeKey[j] - 96);
                let temp;
                (sub > 0) ? temp = sub % 26 : temp = (sub + 26) % 26;
                (temp === 0) ? decryptedArr.push(97) : decryptedArr.push(temp + 97);
                j++;
            } else {
                decryptedArr.push(arrCodeCipher[i]);
            }
        }
        return String.fromCharCode(...decryptedArr).toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
