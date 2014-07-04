(function(Polymer) {
  'use strict';

  var calcPositionX = function (x) {
    var rect = this.getBoundingClientRect();
    var scrollLeft = document.documentElement.scrollLeft;

    var posX = Math.max(x, 0) - rect.left - scrollLeft;

    return posX / rect.width * this.max;
  };

  Polymer('spotify-progressbar', {
    ready: function() {
      this.onDragMove = this.onDragMove.bind(this);
      this.onDragEnd = this.onDragEnd.bind(this)
    },
    onClick: function(e) {
      this.value = calcPositionX.call(this, e.pageX);
      this.fire('change', this.value);
    },

    onDragStart: function() {
      this.fire('dragstart');
      this.classList.add('dragging');
      window.addEventListener('mousemove', this.onDragMove);
      window.addEventListener('mouseup', this.onDragEnd);
    },

    onDragEnd: function(e) {
      window.removeEventListener('mousemove', this.onDragMove);
      window.removeEventListener('mouseup', this.onDragEnd);
      this.classList.remove('dragging');
      this.fire('dragend');
      this.value = calcPositionX.call(this, e.pageX);
      this.fire('change', this.value);
    },

    onDragMove: function(e) {
      this.value = calcPositionX.call(this, e.pageX);
    }
  });

})(window.Polymer);
