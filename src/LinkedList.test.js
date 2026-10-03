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

function listToArray(list) {
  const result = [];
  let curr = list.head;

  while (curr !== null) {
    result.push(curr.value);
    curr = curr.nextNode;
  }
  return result;
}
