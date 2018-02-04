"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heap = /** @class */ (function () {
    function Heap(isGreater) {
        this.a = [];
        this.isGreater = isGreater;
    }
    Heap.prototype.swap = function (i, j) {
        var t = this.a[i];
        this.a[i] = this.a[j];
        this.a[j] = t;
    };
    Heap.prototype.siftUp = function (i) {
        while (i > 0) {
            var parent_1 = (i - 1) >> 1;
            if (!this.isGreater(this.a[i], this.a[parent_1]))
                break;
            this.swap(i, parent_1);
            i = parent_1;
        }
    };
    Heap.prototype.siftDown = function (i) {
        while (true) {
            var left = (i << 1) + 1;
            if (left >= this.a.length)
                return;
            var right = left + 1;
            var greaterChild = right < this.a.length && this.isGreater(this.a[right], this.a[left]) ? right : left;
            if (!this.isGreater(this.a[greaterChild], this.a[i]))
                return;
            this.swap(greaterChild, i);
            i = greaterChild;
        }
    };
    Heap.prototype.push = function (x) {
        this.a.push(x);
        this.siftUp(this.a.length - 1);
    };
    Heap.prototype.isEmpty = function () {
        return this.a.length === 0;
    };
    Heap.prototype.size = function () {
        return this.a.length;
    };
    Heap.prototype.peek = function () {
        if (this.a.length === 0)
            throw new Error('Heap empty');
        return this.a[0];
    };
    Heap.prototype.pop = function () {
        if (this.a.length === 0)
            throw new Error('Heap empty');
        if (this.a.length === 1)
            return this.a.pop();
        var result = this.a[0];
        this.a[0] = this.a.pop();
        this.siftDown(0);
        return result;
    };
    Heap.prototype.clear = function () {
        this.a.length = 0;
    };
    return Heap;
}());
exports.Heap = Heap;
//# sourceMappingURL=heap.js.map