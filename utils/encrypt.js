import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const secretKey = Buffer.from('94f1cbe03759a4ff9df4bcbad4c9ed429cae04f2a8a59ec33eb30c1537287e24', 'hex');
 // You can replace this with a fixed key stored in env
const iv = crypto.randomBytes(16);

export function encryptData(data) {
  const stringData = typeof data === 'string' ? data : JSON.stringify(data);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(stringData, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted,
  };
}



export function decryptData(encryptedData, key, iv) {
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
}

