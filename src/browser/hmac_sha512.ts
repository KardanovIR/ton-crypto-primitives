/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export async function hmac_sha512(key: string | Buffer, data: string | Buffer): Promise<Buffer> {
    let keyBuffer: Buffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    let dataBuffer: Buffer = typeof data === 'string' ? Buffer.from(data, 'utf-8') : data;
    const hmacAlgo = { name: "HMAC", hash: "SHA-512" };
    const hmacKey = await window.crypto.subtle.importKey("raw", keyBuffer, hmacAlgo, false, ["sign"]);
    return Buffer.from(await crypto.subtle.sign(hmacAlgo, hmacKey, dataBuffer));
}