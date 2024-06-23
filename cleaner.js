main();

function main() {
    const baseUrl = window.location.href;
    const cleanUrl = removeQueryParameters(baseUrl);
    if (baseUrl !== cleanUrl) {
        location.replace(cleanUrl);
    }
}

function removeQueryParameters(url) {
    try {
        let parsedUrl = new URL(url);
        parsedUrl.search = "";
        return parsedUrl.toString();
    } catch (e) {
        return url.replace(/\?.*$/, "");
    }
}
