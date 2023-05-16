document.addEventListener("DOMContentLoaded", () => {
  const clickType = document.getElementById("clickType");
  const clickRepeat = document.getElementById("clickRepeat");
  const targetPoint = document.getElementById("targetPoint");
  const xCoord = document.getElementById("xCoord");
  const yCoord = document.getElementById("yCoord");
  const startHotkey = document.getElementById("startHotkey");
  const stopHotkey = document.getElementById("stopHotkey");
  const recordButton = document.getElementById("record");
  const playButton = document.getElementById("play");
  const startButton = document.getElementById("start");
  const dynamicCursor = document.getElementById("dynamicCursor");

  startButton.addEventListener("click", () => {
    const clickTypeValue = clickType.value;
    const clickRepeatValue = parseInt(clickRepeat.value, 10);
    const targetPointValue = targetPoint.value;
    const xCoordValue = parseInt(xCoord.value, 10);
    const yCoordValue = parseInt(yCoord.value, 10);
    const startHotkeyValue = startHotkey.value.trim();
    const stopHotkeyValue = stopHotkey.value.trim();
    const dynamicCursorValue = dynamicCursor.checked;

    if (
      isNaN(clickRepeatValue) ||
      isNaN(xCoordValue) ||
      isNaN(yCoordValue) ||
      !startHotkeyValue ||
      !stopHotkeyValue
    ) {
      alert("Please enter valid values for all fields.");
      return;
    }

    // You can send a message to your background script or content script here with this information.
    // For example:
    chrome.runtime.sendMessage({
      action: "autoclick",
      clickType: clickTypeValue,
      clickRepeat: clickRepeatValue,
      targetPoint: targetPointValue,
      xCoord: xCoordValue,
      yCoord: yCoordValue,
      startHotkey: startHotkeyValue,
      stopHotkey: stopHotkeyValue,
      dynamicCursor: dynamicCursorValue,
    });

    window.close();
  });

  // Add event listeners for the record and play buttons if needed.
  recordButton.addEventListener("click", () => {
    // Logic for recording clicks
  });

  playButton.addEventListener("click", () => {
    // Logic for playing clicks
  });
});
