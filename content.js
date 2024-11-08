console.log("Content script loaded");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const tweets = splitIntoTweets(request.text);
  postTweets(tweets);
});

function splitIntoTweets(text) {
  // Split text into tweets of max 280 characters
  return text.match(/.{1,280}/g);
}

function postTweets(tweets) {
  tweets.forEach((tweet, index) => {
    setTimeout(() => {
      // Simulate typing and posting each tweet
      const tweetBox = document.querySelector('div[contenteditable="true"]');
      const tweetButton = document.querySelector(
        'div[data-testid="tweetButton"]'
      );

      if (tweetBox && tweetButton) {
        tweetBox.innerText = tweet;
        tweetBox.dispatchEvent(new Event("input", { bubbles: true })); // Trigger input event

        tweetButton.click();
      }
    }, index * 3000); // Delay to mimic human interaction
  });
}
