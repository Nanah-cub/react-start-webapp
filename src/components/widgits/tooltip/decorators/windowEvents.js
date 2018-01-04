/**
 * Events that should be bound to the window
 */
import CONSTANT from '../constants';

export default function(target) {
  target.prototype.bindWindowEvents = resizeHide => {
    // ReactTooltip.hide
    window.removeEventListener(CONSTANT.HIDE, this.globalHide);
    window.addEventListener(CONSTANT.HIDE, this.globalHide, false);

    // ReactTooltip.rebuild
    window.removeEventListener(CONSTANT.REBUILD, this.globalRebuild);
    window.addEventListener(CONSTANT.REBUILD, this.globalRebuild, false);

    // ReactTooltip.show
    window.removeEventListener(CONSTANT.SHOW, this.globalShow);
    window.addEventListener(CONSTANT.SHOW, this.globalShow, false);

    // Resize
    if (resizeHide) {
      window.removeEventListener('resize', this.onWindowResize);
      window.addEventListener('resize', this.onWindowResize, false);
    }
  };

  target.prototype.unbindWindowEvents = () => {
    window.removeEventListener(CONSTANT.HIDE, this.globalHide);
    window.removeEventListener(CONSTANT.REBUILD, this.globalRebuild);
    window.removeEventListener(CONSTANT.SHOW, this.globalShow);
    window.removeEventListener('resize', this.onWindowResize);
  };

  /**
   * invoked by resize event of window
   */
  target.prototype.onWindowResize = () => {
    if (!this.mount) return;
    console.log('resize');
  };
}
