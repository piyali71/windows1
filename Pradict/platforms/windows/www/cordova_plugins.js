cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.microsoft.azure-mobile-services/www/MobileServices.Web.Ext.js",
        "id": "com.microsoft.azure-mobile-services.AzureMobileServices.Ext",
        "runs": true
    },
    {
        "file": "plugins/com.microsoft.azure-mobile-services/www/MobileServices.Web.js",
        "id": "com.microsoft.azure-mobile-services.AzureMobileServices",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/src/windows/InAppBrowserProxy.js",
        "id": "org.apache.cordova.inappbrowser.InAppBrowserProxy",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.microsoft.azure-mobile-services": "1.2.9",
    "org.apache.cordova.inappbrowser": "0.6.0"
}
// BOTTOM OF METADATA
});