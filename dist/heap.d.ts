export declare class Heap<T> {
    private readonly a;
    private readonly isGreater;
    constructor(isGreater: (x: T, y: T) => boolean);
    private swap(i, j);
    private siftUp(i);
    private siftDown(i);
    push(x: T): void;
    isEmpty(): boolean;
    size(): number;
    peek(): T;
    pop(): T;
    clear(): void;
}
