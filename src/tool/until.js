import lodash from "lodash";

function emit() {
  return lodash.pullAt([1, 2], 1);
}

export default {
  emit
};
