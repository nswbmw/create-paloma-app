app.service('User', function (db) {
  this.getUserByUid = async function getUserByUid (uid) {
    const user = (await db.User.create({
      uid,
      name: 'nswbmw',
      age: Math.floor(Math.random() * 10 + 17)
    })).ops[0]
    await db.User.deleteOne({ _id: user._id })
    return user
  }
})
