import { CONSTANT } from '../constants';

export default function(target) {
  target.prototype.bindWindowListeners = function() {
    window.removeEventListener(CONSTANT.RESIZE, target.prototype.onResize);
    window.addEventListener(CONSTANT.RESIZE, target.prototype.onResize, false);
  };

  target.prototype.unbindWindowListeners = function() {
    window.removeEventListener(CONSTANT.RESIZE, target.prototype.onResize);
  };
}
