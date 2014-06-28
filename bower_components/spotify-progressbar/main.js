(function(Polymer) {
  'use strict';

  var calcElementOffsetX = function (element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = document.documentElement.scrollLeft;
    return rect.left + scrollLeft;
  };

  Polymer('spotify-progressbar', {
    onClick: function(e, detail, sender) {
      var posX = Math.max(e.pageX, 0) - calcElementOffsetX(sender);
      this.value = posX / sender.offsetWidth * this.max;

      this.fire('change', this.value);
    }
  });

})(window.Polymer);
