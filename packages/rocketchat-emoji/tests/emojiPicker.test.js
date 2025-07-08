const { getEmojiList } = require('../lib/emoji');

describe('Emoji Picker', () => {
  it('should include Unicode 12+ emoji (e.g., 🪓)', () => {
    const emojiList = getEmojiList();
    expect(emojiList).toContain('🪓');
  });
});