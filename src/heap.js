class Heap {
    constructor(list = [], comparator) {
        this.list = list;
        this.comparator = comparator;

        this.init();
    }

    init() {
        const size = this.size();
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            this.heapify(this.list, size, i);
        }
    }

    insert(n) {
        this.list.push(n);
        const size = this.size();
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            this.heapify(this.list, size, i);
        }
    }

    peek() {
        return this.list[0];
    }

    pop() {
        const last = this.list.pop();
        if (this.size() === 0) return last;
        const returnItem = this.list[0];
        this.list[0] = last;
        this.heapify(this.list, this.size(), 0);
        return returnItem;
    }

    replace(replaced, target) {
        const index = this.list.findIndex(n => n === replaced);
        if (index > -1) {
            this.list[index] = target;
            const size = this.size();
            for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
                this.heapify(this.list, size, i);
            }
            return true;
        }
        return false;
    }

    size() {
        return this.list.length;
    }
}

class MaxHeap extends Heap {
    constructor(list, comparator) {
        if (typeof comparator != 'function') {
            comparator = function comparator(inserted, compared) {
                return inserted < compared;
            };
        }
        super(list, comparator);
    }

    heapify(arr, size, i) {
        let largest = i;
        const left = Math.floor(i * 2 + 1);
        const right = Math.floor(i * 2 + 2);

        if (left < size && this.comparator(arr[largest], arr[left]))
            largest = left;
        if (right < size && this.comparator(arr[largest], arr[right]))
            largest = right;

        if (largest !== i) {
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            this.heapify(arr, size, largest);
        }
    }
}

class MinHeap extends Heap {
    constructor(list, comparator) {
        if (typeof comparator != 'function') {
            comparator = function comparator(inserted, compared) {
                return inserted > compared;
            };
        }
        super(list, comparator);
    }

    heapify(arr, size, i) {
        let smallest = i;
        const left = Math.floor(i * 2 + 1);
        const right = Math.floor(i * 2 + 2);
        if (left < size && this.comparator(arr[smallest], arr[left]))
            smallest = left;
        if (right < size && this.comparator(arr[smallest], arr[right]))
            smallest = right;

        if (smallest !== i) {
            [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
            this.heapify(arr, size, smallest);
        }
    }
}
