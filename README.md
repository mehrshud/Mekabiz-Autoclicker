# Mekabiz Autoclicker Chrome Extension
![Mekabiz Autoclicker Logo](./icon.png)

Mekabiz Autoclicker is a simple yet powerful Chrome extension designed to automate mouse clicks on websites. It provides multiple customization options, including dynamic cursor location, allowing users to set up clicks precisely where and how they want.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Technical Overview](#technical-overview)
- [Comparison with Other Autoclickers](#comparison-with-other-autoclickers)
- [Code Examples](#code-examples)
- [Troubleshooting](#troubleshooting)
- [Future Development](#future-development)

## Features

- Single and double-click options
- Custom click repetition
- Specific element targeting using CSS selectors, or x and y coordinates
- Customizable hotkeys for starting and stopping the autoclicker
- Dynamic cursor location: clicks follow the mouse movement
- Easy-to-use popup interface
- Ability to save and load custom click settings

## Installation

1. Download the latest release of Mekabiz Autoclicker from the [Releases](https://github.com/mehrshud/Mekabiz-Autoclicker.git) page.
2. Extract the ZIP file to a folder on your computer.
3. In Chrome, navigate to `chrome://extensions`.
4. Enable "Developer mode" in the top-right corner.
5. Click "Load unpacked" and select the folder where you extracted the extension files.
6. The Mekabiz Autoclicker extension should now be installed and available for use.

## Usage

1. Click the Mekabiz Autoclicker icon in the Chrome toolbar to open the popup.
2. Configure your click settings:
   - Choose between single or double-click.
   - Set the number of clicks to perform.
   - Specify the target element using a CSS selector, or x and y coordinates.
   - Enable or disable dynamic cursor location.
   - Set custom hotkeys for starting and stopping the autoclicker.
3. Click the "Start" button to begin the autoclicker.
4. Use the configured hotkeys to start and stop the autoclicker while browsing websites.

### Example Use Cases

* Automating clicks for online games or surveys
* Simulating user interactions for testing purposes
* Assisting users with disabilities

## Contributing

We welcome contributions to Mekabiz Autoclicker! Please feel free to submit issues for bug reports, feature requests, or improvements. If you'd like to contribute code, please fork the repository and submit a pull request.

## License

Mekabiz Autoclicker is licensed under the MIT License.

## Technical Overview

Mekabiz Autoclicker is built using JavaScript, HTML, and CSS. The extension uses the Chrome Extension API to interact with web pages and simulate mouse clicks.

### Architecture

```mermaid
graph LR
    A[Popup] -->|Configure Click Settings|> B[Background Script]
    B -->|Simulate Mouse Clicks|> C[Web Page]
    C -->|Receive Click Events|> B
    B -->|Update Click Settings|> A
```

## Comparison with Other Autoclickers

| Feature | Mekabiz Autoclicker | Autoclicker X | Autoclicker Y |
| --- | --- | --- | --- |
| Customizable Hotkeys | | | |
| Dynamic Cursor Location | | | |
| Specific Element Targeting | | | |
| Custom Click Repetition | | | |
| Easy-to-use Popup Interface | | | |

## Code Examples

### Simulating a Mouse Click
```javascript
// Get the target element
const targetElement = document.querySelector('#target-element');

// Simulate a mouse click
targetElement.dispatchEvent(new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  view: window,
  detail: 0,
  buttons: 1,
  clientX: 0,
  clientY: 0,
  ctrlKey: false,
  altKey: false,
  shiftKey: false,
  metaKey: false,
}));
```

### Configuring Click Settings
```javascript
// Get the click settings from storage
chrome.storage.local.get('clickSettings', (result) => {
  const clickSettings = result.clickSettings;

  // Configure the click settings
  if (clickSettings) {
    document.getElementById('click-type').value = clickSettings.clickType;
    document.getElementById('click-repetition').value = clickSettings.clickRepetition;
    document.getElementById('target-element').value = clickSettings.targetElement;
  }
});
```

## Troubleshooting

* If the autoclicker is not working, check that the extension is enabled and that the click settings are configured correctly.
* If the autoclicker is clicking too quickly or slowly, adjust the click repetition setting.
* If the autoclicker is not targeting the correct element, check that the target element is specified correctly using a CSS selector or x and y coordinates.

## Future Development

* Add support for more advanced click settings, such as randomizing the click location or delaying the click.
* Improve the popup interface to make it easier to configure click settings.
* Add support for other browsers, such as Firefox or Edge.

By following these steps and using the provided code examples, you should be able to create your own autoclicker extension using JavaScript and the Chrome Extension API. If you have any questions or need further assistance, please don't hesitate to ask.