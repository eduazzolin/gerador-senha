import CryptoJS from 'crypto-js';

export const url: string = 'http://192.168.0.4:8080';

export function criptografarSenha(senha) {
  var hash = CryptoJS.SHA256(senha);
  return hash.toString(CryptoJS.enc.Hex);
}