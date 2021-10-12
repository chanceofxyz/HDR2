# HDR2
4 seed pseudo random number generator based on Hubbard Decision Research version 2. This is one of the PRNGs used in SIPMath specification for sharing probabiltiy distributions.

CAUTION - ESM Module not working.

### INSTALL

npm i hrd2

```js
const random = require("hdr2"); 
console.log(random.Hdrando(1,0,0,0,10))
```

or in HTML

```html
<script src="https://cdn.jsdelivr.net/npm/hdr2@0.1.0/dist/cjs/index.min.js"></script>
....
<script>
    console.log(Hdrando(1, 0, 0, 0, 10))
</script>
```

The first 4 parameters are for seeds and the last is for the trail number you'd like to pull. This function will return the same 0-1 random number everytime it is run.