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
4. I would love to beef-up the way the email information is stored an add a basic front-end visualization that allows you to see the emails and all their corresponding data presented in their sorted order. 

Overall this was a very interesting coding challenge--one that has left me wanting to continue working on it. Thanks for the opportunity to play around with email and think more complexly and granularly through this interface we all use every single day :)
