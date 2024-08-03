import CryptoJS from 'crypto-js';

const generateSecretKey = (telegramBotToken) => {
    return CryptoJS.HmacSHA256("WebAppData", telegramBotToken).toString(CryptoJS.enc.Hex);
};

const validate = (initData, secretKey) => {
    const { hash, ...data } = initData;
    const sortedData = Object.keys(data)
        .sort()
        .map(key => `${key}=${typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]}`)
        .join('\n');

    console.log('Sorted Data:', sortedData); // Verifică sortedData
    const dataCheck = CryptoJS.HmacSHA256(sortedData, secretKey).toString(CryptoJS.enc.Hex);

    console.log('Generated Hash:', dataCheck); // Verifică dataCheck
    console.log('Received Hash:', hash); // Verifică hash-ul primit

    return hash === dataCheck;
};

export {
    generateSecretKey,
    validate
}