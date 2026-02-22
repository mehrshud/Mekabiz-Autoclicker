chrome.runtime.onInstalled.addListener(function () {
    chrome.commands.getAll(function (commands) {
      if (!commands.find((command) => command.name === 'toggle-autoclicker')) {
        chrome.commands.registerAll([
          {
            synchronous: false,
            name: 'toggle-autoclicker',
            description: 'Toggle autoclicker on/off',
          },
        ]);
      }
    });
  });

  chrome.commands.onCommand.addListener(function (command) {
    if (command === 'toggle-autoclicker') {
      chrome.runtime.sendMessage({ action: 'toggle-autoclicker' });
    }
  });