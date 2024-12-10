// Function to analyze the sentence
function analyzeSentence(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Vowel characters
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    // Loop through each character
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Increment character count
        charCount++;

        // Check for vowels
        if (vowels.has(char)) {
            vowelCount++;
        }

        // Count words (a word ends when a space is followed by a non-space character or a period)
        if (char === ' ' && i + 1 < sentence.length && sentence[i + 1] !== ' ' && sentence[i + 1] !== '.') {
            wordCount++;
        }
    }

    // Final word count adjustment (to account for the first word)
    if (charCount > 1 && sentence[0] !== ' ') {
        wordCount++;
    }

    // Return results
    return {
        length: charCount,
        words: wordCount,
        vowels: vowelCount
    };
}

// Example usage
const sentence = "This is a sample sentence.";
const result = analyzeSentence(sentence);

console.log("Length of the sentence:", result.length);
console.log("Number of words:", result.words);
console.log("Number of vowels:", result.vowels);
