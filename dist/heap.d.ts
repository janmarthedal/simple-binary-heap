export declare class Heap<T> {
    private readonly a;
    private readonly isGreater;
    constructor(isGreater: (x: T, y: T) => boolean);
    private swap(i, j);
    private siftUp(i);
    private siftDown(i);
    add(x: T): void;
    isEmpty(): boolean;
    peek(): T;
    pop(): T;
    clear(): void;
}
