function autoclick(element, delay, interval, maxClicks) {
  let clicks = 0;
  const intervalId = setInterval(() => {
    if (clicks >= maxClicks) {
      clearInterval(intervalId);
      return;
    }

    element.click();
    clicks++;
  }, interval);

  if (delay > 0) {
    setTimeout(() => {
      clearInterval(intervalId);
    }, delay);
  }
}
// Add a new function for dynamic cursor clicking
function dynamicAutoClick(clickRepeat, interval) {
  let clicks = 0;
  let clicking = false;

  document.addEventListener("mousemove", (event) => {
    if (!clicking) {
      clicking = true;
      setTimeout(() => {
        if (clicks >= clickRepeat) {
          clicking = false;
          return;
        }

        document.elementFromPoint(event.clientX, event.clientY).click();
        clicks++;
        clicking = false;
      }, interval);
    }
  });
}

// Update the onMessage listener to handle dynamic cursor clicking
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const {
    action,
    clickType,
    clickRepeat,
    targetPoint,
    xCoord,
    yCoord,
    startHotkey,
    stopHotkey,
    dynamicCursor,
  } = request;

  if (action === "autoclick") {
    if (dynamicCursor) {
      const interval = clickType === "double" ? 500 : 1000;
      dynamicAutoClick(clickRepeat, interval);
      sendResponse({ success: true });
    } else {
      const element = getTargetElement(targetPoint, xCoord, yCoord);
      const success = element !== null;

      if (success) {
        const delay = 0;
        const interval = clickType === "double" ? 500 : 1000;
        autoclick(element, delay, interval, clickRepeat);
      }

      sendResponse({ success });
    }
  }
});
function getTargetElement(targetPoint, xCoord, yCoord) {
  const target = targetPoint.toLowerCase();
  let element;

  if (target === "id") {
    element = document.getElementById(`${xCoord}`);
  } else if (target === "class") {
    element = document.getElementsByClassName(`${xCoord}`)[yCoord];
  } else if (target === "tag") {
    element = document.getElementsByTagName(`${xCoord}`)[yCoord];
  }

  return element;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const {
    action,
    clickType,
    clickRepeat,
    targetPoint,
    xCoord,
    yCoord,
    startHotkey,
    stopHotkey,
  } = request;

  if (action === "autoclick") {
    const element = getTargetElement(targetPoint, xCoord, yCoord);
    const success = element !== null;

    if (success) {
      const delay = 0;
      const interval = clickType === "double" ? 500 : 1000;
      autoclick(element, delay, interval, clickRepeat);
    }

    sendResponse({ success });
  }
});
