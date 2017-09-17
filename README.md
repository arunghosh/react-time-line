# react-time-line

[![Build Status](https://travis-ci.org/arunghosh/react-timline.svg?branch=master)](https://travis-ci.org/arunghosh/react-timline)

React component for diplaying timeline. This is based on the timeline found in [AdminLte](https://github.com/almasaeed2010/AdminLTE).

![alt tag](https://github.com/arunghosh/react-time-line/raw/master/docs/timeline.png)

**Installation**
```
npm install react-time-line
```


**Usage**

```javascript
const events = [
  {ts: new Date().toISOString(), text: 'Logged in'},
  {ts: new Date().toISOString(), text: 'Clicked Home Page'},
  {ts: new Date().toISOString(), text: 'Edited Profile'},
];

<Timeline items={events} />
```

**Style**

Currently there is no proper way to set the style. As a hack you can override the default style.


### For developers

To make new build
```
npm run build
```

To run dev server
```
npm run dev
```

To run test
```
npm run test
```

