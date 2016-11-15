import {quat, vec3, vec4, mat3, mat4} from './dependencies';

import view2gl from './view2gl';

export default function view2world(
  out,
  matProj,
  matView,
  viewWidth,
  viewHeight,
  p2d
) {
  let matInv = mat4.invert([], mat4.multiply([], matProj, matView));
  let ptGL = view2gl([], viewWidth, viewHeight, p2d);

  return vec3.transformMat4(out, ptGL, matInv);
}
