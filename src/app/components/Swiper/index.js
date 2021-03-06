import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Swipe } from 'swipejs/react'
import './style.scss'

export default class Swiper extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
    this.mySwipe = {}
  }

  static defaultProps = {
    data: []
  }

  static propTypes = {
    children: PropTypes.array,
    Pagination: PropTypes.bool,
    Controller: PropTypes.bool,
    Start: PropTypes.number,
    Autoplay: PropTypes.number
  }

  componentDidMount() {
    this.mySwipe = { ...this.swipe.instance }
  }

  handleCallback = index => {
    this.setState({ current: index })
  }

  onTransactionEnd = () => {
    this.mySwipe.restart()
  }

  prev = () => {
    this.mySwipe.prev()
  }

  next = () => {
    this.mySwipe.next()
  }

  onCur = index => {
    this.mySwipe.slide(parseInt(index, 10), 300)
  }

  render() {
    const { Pagination, Controller, Autoplay, Start = 0 } = this.props
    const { current } = this.state
    const elem = Array.from(Array(this.props.children.length), (v, k) => k) || []
    return (
      <div styleName="swiper">
        <Swipe
          ref={o => (this.swipe = o)}
          startSlide={Start}
          speed={300}
          auto={Autoplay}
          draggable={true}
          continuous={true}
          autoRestart={false}
          disableScroll={false}
          stopPropagation={false}
          callback={this.handleCallback}
          transitionEnd={this.onTransactionEnd}
        >
          {this.props.children}
        </Swipe>
        {Pagination ? (
          <div styleName="page" ref={e => (this.page = e)}>
            {elem.map(item => (
              <em key={item} styleName={item === current ? 'cur' : ''} onClick={() => this.onCur(item)}>
                {item + 1}
              </em>
            ))}
          </div>
        ) : null}
        {Controller ? (
          <Fragment>
            <div styleName="swiper-prev" onClick={this.prev}>
              <i className="iconfont">&#xe8ff;</i>
            </div>
            <div styleName="swiper-next" onClick={this.next}>
              <i className="iconfont">&#xe65e;</i>
            </div>
          </Fragment>
        ) : null}
      </div>
    )
  }
}
