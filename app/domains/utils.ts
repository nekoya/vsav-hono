export const sortByKey = <T, K extends keyof T>(
  items: T[],
  key: K,
  order: "asc" | "desc" = "asc",
): T[] =>
  [...items].sort((a, b) => {
    const f = (t: T) => {
      const v = t[key];
      return v instanceof Date ? v.getTime() : v;
    };
    const _a = f(a);
    const _b = f(b);
    if (_a === _b) {
      return 0;
    }
    const result = _a > _b ? 1 : -1;
    return order === "asc" ? result : result * -1;
  });
