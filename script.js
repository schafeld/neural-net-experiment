// 'brain' is made available in index.html
var brain = brain || {};

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

net.train(trainingData);

// console.log(net.run([0, 0]));
var output = net.run([0, 0]);

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<p>Output: ${output}</p>`;
