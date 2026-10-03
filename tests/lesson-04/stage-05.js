const capSo = [];

for (let a = 1; a <= 100; a++) {
  for (let b = a; b <= 100; b++) {
    capSo.push([a, b]);
  }
}

const capChiaHet = capSo.filter(([a, b]) => {
  return (a * b) % 19 === 0;
});

console.log("Số cặp (a,b) thỏa mãn là: ", capChiaHet.length);