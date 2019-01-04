const fs = require('fs')
// Container for sorted emails
const emailStore = []

process.stdin.on('data', () => {
  const emailFolderPath = process.argv[2]
  const emailFiles = fs.readdirSync(emailFolderPath)

  const placeReplyInStore = (replyID, messageID) => {
    emailStore.some(thread => {
      if (thread[thread.length-1] === replyID) {
        thread.push(messageID)
        return true
      }
    })
  }

  emailFiles.forEach(emailFile => {
    const email = fs.readFileSync(`${emailFolderPath}/${emailFile}`)

    const findMessageIDMatch = /[\n\r].*Message-ID:\s*([^\n\r]*)/g
    const findReplyIDMatch = /[\n\r].*In-Reply-To:\s*([^\n\r]*)/g

    const messageIDMatch = findMessageIDMatch.exec(email)
    const replyIDMatch = findReplyIDMatch.exec(email)

    const messageID = messageIDMatch && messageIDMatch[1]
    const replyID = replyIDMatch && replyIDMatch[1]

    // If email is a reply, find existing thread and push it there
    if (replyID) {
      placeReplyInStore(replyID, messageID)
    // If email is net new, start new thread
    } else {
      emailStore.push([messageID])
    }
  })

  console.log('Sorted Emails: ', emailStore)
})
