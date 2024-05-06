function createTree() {
  const LINES = 10;

  console.log("\n");

  for (let i = 1; i <= LINES; i++) {
    let spaces = " ".repeat(LINES - (i === 1 ? i + 1 : i));
    let characters = i === 1
      ? "*"
      : i === 2
        ? "0"
        : "0".repeat(2 * (i - 1) - 1);

    console.log(`${spaces}${characters}`);
  }

  console.log("\n");
  console.log("Autor: Rafael Guzmán Barranco | Guzbarraf");
}

createTree();
