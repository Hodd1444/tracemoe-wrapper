# trace-moe-wrapper

A Node.js wrapper for the trace.moe API.

## Installation

```sh
npm install trace-moe-wrapper
```

## Usage

```javascript
const TraceMoeAPI = require('trace-moe-wrapper');

const traceMoe = new TraceMoeAPI('your-api-key-here');

(async () => {
    try {
        const result = await traceMoe.search('image-url-here');
        console.log(result);

        const userInfo = await traceMoe.me();
        console.log(userInfo);
    } catch (error) {
        console.error(error);
    }
})();
```
## License

MIT