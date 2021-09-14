const usersResolvers = require("./users");
const quizResolvers = require("./quiz");
const profileResolvers = require("./profile");
const User = require("../../models/User");
const Quiz = require("../../models/Quiz");

module.exports = {
  Query: {
    ...quizResolvers.Query,
    ...usersResolvers.Query,
    ...profileResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...quizResolvers.Mutation,
    ...profileResolvers.Mutation,
  },
  Comment: {
    author: async (parent) => {
      const user = await User.findById(parent.author);
      return user;
    },
  },
  Quiz: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
    questionCount: (parent) => parent.questions.length,
    author: async (parent) => {
      const user = await User.findById(parent.author);
      return user;
    },
  },
  Profile: {
    userData: async (parent) => {
      const user = await User.findById(parent.user);
      return user;
    },
  },
};
