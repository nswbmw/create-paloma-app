app.controller('UserController.getUser', async function getUser (ctx, next, logger, UserService) {
  const uid = ctx.params.uid
  const user = await UserService.getUserByUid(uid)

  logger.info(`uid: %s, user: %j`, uid, user)
  ctx.body = user
})
