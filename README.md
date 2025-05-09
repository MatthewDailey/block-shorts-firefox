# Block Shorts Firefox Extension

This Firefox extension redirects YouTube Shorts URLs to the standard YouTube video player interface.

## Features

- Automatically redirects any YouTube Shorts URL to the regular watch URL format
- Intercepts clicks on Shorts links and redirects them to the standard player
- Modifies Shorts links in the YouTube interface to point to the standard player

## Installation for testing

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on..."
4. Select any file in this extension folder

## Package and install permanently

Make sure you have the deps:
```
npm install --global web-ext
```

In your shell have 
```
MOZILLA_DEVELOPER=(JWT issuer)
MOZILLA_DEVELOPER_SECRET=(JWT secret)
```

To build an publish unlisted
```
./package.sh
```
In Firefox, go to `about:addons`

Click the ⚙️ gear icon → Install Add-on From File…

Download the approved version https://addons.mozilla.org/en-US/developers/addons