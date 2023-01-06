const removeDiacritics = require("../utils/diacriticsRemover");
const howText = require("../texts/howText");
const whyText = require("../texts/whyText");
const whatText = require("../texts/whatText");
const whenText = require("../texts/whenText");
const whereText = require("../texts/whereText");
const whoText = require("../texts/whoText");
const generalText = require("../texts/generalText");
const howMuchText = require("../texts/howMuchText");

let map = null;

const GENERAL = "general";
const HOW = "how";
const HOW_MUCH = "how_much";
const WHAT = "what";
const WHEN = "when";
const WHERE = "where";
const WHO = "who";
const WHY = "why";

const MAX_QUEUE_SIZE = 10;
const MAX_ATTEMPTS = 100;

function processMessage(message) {
  if (map === null) {
    initMap();
  }
  if (!message.content.startsWith("<@850777293739786280>")) {
    return;
  }
  const splitted = message.content.split(" ", 3);

  if (splitted.length < 2) {
    return;
  }
  let command = splitted[1];
  command = removeDiacritics(command).toLowerCase();

  let answer;
  switch (command) {
    case "how":
    case "ako":
      answer = getAnswer(HOW, howText);
      break;
    case "kolko": // TODO english?
      answer = getAnswer(HOW_MUCH, howMuchText);
      break;
    case "why":
    case "preco":
    case "akoze":
      answer = getAnswer(WHY, whyText);
      break;
    case "what":
    case "co":
      answer = getAnswer(WHAT, whatText);
      break;
    case "when":
    case "kedy":
      answer = getAnswer(WHEN, whenText);
      break;
    case "where":
    case "kde":
    case "kam":
      answer = getAnswer(WHERE, whereText);
      break;
    case "who":
    case "kto":
    case "ktoze":
      answer = getAnswer(WHO, whoText);
      break;
    default:
      answer = getAnswer(GENERAL, generalText);
      break;
  }

  message.reply({
    content: answer,
    allowedMentions: { repliedUser: true },
  });
}

function getAnswer(command, array) {
  const usedNums = map.get(command);
  let attempts = MAX_ATTEMPTS;
  while (attempts > 0) {
    let index = getRandomInt(array.length);
    if (usedNums.includes(index)) {
      attempts--;
      continue;
    }
    usedNums.push(index);
    if (usedNums.length > MAX_QUEUE_SIZE) usedNums.shift();

    return array[index];
  }
  return ":) aj ja ťa pozdravujem :)";
}

function initMap() {
  map = new Map();
  map.set(GENERAL, []);
  map.set(HOW, []);
  map.set(HOW_MUCH, []);
  map.set(WHAT, []);
  map.set(WHEN, []);
  map.set(WHERE, []);
  map.set(WHO, []);
  map.set(WHY, []);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = processMessage;
