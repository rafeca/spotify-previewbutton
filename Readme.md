# Spotify Polymer Element

This is an example of a [Polymer Web Component](www.polymer-project.org) that implements
a simple widget for previewing Spotify tracks.

It uses the new [Spotify Web API](https://developer.spotify.com/spotify-web-api/)
to get the track metadata, cover art and the preview MP3 file.

## Usage

You just need to include the polymer platform and this element in the head of
your html page.

Then, you can start using the `spotify-previewButton` element as any other HTML element
in your page:

```html
<html>
<head>
  <script type="text/javascript" src="bower_components/platform/platform.js"></script>

  <link rel="import" href="bower_components/spotify-previewButton/index.html">
</head>
<body>
  <spotify-previewButton uri="spotify:track:0eGsygTp906u18L0Oimnem"></spotify-previewButton>
</body>
</script>
```
