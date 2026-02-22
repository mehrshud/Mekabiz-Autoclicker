// Get the input field for click delay
const clickDelayInput = document.getElementById('click-delay');

// Add event listener to update the click delay when the input field changes
(clickDelayInput !== null) && clickDelayInput.addEventListener('input', (e) => {
  // Update the click delay
  chrome.runtime.sendMessage({ action: 'updateClickDelay', delay: parseInt(e.target.value) });
});

// Send the message to the background script to update the click delay
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getClickDelay') {
    sendResponse({ delay: parseInt(clickDelayInput.value) });
  }
});