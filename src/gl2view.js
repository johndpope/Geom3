export default function gl2view(out, width, height, p2dGL) {
  out[0] = (p2dGL[0] + 1) / 2.0 * width;
  out[1] = (p2dGL[1] - 1) / -2.0 * height;
  out[2] = p2dGL[2];

  return out;
}
