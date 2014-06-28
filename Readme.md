# Spotify Polymer Element

This is an example of a [Polymer Web Component](www.polymer-project.org) that implements
a simple widget for previewing Spotify tracks.

It uses the new [Spotify Web API](https://developer.spotify.com/spotify-web-api/)
to get the track metadata, cover art and the preview MP3 file.

## Usage

You just need to include the polymer platform and this element in the head of
your html page.

Then, you can start using the `spotify-previewbutton` element as any other HTML element
in your page:

```html
<html>
<head>
  <script type="text/javascript" src="bower_components/platform/platform.js"></script>

  <link rel="import" href="bower_components/spotify-previewbutton/index.html">
</head>
<body>
  <spotify-previewbutton uri="spotify:track:0eGsygTp906u18L0Oimnem"></spotify-previewbutton>
</body>
</script>
```

## Running the example

To launch the example, install the `spotify-previewbutton` bower component:

```sh
$ bower install spotify-previewbutton
```

Then launch a web server:

```sh
$ ruby -run -e httpd . -p 5000 # "python -m SimpleHTTPServer 5000" will also do the trick
```

Then, you only need to navigate to [http://localhost:5000/bower_components/spotify-previewbutton/demo.html](http://localhost:5000/bower_components/spotify-previewbutton/demo.html) from any modern browser.
