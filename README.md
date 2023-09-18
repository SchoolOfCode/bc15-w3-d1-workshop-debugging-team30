# Debugging

Bugs are defects where software doesn’t work as it should. Although introducing bugs is natural (we all do it as developers), we still want to fix bugs before releasing the software to users. Debugging is the practice of investigating and fixing bugs. Some bugs may outright crash the software. Others may be more subtle in that the code runs, but it just doesn’t do what we want it to. Debugging approaches can help us systematically explore the behaviour of code to know why it does what it does, as well as figure out where a bug is happening

## 💡 OBJECTIVES FOR THE WORKSHOP

This workshop is all about debugging! Here's a glimpse of what you'll be achieving by the end of this workshop:

- Experiencing and fixing different types of errors
- Systematically debugging

## 🪲 DEBUGGING STRATEGIES

When you encounter a bug, use these strategies:

- **Make small, incremental changes** - Don't change many things at once. Isolate the issue.

- **Confirm assumptions** - Verify if something is actually the problem before moving on.

- **Read errors closely** - The error message often describes the exact issue. Google it! 

- **Use debugging tools** - Leverage the browser dev tools, console, and debugger.

Debugging is a key development skill! With practice, you'll get better at methodically tracking down issues.

## 🎟️ TICKETS

Some specific tips to keep in mind as you work through the tickets:

- To run the code:

  - Either:
    - Right-click index.html and copy the file path
    - Paste the path into your browser's address bar.
    - Refresh the page and look in the console each time to see your changes.
  - Or if you want to use a tool like Live Server for auto-refreshing:
    - Right click the index.html and open with Live Server
    - If you simply click "Go Live", the task may not work and you'll see unintended routing errors.

Time to dive into action! 🏊‍♂️ Here's what you'll be working on:

### 🎫 Ticket 1 - Shopping list web application

You and your team have been tasked with debugging a new shopping list application (in the `ticket-1` folder). Despite the CSS and JavaScript files, two issues exist:

- Page is unstyled - the "Add" button should be green.
- Page is not interactive - clicking "Add" does nothing, even though JavaScript handles interactivity.

Your task is to investigate and fix the bugs so:

- Page styling works properly.
- Page becomes fully interactive (adding items to list works).

### 🎫 Ticket 2 - Syntax errors

Great work fixing those bugs. For this ticket, you and your team need to fix the JavaScript code in the `index.js` file in the `ticket-2` folder. The file contains syntax errors. Like human languages, programming languages have grammar rules that must be followed. Syntax errors provide fast feedback - code won't run until fixed.

Fix syntax errors in index.js so the initials extraction function runs. Your IDE will underline issues. Once you've fixed the errors, here are a few scenarios you can manually test to check the function returns the right initials.

| Function call                                            | Expected output |
| -------------------------------------------------------- | --------------- |
| extractInitialsFromFullName("Abe Maxwell")               | "AM"            |
| extractInitialsFromFullName("Martin Boxer Harris")       | "MBH"           |
| extractInitialsFromFullName("Felicity Rita Sarah Jones") | "FRSJ"          |
| extractInitialsFromFullName("Mary Petunia")              | "MP"            |

### 🎫 Ticket 3 - Type mismatches

Great job on fixing those syntax errors. You and your team have now been tasked with debugging and fixing the code in `index.js` within the `ticket-3` folder.

The table below shows how the `countNumberOfNinesInNumber` should work:

| Function call                            | Expected output |
| ---------------------------------------- | --------------- |
| countNumberOfNinesInNumber(99.999)       | 5               |
| countNumberOfNinesInNumber(9)            | 1               |
| countNumberOfNinesInNumber(989)          | 2               |
| countNumberOfNinesInNumber(1115.1257846) | 0               |

Unfortunately, it doesn't currently seem to work.

<details>
 <summary>Need a hint?</summary>
    How could you check if the for loop is running and how many iterations it completes before ending?
</details>

### 🎫 Ticket 4 - Identifiers

The code within `ticket-4/index.js` is meant to return a grade based on the value of `points` (as per the table below), but currently it doesn't. You and your team should fix the code so that the function returns the correct grade.

| Function call           | Expected output |
| ----------------------- | --------------- |
| getGradeFromPoints(100) | "A"             |
| getGradeFromPoints(90)  | "A"             |
| getGradeFromPoints(70)  | "B"             |
| getGradeFromPoints(50)  | "C"             |
| getGradeFromPoints(40)  | "D"             |
| getGradeFromPoints(39)  | "E"             |
| getGradeFromPoints(0)   | "E"             |

Running the file should also log the following to the console:

> A should be A

### 🎫 Ticket 5 - Type mismatches

You and your team have now been tasked with debugging and fixing the code within `ticket-5/index.js`.

Running the file should log the following to the console:

> The total cost for this cart is £23.60

<details>
 <summary>Need a hint?</summary>
    One of JavaScript's flexible behaviours is that accessing a non-existent property on an object simply evaluates to undefined. However, this lenient behaviour does not apply when trying to access a property on an undefined or null value (instead JavaScript throws an error, which by default would cause the software to crash).
</details>

### 🎫 Final ticket - Trivia quiz application

You work for a company building a trivia quiz app. The initial iteration (within the `trivia-quiz` folder) contains bugs and has received negative feedback.

The algorithm for the quiz application should be:

```js
// ask user if they want to play
// if they don't want to play, stop immediately and don't run any of the steps below.
// initialise the user's score as 0
// loop over the array starting at question 1 up to and including question 10. for each question:
//      show the question number, question text and choices
//      ask the user to enter a choice
//      if the user has cancelled (whilst entering a choice):
//          tell them they've cancelled and won't see any questions
//          stop everything (not just the loop) immediately and don't run any more steps
//      otherwise make sure the user has entered either: A or B or C or D or a or b or c or d
//      if they haven't entered a valid choice, prompt them again
//      if user's choice doesn't match the correct choice (for the current question):
//          tell the user they answered incorrectly, what the correct answer was and what their score is
//          stop everything (not just the loop) immediately and don't run any more steps
//      otherwise (user must have answered correctly):
//          increment the user's score
//          tell the user they answered correctly and what their current score is
// the user will only make it to the end of the loop if they've answered all 10 questions.
// after the loop, tell the user they've reached the end of the quiz and what their score is.
```

Users have reported several bugs in the quiz app:

1. Quiz proceeds after users decline to play.
2. Incorrect score tracking - scores are too low.
3. Crashes after 10 questions are asked.

You and your team have been tasked with investigating and fixing the above known bugs. However, you should also compare the actual app behaviour with the intended algorithm and fix any differences.

The project uses ECMAScript modules. This splits code into smaller, reusable files. If unfamiliar with ESM you should research it further (use https://javascript.info/modules-intro as a starting point). Since ESM is used, you should use a tool like Live Server to load the HTML.
