app.controller('User.getUser', async function getUser (ctx, next, logger, User) {
  const uid = ctx.params.uid
  const user = await User.getUserByUid(uid)

  logger.info(`uid: %s, user: %j`, uid, user)
  ctx.body = user
})
