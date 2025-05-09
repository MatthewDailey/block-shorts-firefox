# Block Shorts Firefox Extension

This Firefox extension redirects YouTube Shorts URLs to the standard YouTube video player interface.

## Features

- Automatically redirects any YouTube Shorts URL to the regular watch URL format
- Intercepts clicks on Shorts links and redirects them to the standard player
- Modifies Shorts links in the YouTube interface to point to the standard player

## Installation

1. Open Firefox and navigate to `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on..."
4. Select any file in this extension folder

## How it works

The extension uses two main approaches:
1. A background script that detects when a tab navigates to a Shorts URL and redirects it
2. A content script that intercepts clicks on Shorts links and modifies the DOM to convert Shorts links to regular video links

## Permissions

- `webRequest`: To monitor web requests to YouTube
- `tabs`: To redirect tabs when necessary
- Host permission for `*://www.youtube.com/*`: To operate on YouTube domains only 