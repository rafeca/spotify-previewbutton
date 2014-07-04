(function(Polymer) {
  'use strict';

  var interval = null;
  Polymer('spotify-coverart', {
    imagesChanged: function () {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }

      if (this.images) {
        try {
          var images = JSON.parse(this.images);
          var that = this;

          // todo: once we have loaded a large one maybe it doesn't make sense to try to load
          // a smaller one, since that incurs in an extra request and the quality won't be
          // better than the one provided by the larger image

          var findRightImage = function() {
            var targetWidth = that.offsetWidth * window.devicePixelRatio,
                targetHeight = that.offsetHeight * window.devicePixelRatio;

            if (targetWidth === 0 || targetHeight === 0) {
              return;
            }
            
            var cover = images[0].url;
            for (var i=1; i<images.length; i++) {
              if (images[i].width >= targetWidth && images[i].width >= targetHeight) {
                cover = images[i].url;
              }
            }
            that.cover = cover;
          };
          interval = setInterval(findRightImage, 200);
          findRightImage();
        } catch (e) {
          console.error(e);
        }
      }
    }
  });

})(window.Polymer);
