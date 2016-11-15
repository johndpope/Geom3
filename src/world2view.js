import {quat, vec3, vec4, mat3, mat4} from './dependencies';

import gl2view from './gl2view';

export default function world2view(
  out,
  matProj,
  matView,
  viewWidth,
  viewHeight,
  p3d
){
  let ptGL = vec3.transformMat4(
    [],
    p3d,
    mat4.multiply([], matProj, matView)
  );

  return gl2view(out, viewWidth, viewHeight, ptGL);
}
