function compareText() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');

    // Highlight differences
    output1.value = highlightDifferences(text1, text2);
    output2.value = highlightDifferences(text2, text1);
  }

  function highlightDifferences(base, compare) {
    const baseWords = base.split(/(\s+)/); // Split by words and spaces
    const compareWords = compare.split(/(\s+)/);

    return baseWords
      .map((word, index) => {
        if (word !== compareWords[index]) {
          return `[${word}]`; // Mark differences (e.g., wrap in [])
        }
        return word;
      })
      .join('');
  }