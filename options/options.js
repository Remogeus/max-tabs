/*global browser */
function saveOptions(e) {
  let maxTabs = document.getElementById("max-tabs").value;
  let includePinned = document.getElementById("include-pinned").checked;
  let currentWindow = document.getElementById("current-window").checked;
  browser.storage.sync.set({
    maxTabs: maxTabs,
    includePinned: includePinned,
    currentWindow: currentWindow,
  });
  e.preventDefault();
}

function restoreOptions() {
  let gettingItem = browser.storage.sync.get({
    maxTabs: 10,
    includePinned: false,
    currentWindow: true
  });
  gettingItem.then((res) => {
    document.getElementById("max-tabs").value = res.maxTabs;
    document.getElementById("include-pinned").checked = res.includePinned;
    document.getElementById("current-window").checked = res.currentWindow;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
