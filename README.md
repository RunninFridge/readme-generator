User Story:
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

This is a simple README.md file generator that can be created with nodeJS in the terminal of VSCode.
Simply run 'node index.js' in the terminal of the file and answer the promts.
A new README.md file would be generated at the end of prompts and be put in the same folder and the code itself (in Develop)

[Untitled_ Sep 6, 2022 10_04 PM.webm](https://user-images.githubusercontent.com/101852782/188793799-2cbf51a2-2661-4ad7-b234-1895615c6b0a.webm)
