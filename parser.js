module.exports = {
  parserOpts: {
    headerPattern: /^(?::([^:])+:\s*)?(\w*)(?:\((.*)\))?!?: (.*)$/,
    headerCorrespondence: ["emoji", "type", "scope", "subject"],
  },
};
