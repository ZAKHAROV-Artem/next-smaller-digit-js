function nextSmaller(n) {
  const main_digit = n.toString().split("").sort().join("");
  let next_smaller_digit = "";
  for (let i = n - 1; i != 0; i--) {
    if (main_digit.length > i.toString().length) {
      return -1;
    }
    next_smaller_digit = i.toString().split("").sort().join("");
    if (main_digit === next_smaller_digit) {
      return i;
    }
  }
  return -1;
}
