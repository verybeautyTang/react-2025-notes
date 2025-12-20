import React from 'react'

interface BasicProps {
  name: string
}
export class BasicClass extends React.Component<BasicProps> {
  state = {
    count: 0,
  }
  constructor(props: BasicProps) {
    super(props)
  }
  render() {
    return (
      <div>
        hello， I am ClassComponent{this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>clickMe</button>
      </div>
    )
  }
}
