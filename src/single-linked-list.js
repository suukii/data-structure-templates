class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
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
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

module.exports = {
    LinkedList,
};
