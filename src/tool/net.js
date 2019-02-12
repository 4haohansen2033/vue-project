import lodash from "lodash";

function send() {
  return lodash.pullAt([1, 2], 1);
}

export default {
  send
};
