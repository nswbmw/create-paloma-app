app.controller('User.getUser', async (ctx, next, User) => {
  const uid = ctx.params.uid
  const user = await User.getUserByUid(uid)
  ctx.body = user
})
