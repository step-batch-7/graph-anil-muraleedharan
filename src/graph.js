const generateAdjacencyTable = (links) => {
  const table = {};
  links.forEach(([src, dest]) => {
    if (!table[src]) table[src] = [];
    table[src].push(dest);
  });
  return table;
};

const bfs = function (pairs, source, target) {
  const adjacencyTable = generateAdjacencyTable(pairs);
  const queue = [source];
  const visited = [];
  while (queue.length != 0) {
    const currentNode = queue.shift();
    if (adjacencyTable[currentNode]) {
      if (adjacencyTable[currentNode].includes(target)) return true;
      adjacencyTable[currentNode].forEach((child) => {
        const isAlreadyExist = queue.includes(child) || visited.includes(child);
        if (!isAlreadyExist) queue.push(child);
      });
      visited.push(currentNode);
    }
  }
  return false;
};

module.exports = { bfs };
