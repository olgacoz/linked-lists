import LinkedList from "./LinkedList";

let list;
beforeEach(() => {
  list = new LinkedList();
});

test("creates empty linked list", () => {
  expect(list.head).toBeNull();
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

function listToArray(list) {
  const result = [];
  let curr = list.head;

  while (curr !== null) {
    result.push(curr.value);
    curr = curr.nextNode;
  }
  return result;
}
