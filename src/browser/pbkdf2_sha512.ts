export async function pbkdf2_sha512(key: string | Buffer, salt: string | Buffer, iterations: number, keyLen: number): Promise<Buffer> {
    const keyBuffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    const saltBuffer = typeof salt === 'string' ? Buffer.from(salt, 'utf-8') : salt;
    const pbkdf2_key = await window.crypto.subtle.importKey("raw", keyBuffer, { name: "PBKDF2" }, false, ["deriveBits"]);
    const derivedBits = await window.crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-512", salt: saltBuffer, iterations: iterations }, pbkdf2_key, keyLen * 8);
    return Buffer.from(derivedBits);
}