# BATMINTON

A Famicom singles badminton game. You are the red player at the bottom. The computer is the blue player at the top. The first player to 11 points wins.

The playable page is https://xyzzyapps.github.io/batminton/.

## Play

- Arrow keys move on the court. Up moves toward the net.
- Hold Z or Space. A longer hold makes a harder shot.
- Arrow keys aim the shot while you hold Z or Space.
- Release Z or Space to hit.
- Enter pauses. M mutes.

On a phone, use the buttons on the page.

## Publish

Spear publishes the same way. The source branch is `master`. GitHub Pages serves the `gh-pages` branch. The page root contains `index.html`, `styles.css`, `main.dart.js`, `preview.png`, and `.nojekyll`.

`.nojekyll` tells GitHub Pages to serve the files directly.

The X player card uses these absolute addresses:

- `twitter:player` = `https://xyzzyapps.github.io/batminton/`
- `twitter:player:width` = 480
- `twitter:player:height` = 450
- `twitter:image` = `https://xyzzyapps.github.io/batminton/preview.png`

The page must use HTTPS. Do not send `X-Frame-Options: DENY`. Do not send a CSP `frame-ancestors` rule that blocks `x.com`. The account must pass the X Player Card validator before the game plays inside a post.

When the page is inside an iframe, the page hides the title and the help text. The court fills the frame.
