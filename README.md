# project write-up
By far the feature I’m most proud of during my time with the RateBeer product is the [Beer Profile page](https://www.ratebeer.com/beer/samuel-adams-octoberfest/167/).

Because the general pipeline for how people find their way to RateBeer is through Googling a beer and then clicking through to the specific beer in the Google search results, this page essentially acts as the home page of the site, or the first impression a user has of the product.

The [Legacy code version](https://www.ratebeer.com/ratings/beer/beer-ratings.asp?beerid=167) of the Beer Profile page had a relatively unintelligent visual hierarchy and, because it was built over a course of years by volunteers, had an everything-and-the-kitchen-sink mentality when it came to including features. When we took over the product, we knew that improving this page was key to providing users with a modern, well-designed experience that would pull them further into the product.

We redesigned the look and feel of the rating process, reimagined the availability feature to give users more relevant information than ever about where they could find and purchase the beers that interested them, added the ability to ‘Favorite’ beers so that more casual users would have an easier point of engagement, and layered a lot of the previously distracting information that die-hard experts valued into menus or behind ‘see more’ toggles.

This work was a constant balancing act on two axes: first, what can we realistically include in an MVP without pushing out an initial launch too long, and second, if certain legacy features provide value to only a few specific users, how should we prioritize them in the global scope of the product to attract new users without losing the loyalty of the users that contribute the most content to the product.

By launching an MVP as quickly as possible (March 2018) to 15% of users and incrementally rolling it out to a wider set as bugs were fixed and additional functionality was built, I think we did a good job managing the very complex re-platforming of a page that sees over a million hits per month.

This Beer Profile overhaul is the work that contributed the most directly to reducing the site-wide Bounce Rate by 41%, and I’m incredibly proud of how our team worked together flexibly and quickly to make it happen.

# consider-email challenge
## TO RUN:
1. Clone the repo
2. Run basic node call with `index.js` and folder of email files you wish to sort:
```
node index.js /Users/katecaldwell/Desktop/consider-email/emailFiles
```
3. Upon hitting `Enter` twice, the Sorted Emails will appear in the console like so:
```
Sorted Emails:  [ [ { messageID: '<17@example>', date: 1510735286000 } ],
  [ { messageID: '<16@example>', date: 1509963720000 } ],
  [ { messageID: '<15@example>', date: 1509960000000 } ],
  [ { messageID: '<14@example>', date: 1509909827000 } ],
  [ { messageID: '<12@example>', date: 1509909690000 },
    { messageID: '<13@example>', date: 1509909722000 } ],
  [ { messageID: '<11@example>', date: 1509868862000 } ],
  [ { messageID: '<9@example>', date: 1509867899000 },
    { messageID: '<10@example>', date: 1509868152000 } ],
  [ { messageID: '<5@example>', date: 1509794520000 } ],
  [ { messageID: '<1@example>', date: 1509649095000 },
    { messageID: '<2@example>', date: 1509655092000 },
    { messageID: '<6@example>', date: 1509711181000 },
    { messageID: '<7@example>', date: 1509719291000 },
    { messageID: '<8@example>', date: 1509740897000 } ],
  [ { messageID: '<4@example>', date: 1509693154000 } ],
  [ { messageID: '<3@example>', date: 1509655375000 } ] ]
  ```
## NOTES: 

I time-boxed myself for this challenge and unfortunately got hung up on a some command line and regex logistics, so there are many more things I would love to do in a world with more time:
1. Currently the code adds all emails into the `emailStore` in the order they are read from the file directory, and then subsequently sorts the threads by date. I would improve the Big O of the algorithm by implementing a binary-search-insert function that inserts new non-reply emails in the correct order and intelligently reorders threads upon inserting a reply.
2. This incredibly optimistic code is written assuming it will never receive a remotely corrupted file in its life. I would add error-handling and additional checks to the data to prevent a silent crash if it were to receive corrupted data.
3. I would write a test suite that tests the individual helper functions with different inputs to ensure their integrity.
4. I would love to beef up the way the email information is stored and add a basic front-end visualization that allows you to see the emails and all their corresponding data presented in their sorted order. 

Overall this was a very interesting coding challenge--one that has left me wanting to continue working on it. Thanks for the opportunity to play around with email and think more complexly and granularly through this interface we all use every single day :)
