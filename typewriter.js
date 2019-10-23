const sentence = "hello there from lighthouse labs";

sentence.split("").forEach((item, index) => {
  setTimeout(() => {
    process.stdout.write(item);
    if(index === sentence.length - 1)
      process.stdout.write("\n");
  }, 50*index);
});





