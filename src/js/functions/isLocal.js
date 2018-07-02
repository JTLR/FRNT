export function isLocal() {
    return (
        window.location.href.indexOf("localhost") !== -1 ||
        window.location.href.indexOf("ngrok") !== -1
    );
}
