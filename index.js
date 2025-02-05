const bits = new Uint32Array(1);

// Van der Corput radical inverse
function radicalInverse(i) {
  bits[0] = i;
  bits[0] = ((bits[0] << 16) | (bits[0] >> 16))>>>0;
  bits[0] = ((bits[0] & 0x55555555) << 1) | ((bits[0] & 0xAAAAAAAA) >>> 1) >>>0;
  bits[0] = ((bits[0] & 0x33333333) << 2) | ((bits[0] & 0xCCCCCCCC) >>> 2) >>>0;
  bits[0] = ((bits[0] & 0x0F0F0F0F) << 4) | ((bits[0] & 0xF0F0F0F0) >>> 4) >>>0;
  bits[0] = ((bits[0] & 0x00FF00FF) << 8) | ((bits[0] & 0xFF00FF00) >>> 8) >>>0;
  return bits[0] * 2.3283064365386963e-10; // / 0x100000000 or / 4294967296
}

function hammersley(i, n) {
  return [i / n, radicalInverse(i)];
}

export { radicalInverse };
export default hammersley;
