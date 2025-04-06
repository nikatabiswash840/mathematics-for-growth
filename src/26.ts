function randomTSP() {
  // Example of generating random tSP code
  const edges = [
    ["A", "B"],
    ["B", "C"],
    ["C", "D"],
    ["D", "E"],
    ["E", "F"],
    ["F", "G"],
    ["G", "A"]
  ];
  let tspCode = "";
  for (let i = 0; i < edges.length - 1; i++) {
    tspCode += edges[i][0] + " -> " + edges[i + 1][0] + " - " + edges[i][1];
    if (i < edges.length - 2) {
      tspCode += " + ";
    }
  }

  return tspCode;
}

console.log(randomTSP());
