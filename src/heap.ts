export class Heap<T> {
    private readonly a: T[];
    private readonly isGreater: (x: T, y: T) => boolean;
    constructor(isGreater: (x: T, y: T) => boolean) {
        this.a = [];
        this.isGreater = isGreater;
    }
    private swap(i: number, j: number) {
        const t = this.a[i];
        this.a[i] = this.a[j];
        this.a[j] = t;
    }
    private siftUp(i: number) {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (!this.isGreater(this.a[i], this.a[parent]))
                break;
            this.swap(i, parent);
            i = parent;
        }
    }
    private siftDown(i: number) {
        while (true) {
            const left = (i << 1) + 1;
            if (left >= this.a.length)
                return;
            const right = left + 1;
            const greaterChild = right < this.a.length && this.isGreater(this.a[right], this.a[left]) ? right : left;
            if (!this.isGreater(this.a[greaterChild], this.a[i]))
                return;
            this.swap(greaterChild, i);
            i = greaterChild;
        }
    }
    add(x: T) {
        this.a.push(x);
        this.siftUp(this.a.length - 1);
    }
    isEmpty() {
        return this.a.length === 0;
    }
    peek() {
        if (this.a.length === 0)
            throw new Error('Heap empty');
        return this.a[0];
    }
    pop() {
        if (this.a.length === 0)
            throw new Error('Heap empty');
        if (this.a.length === 1)
            return this.a.pop();
        const result = this.a[0];
        this.a[0] = this.a.pop();
        this.siftDown(0);
        return result;
    }
    clear() {
        this.a.length = 0;
    }
}
