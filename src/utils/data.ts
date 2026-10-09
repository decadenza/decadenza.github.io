/**
 * Decode from ASCII to string.
 * @param codes Array of ASCII condes.
 * @returns A string.
 */
function decodeAscii(codes: number[]): string {
    return String.fromCharCode(...codes);
}

export default (
    decodeAscii
)