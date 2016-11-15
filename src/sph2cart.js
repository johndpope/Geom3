const sin = Math.sin;
const cos = Math.cos;

/*
 * https://au.mathworks.com/help/matlab/ref/cart2sph.html
 * azimuth: counterclockwise angle in the x-y plane
 * elevation: elevation from x-y plane
 * out: [x, y, z]
 */

export default function sph2cart(out, a) {
  let az = a[0],
      el = a[1],
      r  = a[2];

  out[0] = r * cos(el) * cos(az),
  out[1] = r * cos(el) * sin(az),
  out[2] = r * sin(el);

  return out;
}
