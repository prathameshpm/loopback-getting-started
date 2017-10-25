'use strict';

module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
    context.args.data.date = Date.now();
    context.args.data.publisherId = content.req.accessToken.userId;
    next();
  });
};
