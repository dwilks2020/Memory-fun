# Big Brain Card Matching Game

## Overview

Welcome to the **Big Brain Card Matching Game**! This is a fun and brainy card game where you match pairs of cards. The game features 12 cards with 6 matching pairs. Your goal is to find all the pairs within 8 attempts. Matched cards stay face up, while unmatched cards flip back down after a brief delay. If you match all the pairs, you'll see a "You win" message. If you run out of attempts without finding all the pairs, you'll get a "You lose" message.

## How It Works

### Game Setup

1. **Start with 12 Cards**: The game board has 12 cards, which are shuffled and placed face down.
2. **Card Flipping**: Click on a card to flip it and reveal its face.
3. **Matching**: Try to find pairs of matching cards.
4. **Attempts**: You have up to 8 attempts to find all the pairs. Each attempt is counted when you click on a card.

### Winning and Losing

- **Win**: If you find all 6 pairs of matching cards, a "You win" message will pop up.
- **Lose**: If you don't find all the pairs within 8 attempts, a "You lose" message will appear.

### Pseudocode

Here's a simplified breakdown of how the game works:

1. **Initialize the Game**:
   - Set up the game variables, including cards, matches, attempts, and picks.
2. **Start the Game**:
   - Shuffle the cards and render them face down on the board.
3. **Card Click Event**:
   - When a card is clicked:
     - If it's the first pick, store it.
     - If it's the second pick, check if it matches the first pick. Update the attempt count.
4. **Match Logic**:
   - If the two selected cards match, keep them face up and increase the match count.
   - If they don't match, flip them back down after a short delay.
5. **End of Game**:
   - If all pairs are matched, display a win message.
   - If attempts reach 8 and not all pairs are found, display a lose message.

### Functions

Here's a brief overview of the key functions in the game:

- **`shuffleCards()`**: Shuffles the cards so they are randomly arranged each time you play.
- **`renderCards()`**: Displays the cards on the board, initially face down.
- **`flipCard(card)`**: Flips a card to reveal its face.
- **`checkMatch()`**: Checks if the two selected cards are a match and updates the game accordingly.
- **`resetPicks()`**: Resets the selected cards after each attempt.
- **`updateAttempts()`**: Updates and displays the number of remaining attempts.
- **`displayMessage(message)`**: Shows win or lose messages based on the game's outcome.

## How to Play

1. **Start the Game**: Open `index.html` in your web browser.
2. **Play**: Click on cards to reveal them. Try to match pairs before running out of attempts.
3. **Win or Lose**: After matching all pairs or exhausting your attempts, you'll see a message telling you if you won or lost.



