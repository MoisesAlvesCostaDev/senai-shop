export function sum(a: number, b: number): number {
  return a + b;
}

test("sum adds two numbers correctly", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
