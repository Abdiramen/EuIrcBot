module.exports.command = "bully";
module.exports.run = function(remainder, parts, reply, command, from, to, text, raw) {
  reply(parts.join(", ") + ": I feel offended by your recent action(s). Please read http://stop-irc-bullying.eu/stop");
};
