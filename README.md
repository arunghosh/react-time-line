# react-time-line

[![Build Status](https://travis-ci.org/arunghosh/react-time-line.svg?branch=master)](https://travis-ci.org/arunghosh/react-time-line)

A react component to display event in a vertical timeline format. This is based on the timeline found in [AdminLte](https://github.com/almasaeed2010/AdminLTE).

![alt tag](https://github.com/arunghosh/react-time-line/raw/master/docs/timeline.png)

## Installation
```
npm install react-time-line
```


## Usage

```javascript
const events = [
  {ts: "2017-09-17T12:22:46.587Z", text: 'Logged in'},
  {ts: "2017-09-17T12:21:46.587Z", text: 'Clicked Home Page'},
  {ts: "2017-09-17T12:20:46.587Z", text: 'Edited Profile'},
  {ts: "2017-09-16T12:22:46.587Z", text: 'Registred'},
  {ts: "2017-09-16T12:21:46.587Z", text: 'Clicked Cart'},
  {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
];

// default format is "hh:mm"
<Timeline items={events} format="hh:mm a" />
```
The events should be ordered in a way you need. 

**For time formatting options [check momentjs format docs](https://momentjs.com/docs/#/displaying/format/).**

## Style

Currently there is no proper way to set the style. As a hack you can override the default style. Check for the default style in `src/style.scss`.


## For developers

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

<a href="https://www.buymeacoffee.com/arunghosh" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
