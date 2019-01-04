process.stdin.resume()
process.stdin.setEncoding('utf8')

const emailStore = []


process.stdin.on('data', email => {
  const findMessageIDMatch = /[\n\r].*Message-ID:\s*([^\n\r]*)/g
  const findReplyIDMatch = /[\n\r].*In-Reply-To:\s*([^\n\r]*)/g
  
  const messageIDMatch = findMessageIDMatch.exec(email)
  const replyIDMatch = findReplyIDMatch.exec(email)

  const messageID = messageIDMatch && messageIDMatch[1]
  const replyID = replyIDMatch && replyIDMatch[1]

  console.log('messageID', messageID, 'replyID', replyID)

  if (replyID) {
    console.log('reply', replyID)
  } else {
    emailStore.push([messageID])
  }
})

process.stdin.on('end', function() {
  console.log('done', emailStore)
})
