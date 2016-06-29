# rachael-io-common
Common files for rachael.io apps.

## installation
```
npm install rachael-io-common
```

## usage
Inside `app.js`:

Before everything:
```javascript
var app = require('rachael-io-common/common');
```

After everything:
```javascript
var errorHandler = require('rachael-io-common/error-handler');
app.use(errorHandler);
```
