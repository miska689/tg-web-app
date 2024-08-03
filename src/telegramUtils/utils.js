import CryptoJS from 'crypto-js';

const generateSecretKey = (telegramBotToken, c_str = "WebAppData") => {
    return CryptoJS.HmacSHA256(c_str, telegramBotToken).toString();
};

const validate = (initData, secretKey) => {
    const { hash, ...data } = initData;
    const sortedData = Object.keys(data).sort().map(key => `${key}=${data[key]}`).join('\n');
    const dataCheck = CryptoJS.HmacSHA256(sortedData, secretKey).toString();
    console.log(sortedData);
    console.log(dataCheck)
    console.log(hash)
    return hash === dataCheck;
};

export {
    generateSecretKey,
    validate
}