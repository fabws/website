var isIe = window.navigator.userAgent.indexOf("Trident") > -1;

if (isIe && (sessionStorage === undefined || !sessionStorage.getItem("hasSeenIEPopup"))) {
    alert("Flera funktioner på denna sidan fungerar inte med Internet Explorer, överväg att använda exempelvis Mozilla Firefox eller Google Chrome istället.");
    sessionStorage.setItem("hasSeenIEPopup", true);
}