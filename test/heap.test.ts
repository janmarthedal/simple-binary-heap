import { Heap } from '../src/heap';

const numberLt = (x: number, y: number) => x < y;
const repeat = (n: number, fn: () => void) => { while (n-- !== 0) fn(); }

describe('Heap', () => {
    test('Sort array', () => {
        const a = [6, 2, 9, 2, 6, 1, 10, 0, -4, 1];
        const b = [];
        const h = new Heap(numberLt);
        a.forEach(n => h.push(n));
        repeat(a.length, () => b.push(h.pop()));
        a.sort((x, y) => x < y ? -1 : x > y ? 1 : 0);
        expect(b).toEqual(a);
    });
    test('Sort objects', () => {
        const e1 = {a: 1, b: 'Charlie'};
        const e2 = {a: 1, b: 'Alice'};
        const e3 = {a: 1, b: 'Bob'};
        const h = new Heap<{b: string}>((x, y) => x.b < y.b);
        [e1, e2, e3].forEach(e => h.push(e));
        expect(h.pop()).toBe(e2);
        expect(h.pop()).toBe(e3);
        expect(h.pop()).toBe(e1);
    });
    test('size', () => {
        const h = new Heap(numberLt);
        [1, 2, 3].forEach(n => h.push(n));
        expect(h.size()).toBe(3);
        repeat(3, () => h.pop());
        expect(h.size()).toBe(0);
    });
    test('isEmpty', () => {
        const h = new Heap(numberLt);
        [1, 2, 3].forEach(n => h.push(n));
        expect(h.isEmpty()).toBe(false);
        repeat(3, () => h.pop());
        expect(h.isEmpty()).toBe(true);
    });
    test('Peek into empty heap', () => {
        expect(() => new Heap(numberLt).peek()).toThrow();
    });
    test('Pop empty heap', () => {
        expect(() => new Heap(numberLt).pop()).toThrow();
    });
    test('Clear', () => {
        const h = new Heap(numberLt);
        [1, 2, 3].forEach(n => h.push(n));
        h.clear();
        expect(h.isEmpty()).toBe(true);
    });    
});
