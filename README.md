# Quadulo

Quadulo is a point-and-click logic game which incorporates strategic forward-thinking with minor elements of luck, progressively becoming more difficult as the player suceeds within the game.

[LIVE LINK TO SITE](https://ndsurgenor.github.io/quadulo)

The main aims of the site are as follows:
- to provide an challenging game which runs in an internet browser
- to provide a game incoporates basic logic so the user feels in control of their decisions 
- to provide a game which becomes more diffcult as it progresses so as to engage the user
- to present a game whiere the graphic design provides clear feedback and complements the gameplay

![Overview](assets/images/overview.png)

## Initial Development

Three user stories were created at the outset of this project to guide its initial design and provide goals for the finished project:
- User A: as someone who enjoys casual gaming, I want to play a simple logic puzzle so I can enjoy a light to medium challenge.
- User B: as someone who plays only mobile games, I want a bright and colourful game that plays quickly so I can play it mobile in short bursts.
- User C: as someone who enjoys strategic games, I want something easy to learn with depth so I can continue to engage with the game more as I get to know it better.

The intial design ideas were developed using interactive prototyping site [Uizard.io](https://app.uizard.io/p/347766d4) and can be viewed by following the link.

Originally the idea revolved around using a 5x5 grid with a aim to creating rows/columns of 5 but this was too complex/long in its gameplay (failing users A & B) while, somewhat paradoxically, also being too simple in its objective (failing user C); as such, the grid was reduced to 4x4 and introduced the objective of continuing for as long as possible.

## Features 

### Existing Features

- __Title__

  - Featured at the very top of the index and 404 pages, the title is centrally placed to emphasise the name and branding of the game.
  - A navigation bar. 

![Title](assets/images/readme/info_banner.png)

- __Info Banner__

  - ???

![Info Banner](assets/images/readme/info_banner.png)

- __Game Area__

  - ???

![Game Area](assets/images/game_area.png)

- __Level & Block Counters__

  - ???

![Level & Block Counters](assets/images/counters.png)

- __New Game & Rules Buttons__

  - ???

![New Game & Rules Buttons](assets/images/buttons.png)

- __Rules__ 

  - ???

![Rules](assets/images/rules.png)

- __Game Over Message__

  - ???

![Game Over Message](assets/images/game_over.png)

- __404 Page__

  - ???

![404 Page](assets/images/404.png)

### Features to Implement

The following are ideas which can be implemented into the site at a later time (when skillset allows):
- Add a highscores button and overlay which stores usernames and progession to a back-end database allowing users to compare their scores with all visitors to the site.
- Add keyboard navigation for desktop users allowing them to move around the grid using WASD/arrow keys and select blocks using Spacebar

## Testing

- This site has been tested for responsiveness across different screen sizes by utilizing Google Chrome's developer tools. The following link provides a [Responsive Preview](https://ui.dev/amiresponsive?url=https://ndsurgenor.github.io/quadulo/) of various screen sizes.
- This site has been tested for responsiveness in 'real-world' contexts by viewing the site on widescreen desktop and laptop setups, medium-screen tablets, and smaller-screen smartphone devices.
- This site has also been tested for responsiveness on various browsers including Chrome, Firefox, Edge and Safari.
- Buttons and links have been tested to ensure that they fufil the correct functions/direct to the correct page.
- Text and graphics have been tested to ensure that they resize/reorder correctly at various screen sizes.

### Validator Testing 

- HTML: No errors were returned when passing each HTML page through the official W3C HTML validator
  - [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2Findex.html)
  - [404.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2Fevents.html)
- CSS: No errors were found when passing 'style.css' through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JS: No errors were found when passing 'script.js' through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Performance & Accessibility: A high accessibility score of 97/100 was confirmed using Lighthouse in Chrome Developer Tools for both mobile and desktop sites.

  ![Lighthouse Report](assets/images/readme/lighthouse.png)

### Fixed Bugs

- The *Why Join Us?* section of index.html did not intially show content in the correct order when using smaller screen sizes. This was solved by reordering the content within the code then floating the contents right as well using a series of nested divs.

### Unfixed Bugs

- No bugs regarding graphic display and/or gameplay are known at this time.

## Deployment

A live link to the site can be found here: https://ndsurgenor.github.io/quadulo 

- This site was deployed to GitHub pages. Steps for deployment are as follows: 
  - In the GitHub repository, navigate to the Settings tab (top right)
  - From the options in the lefthand side menu, select Pages
  - From the Branch section drop-down menus, select 'main' and '/root' then click 'Save'
  - The page will be automatically refreshed (after a short period) to indicate the successful deployment.

## Credits 

### Content 

- Wireframe protype designed using [Uizard.io](https://uizard.io/)
- Button icons provided by [Font Awesome](https://fontawesome.com/)
- Favicon created using [favicon.io](https://favicon.io/)
- README.md file adapted from the Code Institute README.md template