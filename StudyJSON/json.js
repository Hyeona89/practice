//1.Object to JSON
//stringfy(obj)

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

//2.JSON to Object
//parse(json)
const json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
