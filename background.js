// Add any background logic here, if necessary
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autoclick") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];

      chrome.tabs.sendMessage(activeTab.id, request, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        }

        if (response.success) {
          console.log("Auto click performed successfully.");
        } else {
          console.log("Failed to perform auto click.");
        }

        sendResponse(response);
      });
    });

    return true; // Required for async sendResponse
  }
});
