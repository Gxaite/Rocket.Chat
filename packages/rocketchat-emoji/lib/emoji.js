const emojiToolkit = require('emoji-toolkit');

function hexToEmoji(hex) {
  return String.fromCodePoint(...hex.split('-').map(h => parseInt(h, 16)));
}

function getEmojiList() {
  if (emojiToolkit.emojiList && typeof emojiToolkit.emojiList === 'object') {
    return Object.values(emojiToolkit.emojiList)
      .map(e => e.uc_full ? hexToEmoji(e.uc_full) : null)
      .filter(Boolean);
  }
  return [];
}

module.exports = { getEmojiList };