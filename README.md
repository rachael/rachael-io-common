# rachael-io-common [![CircleCI](https://img.shields.io/circleci/project/rachael/rachael-io-common.svg?maxAge=3600)](https://circleci.com/gh/rachael/rachael-io-common)
Common files for rachael.io apps.

## Installation
```
npm install rachael-io-common
```

## Usage
#### Inside `app.js`:

Before everything:
```javascript
var app = express();
require('rachael-io-common/common')(app);
```

After everything:
```javascript
require('rachael-io-common/error-handler')(app);
```

#### Inside a template:
Templates must be relative to `/views` or `/submodules` (for now).
```
extends ../node_modules/rachael-io-common/views/layout
```
