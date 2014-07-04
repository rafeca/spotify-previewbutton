(function(Polymer) {
  'use strict';

  var fetchData = function (uri, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/tracks/' + uri.split(':').pop());

    xhr.onload = function (evt) {
      callback(evt.target.status >= 400, JSON.parse(this.response));
    };

    xhr.send();
  };

  Polymer('spotify-previewbutton', {
    uriChanged: function () {
      this.loading = true;

      fetchData(this.uri, function (err, data) {
        this.playing = false;
        this.songTitle = data.name;
        this.author = data.artists[0].name;
        this.images = JSON.stringify(data.album.images);
        this.audio = data.preview_url;
        this.currentTime = 0;
        this.duration = 30;
        this.loading = false;
      }.bind(this));
    },

    togglePlay: function () {
      var elem = this.$.audio;
      if (elem.paused) {
        elem.play();
      } else {
        elem.pause();
      }
    },

    onPlayChange: function (e, detail, sender) {
      this.playing = !sender.paused;
    },

    onPlayProgress: function (e, detail, sender) {
      if (!this.dragging) {
        this.currentTime = sender.currentTime;
        this.duration = sender.duration;
      }
    },

    onProgressChanged: function (e, detail) {
      this.$.audio.currentTime = detail;
    },

    onProgressDrag: function () {
      this.dragging = true;
    },

    onProgressDragEnd: function () {
      this.dragging = false;
    }

  });

})(window.Polymer);
