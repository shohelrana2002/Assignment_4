function password(obj) {
  if (obj.birthYear <= 1000) {
    return "invalid";
  }
  const userName = obj.name;
  const birthDate = obj.birthYear;
  const website = obj.siteName;

  const fullName =
    website.charAt(0).toUpperCase() +
    website.slice(1) +
    "#" +
    userName +
    "@" +
    birthDate;
  return fullName;
}

const result = password({ name: "toky", birthYear: 200, siteName: "Facebook" });

console.log(result);
