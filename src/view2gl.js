export default function view2gl(out, width, height, p2dView) {
  out[0] = 2.0 * p2dView[0] / width - 1;
  out[1] = -2.0 * p2dView[1] / height + 1;
  out[2] = p2dView[2];

  return out;
}
