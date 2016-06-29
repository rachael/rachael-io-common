# rachael-io-common
Common files for rachael.io apps.

## Installation
```
npm install rachael-io-common
```

## Usage
#### Inside `app.js`:

Before everything:
```javascript
var common = require('rachael-io-common/common');
app.use(common);
```

After everything:
```javascript
var errorHandler = require('rachael-io-common/error-handler');
app.use(errorHandler);
```

#### Inside a template:
Templates must be stored in `/views` (for now).
```
extends ../node_modules/rachael-io-common/views/layout
```
