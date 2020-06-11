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
    const adjacentNodes = adjacencyTable[currentNode] || [];
    if (adjacentNodes.includes(target)) return true;
    const uniqueNodes = adjacentNodes.filter(
      (child) => !(queue.includes(child) || visited.includes(child))
    );
    queue.push(...uniqueNodes);
    visited.push(currentNode);
  }
  return false;
};

module.exports = { bfs };
