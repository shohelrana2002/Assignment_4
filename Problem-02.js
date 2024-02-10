function checkName(name) {
  if (typeof name !== "string") {
    return "“invalid”";
  }
  const gdNameLast = ["a", "y", "i", "e", "o", "u", "w"];
  const convert = name[name.length - 1].toLowerCase();
  if (gdNameLast.includes(convert)) {
    return "“Good Name”";
  } else {
    return "“Bad Name”";
  }
}

const result2 = checkName(["Rashed"]);
console.log(result2);
