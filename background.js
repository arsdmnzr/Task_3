chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start_extraction") {
      const profileLink = "https://www.linkedin.com/feed/";
      chrome.tabs.create({ url: profileLink }, (tab) => {
          chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
              if (info.status === 'complete' && tabId === tab.id) {
                  chrome.tabs.onUpdated.removeListener(listener);
                  chrome.scripting.executeScript({
                      target: {tabId: tab.id},
                      file: 'content.js'
                  });
              }
          });
      });
  }
});
