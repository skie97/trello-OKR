# Trello Power-up to add OKR points to a card.

A simple powerup to Trello to add a maximum points, and a current point value as a card-button to a card to track completion.

## How to use

Trello power ups are rather easy to code, albeit with a few gotchas that the documentation doesn't say clearly.
1. Under the Basic information for the power up for "Iframe connector URL", it says that it wants a link to the HTML page but
I couldn't get it to work with a url to a html. It had to be a url to a domain or sub-domain. Not a big issue,
as you can simply serve the html as the default file. But it took some troubleshooting to get right.
2. You must not forget to set the Capabilities that you need. Otherwise, nothing
will happen!

Although the initial intent was to use a node.js server, what I had on hand easily
was an Apache web server. So I just dumped the files into the public_html folder
and set the CORS setting for the domain. Deployment was manual since I was too
lazy to set up an SSH script to do the file transfer.