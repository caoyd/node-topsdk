'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number");
  check(args, "creative_ids", "Number");
  check(args, "nick", "String");
}
