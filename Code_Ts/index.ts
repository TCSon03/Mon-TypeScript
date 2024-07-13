// console.log("123456");
// {
//   const name = "Son";
//   const welcome: String = `Xin chao ban ${name}!`;
//   console.log(welcome);
// }

// {
//   const name: String = "Son";
//   const age: Number = 18;
//   const skill: String[] = ["HTML", "CSS", "JS", "ECMA"];
//   const isMarried: Boolean = true;
//   const myInfor = {
//     name: name,
//     age: age,
//     skill: skill,
//     isMarried,
//   };
//   const myInfor2 = {
//     name,
//     age,
//     skill,
//     isMarried,
//   };
//   console.log({ myInfor, myInfor2 });
// }
{
  const name: String = "Son";
  const age: Number = 21;
  const skills: String[] = ["HTML", "CSS", "JS", "ECMA"];
  const isMarried: Boolean = true;

  type Infor = {
    name: String;
    age: Number;
    skills: String[];
    isMarried: Boolean;
  };

  const myInfor: Infor = {
    name,
    age,
    skills,
    isMarried,
  };

  const HaInfor: Infor = {
    name: "Ha",
    age: 10,
    skills: ["JS", "TS"],
    isMarried: false,
  };

  // object literal
  console.log(myInfor);
}
