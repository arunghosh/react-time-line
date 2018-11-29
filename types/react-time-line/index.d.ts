// Type definitions for react-time-line 2.1
// Project: https://github.com/arunghosh/react-time-line
// Definitions by: 9renpoto <https://github.com/9renpoto>
// Definitions: https://github.com/arunghosh/react-time-line

import * as React from 'react'

type Item = {
  ts: string,
  text: string
}

type Props = {
  items: Item[]
}

export default class Timeline extends React.Component<Props> {}
