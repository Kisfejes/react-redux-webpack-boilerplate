module.exports = {
    "extends": "airbnb",
    "env": {
      "node": true
    },
    "rules": {
      "comma-dangle": 0,
      "no-underscore-dangle": 0,
      "global-require": 0
    },
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "globals": {
      "__DEVELOPMENT__": true
    }
};
