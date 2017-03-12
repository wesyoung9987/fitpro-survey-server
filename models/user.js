var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    newClientPainPoint: Number,
    timeSpentOnboarding: String,
    monthlyBudget: String,
    currentTools: String,
    toolsEffective: String,
    currentToolsLikesAndDislikes: String,
    otherMethods: String,
    areasOfExpertiseMatch: String,
    solvesProblem: Number,
    additionalThoughts: String
});

exports.User = mongoose.model('User', UserSchema);