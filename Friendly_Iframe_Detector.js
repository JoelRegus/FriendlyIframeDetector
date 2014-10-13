/***************************************************
 * Friendly Iframe Detector
 *
 * A friendly iframe is an iframe that shares
 * the same domain as the parent site. Unfriendly
 * iframes do not, and will not allow you to access
 * their contents from outside the iframe.
 *
 * Place the following code in the console.
 *
 * Unfriendly iframes will be outlined in red.
 * Friendly iframes will be outlined in green.
 *
 * @author Joel Regus
 **************************************************/

(function() {
    var iframeArray = document.getElementsByTagName('iframe'),
        iframeArrayLen = iframeArray.length,
        domain = document.domain,
        currentIframe = 0,
        i = 0;


    function friendlyIframe() {
        iframeArray[currentIframe].style.outline = "solid #00FF00";
        console.log(currentIframe + ". Friendly Iframe" );
    }

    function unfriendlyIframe() {
        iframeArray[currentIframe].style.outline = "solid #FF0000";

        console.log(currentIframe + ". Unfriendly Iframe" );
    }


    while (i < iframeArrayLen) {
        try {
            if (iframeArray[i].contentWindow.document.domain === domain) {
                friendlyIframe();
                currentIframe += 1;
                i++;
            }
        } catch (e) {
            unfriendlyIframe();
            currentIframe += 1;
            i++;
        }
    }


    console.log("\nIframes:");
    console.log(iframeArray);
}());
