const fs = require('fs')
const emailStore = []

process.stdin.on('data', () => {
  const emailFolderPath = process.argv[2]
  const emailFiles = fs.readdirSync(emailFolderPath)

  const insertReplyIntoThread = (replyID, messageID, date) => {
    emailStore.some(thread => {
      if (thread[thread.length - 1].messageID === replyID) {
        thread.push({ messageID, date })
        return true
      }
    })
  }

  emailFiles.forEach(emailFile => {
    const email = fs.readFileSync(`${emailFolderPath}/${emailFile}`)

    const findMessageIDMatch = /[\n\r].*Message-ID:\s*([^\n\r]*)/g
    const findReplyIDMatch = /[\n\r].*In-Reply-To:\s*([^\n\r]*)/g
    const findDateMatch = /[\n\r].*Date:\s*([^\n\r]*)/g

    const messageIDMatch = findMessageIDMatch.exec(email)
    const replyIDMatch = findReplyIDMatch.exec(email)
    const dateMatch = findDateMatch.exec(email)

    const messageID = messageIDMatch && messageIDMatch[1]
    const replyID = replyIDMatch && replyIDMatch[1]
    const date = dateMatch && Date.parse(dateMatch[1])

    // If email is a reply, find existing thread and push it there
    if (replyID) {
      insertReplyIntoThread(replyID, messageID, date)
      // If email is net new, start new thread
    } else {
      emailStore.push([{ messageID, date }])
    }
  })

  // Sort the threads into descending order by most recent date
  emailStore.sort((a, b) => b[b.length-1].date - a[a.length-1].date)

  console.log('Sorted Emails: ', emailStore)
})
