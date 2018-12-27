app.controller('User.getUser', async (ctx, next, logger, User) => {
  const uid = ctx.params.uid
  const user = await User.getUserByUid(uid)

  logger.info(`User.getUser -> uid: %s, user: %j`, uid, user)
  ctx.body = user
})
