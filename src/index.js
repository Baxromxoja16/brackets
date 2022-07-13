module.exports = function check(str, brac) {
  let answ = "";
  brac.forEach((element) => {
    answ = element[0] + element[1];
  });
  console.log(answ === str);
  return answ === str;
};
