chrome.runtime.onMessage.addListener(function(obj, sender, response) {
    if (location.href != "https://www.google.com") {
        const { block, url, whitelist, t } = obj;
        console.log(url);
        console.log(block);
        console.log(whitelist);
        if (block) {
            location.href = 'https://www.google.com';
        }
        console.log(location.href);
        console.log(`program completed in ${Date.now() - t} milliseconds`);
    }
});

