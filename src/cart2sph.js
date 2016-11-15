const atan2 = Math.atan2;
const sqrt = Math.sqrt;

/*
 * https://au.mathworks.com/help/matlab/ref/cart2sph.html
 * azimuth: counterclockwise angle in the x-y plane
 * elevation: elevation from x-y plane
 * out: [azimuth, elevation, r]
 */

export default function cart2sph(out, a) {
  let x = a[0],
      y = a[1],
      z = a[2];

  out[0] = atan2(y, x),
  out[1] = atan2(z, sqrt(x*x + y*y)),
  out[2] = sqrt(x*x + y*y + z*z);

  return out;
}
