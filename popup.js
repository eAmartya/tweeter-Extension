document.getElementById("postThread").addEventListener("click", function () {
  const inputText = document.getElementById("tweetInput").value;
  console.log(inputText);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, { text: inputText });
  });
});
