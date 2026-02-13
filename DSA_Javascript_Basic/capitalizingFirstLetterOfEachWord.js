const str = "my name is devesh goel";

const result = str.split(" ")
               .map(w => w[0].toUpperCase()+w.slice(1))
               .join(" ");

console.log(result);
