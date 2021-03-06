'use strict'
module.exports = function(args, check) {
  check(args, "advent_lifecycle", "Number");
  check(args, "approval_number", "String");
  check(args, "attribute", "String");
  check(args, "bar_code", "String");
  check(args, "brand", "String");
  check(args, "brand_name", "String");
  check(args, "category", "String");
  check(args, "category_name", "String");
  check(args, "color", "String");
  check(args, "cost_price", "Number");
  check(args, "extend_fields", "String");
  check(args, "gross_weight", "Number");
  check(args, "height", "Number");
  check(args, "is_batch_mgt", "Boolean");
  check(args, "is_danger", "Boolean");
  check(args, "is_hygroscopic", "Boolean");
  check(args, "is_shelflife", "Boolean");
  check(args, "is_sn_mgt", "Boolean");
  check(args, "item_id", "String", true);
  check(args, "item_price", "Number");
  check(args, "length", "Number");
  check(args, "lifecycle", "Number");
  check(args, "lockup_lifecycle", "Number");
  check(args, "name", "String");
  check(args, "net_weight", "Number");
  check(args, "origin_address", "Number");
  check(args, "pcs", "Number");
  check(args, "reject_lifecycle", "Number");
  check(args, "size", "String");
  check(args, "specification", "String");
  check(args, "store_code", "String");
  check(args, "tag_price", "Number");
  check(args, "title", "String");
  check(args, "type", "String");
  check(args, "use_yn", "Boolean", true);
  check(args, "volume", "Number");
  check(args, "width", "Number");
}
