module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return 1 + (Array.isArray(arr) ? arr.reduce((max, item) => Math.max(max, this.calculateDepth(item)), 0) : -1);
    }
};