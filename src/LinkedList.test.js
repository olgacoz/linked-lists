import LinkedList from "./LinkedList";

let list;
beforeEach(() => {
  list = new LinkedList();
});

test("creates empty linked list", () => {
  expect(list.headNode).toBeNull();
});

describe("append method", () => {
  test("appends new node to empty linked list", () => {
    list.append(123);
    expect(listToArray(list)).toEqual[123];
  });

  test("appends new node to linked list of length 1", () => {
    list.append(123);
    list.append(13);

    expect(listToArray(list)).toEqual([123, 13]);
  });

  test("appends new node to linked list of length 2", () => {
    list.append(11);
    list.append(12);
    list.append(13);

    expect(listToArray(list)).toEqual([11, 12, 13]);
  });
});

describe("prepend method", () => {
  test("prepends new node to empty linked list", () => {
    list.prepend(123);
    expect(listToArray(list)).toEqual([123]);
  });

  test("prepends new node to linked list of length 1", () => {
    list.prepend(1);
    list.prepend(2);

    expect(listToArray(list)).toEqual([2, 1]);
  });

  test("prepends new node to linked list of length 2", () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(listToArray(list)).toEqual([3, 2, 1]);
  });
});

describe("size method", () => {
  test("size of empty linked list is 0", () => {
    expect(list.size()).toBe(0);
  });

  test("linked list has 1 node", () => {
    list.append(123);
    expect(list.size()).toBe(1);
  });

  test("linked list has 2 nodes", () => {
    list.append(1);
    list.append(2);

    expect(list.size()).toBe(2);
  });
});

describe("head method", () => {
  test("returns undefined for empty linked list", () => {
    expect(list.head()).toBeUndefined();
  });

  test("returns first node's value in linked list (size 1)", () => {
    list.append(25);
    expect(list.head()).toBe(25);
  });

  test("returns first node's value in linked list (size 2)", () => {
    list.append(2);
    list.append(1);

    expect(list.head()).toBe(2);
  });
});

describe("tail method", () => {
  test("returns undefined for empty linked list", () => {
    expect(list.tail()).toBeUndefined();
  });
  test("returns final node's value in linked list (size 1)", () => {
    list.append(1);
    expect(list.tail()).toBe(1);
  });
  test("returns final node's value in linked list (size 2)", () => {
    list.append(1);
    list.append(2);

    expect(list.tail()).toBe(2);
  });
});

describe("at method", () => {
  test("returns undefined for index -1", () => {
    expect(list.at(-1)).toBeUndefined();
  });

  test("returns undefined for empty linked list", () => {
    expect(list.at(0)).toBeUndefined();
    expect(list.at(1)).toBeUndefined();
  });

  test("returns undefined when index exceeds linked list length", () => {
    list.append(1);
    list.append(2);
    expect(list.at(2)).toBeUndefined();
    expect(list.at(3)).toBeUndefined();
  });

  test("returns undefined given a negative index on a list (size 1)", () => {
    list.append(1);
    expect(list.at(-1)).toBeUndefined();
  });

  test("returns the last node value of a list (size 2)", () => {
    list.append(1);
    list.append(2);
    expect(list.at(1)).toBe(2);
  });
});

describe("pop method", () => {
  test("returns undefined on empty list", () => {
    expect(list.pop()).toBeUndefined();
  });

  test("returns first element on length 1 list", () => {
    list.append(5);

    expect(list.pop()).toBe(5);
    expect(list.size()).toBe(0);
    expect(list.head()).toBeUndefined();
  });

  test("returns first element on length 2 list", () => {
    list.append(10);
    list.append(11);

    expect(list.pop()).toBe(10);
    expect(list.size()).toBe(1);
    expect(list.head()).toBe(11);
  });

  test("pops all elements in a list", () => {
    list.append(10);
    list.append(20);

    expect(list.pop()).toBe(10);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBeUndefined();
    expect(list.head()).toBeUndefined();
    expect(list.size()).toBe(0);
  });
});

describe("contains method", () => {
  test("returns false for empty list", () => {
    expect(list.contains(5)).toBe(false);
  });

  test("returns false if value is not in the list", () => {
    list.append(5);
    list.append(10);
    list.append(13);

    expect(list.contains(9)).toBe(false);
  });

  test("returns true if value is in the list", () => {
    list.append(5);
    list.append(10);
    list.append(13);

    expect(list.contains(10)).toBe(true);
    expect(list.contains(13)).toBe(true);
    expect(list.contains(5)).toBe(true);
  });
});

describe("findIndex method", () => {
  test("returns -1 for empty list", () => {
    expect(list.findIndex(1)).toBe(-1);
  });

  test("returns -1 if value can't be found in list", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.findIndex(4)).toBe(-1);
  });

  test("returns index of first match", () => {
    list.append(10);
    list.append(10);

    expect(list.findIndex(10)).toBe(0);
  });

  test("returns correct index", () => {
    list.append(4);
    list.append(5);
    list.append(50);

    expect(list.findIndex(50)).toBe(2);
    expect(list.findIndex(4)).toBe(0);
    expect(list.findIndex(5)).toBe(1);
  });
});

describe("toString method", () => {
  test("returns empty string for empty list", () => {
    expect(list.toString()).toBe("");
  });

  test("stringifies list of length 1", () => {
    list.append(10);
    expect(list.toString()).toBe("( 10 ) -> null");
  });

  test("stringifies list of length 2", () => {
    list.append(10);
    list.append(20);
    expect(list.toString()).toBe("( 10 ) -> ( 20 ) -> null");
  });
});

function listToArray(list) {
  const result = [];
  let curr = list.headNode;

  while (curr !== null) {
    result.push(curr.value);
    curr = curr.nextNode;
  }
  return result;
}
