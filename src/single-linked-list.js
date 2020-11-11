class LinkedList {
    constructor(arr) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        if (Array.isArray(arr)) this._buildLinkedList(arr);
    }
    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this._incLength(1);
        return value;
    }
    pop() {
        return this.delete(this.length - 1);
    }
    get(index) {
        const node = this._find(index);
        return node ? node.value : void 0;
    }
    delete(index) {
        let pre = this._find(index - 1);
        let cur = pre ? pre.next : this.head;

        if (!cur) return;

        if (!pre) {
            this.head = cur.next;
            this.head || (this.tail = null);
        } else {
            pre.next = cur.next;
        }
        cur.next = null;
        this._incLength(-1);

        return cur.value;
    }

    _find(index) {
        let cur = this.head;
        if (!cur) return null;

        let i = 0;
        while (cur && i < index) {
            cur = cur.next;
            i++;
        }
        return i === index ? cur : null;
    }
    _incLength(addend) {
        this.length += addend;
        if (this.length < 0) this.length = 0;
    }

    _buildLinkedList(arr) {
        this.head = arr.reduceRight((list, item) => {
            const node = new Node(item, list);
            if (!list) this.tail = node;
            return node;
        }, null);
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// use
// const list = new LinkedList([1, 2, 3, 4]);

module.exports = {
    LinkedList,
};
