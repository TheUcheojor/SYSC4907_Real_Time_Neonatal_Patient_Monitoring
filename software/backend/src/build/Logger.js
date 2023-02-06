var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.info = function (msg) {
        var date = new Date();
        console.log("[INFO] ".concat(date.toJSON(), ": ").concat(msg));
    };
    Logger.prototype.warning = function (msg) {
        var date = new Date();
        console.log("[WARN] ".concat(date.toJSON(), ": ").concat(msg));
    };
    Logger.prototype.error = function (msg) {
        var date = new Date();
        console.log("[ERROR] ".concat(date.toJSON(), ": ").concat(msg));
    };
    return Logger;
}());
export default Logger;
