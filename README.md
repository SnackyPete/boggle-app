# Battlefy Boggle Challenge

Boggle is a word game played using a plastic grid of lettered dice, in which players attempt to find words in sequences of adjacent letters. Your request today is to re-create the boggle game in Javascript.


## Rules

The game begins with sixteen letters that sit on a 4x4 grid. The player has a three-minute timer to come up with as many words as possible.

The board consist of English letters only and “Qu” must be together. For the purpose of this task, distribution of the letters does not matter. The player can not enter a word more than once and the word must exist in the English vocabulary. 

Points will be acculumated based on the following:


| Word length    | Points
|----------------|--------
| 3, 4           | 1
| 5              | 2
| 6              | 3
| 7              | 5
| 8+             | 11


## Features

There are four features we would like to see implemented
* Generate Randomized Boggle Board
* Enter a word that I found
* Points system
* Timer

For each of the features: 
* write up user stories
* estimate how long it will take you to implement
* implement the features
* write tests

At the end, we will do a code review for all the features.

# User Stories:

## Generate Randomized Boggle Board

The board will be 4x4.
The randomizer will be seeded, so that games can be replayed, should the user wish to do so, and should the UI provide that feature.
Sixteen (16) letters will be generated for each game.
For sake of simplicity, and because we are dealing with such small amounts of data, twenty-two (22) arrays will be created, 
 * four (4) representing the horizontal rows indexed from top to bottom 
 * four (4) representing the vertical rows indexed from left to right, 
 * seven (7) representing the diagonal rows from top left to bottom right starting at the bottom left character and ending at the top right character.
 * seven (7) more representing diagonal rows form top right to bottom left starting at the top left character and ending at the bottom right character.
This arrangement will allow for a simple scan of the words entered by the user, and will not require any complex calculations.
There is currently no consideration for a board of letters that contains absolutely no word matches.  Chances of this are unlikely, but this is currently an unsolved problem.  Further user stories can be generated if this is a desired feature.

## Enter a word that I found

The existing input field will be modified so that it only accepts alphabetical text.  
The user will be warned if an erroneous character is entered:
 # The input submission button will be disabled until this is corrected.  
 # Additionally, a warning message will be presented until the entry is corrected. 
When the user submits a word, the 16 arrays of characters will be scanned using String.search() until a match is found on the board.  The internal english dictionary will then be consulted to ensure that the word guess is an actual english language word.
If the entered word is not on the board an error notification will be displayed.
If it is on the board, but is not in the dictionary, a different error notification will be displayed.
The successful word entry will be redrawn on the board in a different color, or with a different background to indicate success.

## Points System

The points system will be represented by a simple  data object representing scores vs. number of letters in a word. 
The table will start with the value 3 and end with 8.  Each of these entries will have a matching score.  Logic will apply scores for words with less than 3 and more than 8 characters.
Once a score is calculated, it is displayed on the score board next to the word that was guessed.

## Timer

The timer is three (3) minutes long and will use the window.setTimeout() feature.  It will be started at the commencement of each game.
When the timer runs out, it will generate an event that will be caught by a main controller.  When this happens, the controller will suspend any further play on the current game and present the option to play another.
