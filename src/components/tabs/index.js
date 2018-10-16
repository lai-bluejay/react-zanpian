import React, { Component } from "react"
import { Link } from 'react-router-dom';
import css from "./index.scss"

class Tabs extends Component{
	constructor(props){
		super(props)
		this.state = {
			currentIndex: 0
		}
  }

	tabLi( index ){
		return index === this.state.currentIndex ? css.active : ''
	}

	tabCon( index ){
		return index === this.state.currentIndex ? css.show : css.hide
	}

	render(){
    const { icon, title, moreLink, moreTitle, isJp } = this.props
		return(
			<div>
        { /* 动态生成Tab导航 */ }
        <div className={css.title}>
          <Link to={moreLink}>{moreTitle}<i className="iconfont icon-right"></i></Link>
          <h2>{icon} {title}</h2>
          <ul className={css.tab}>
            {
              React.Children.map(this.props.children, (element, index) => {
                return(
                  <li onClick={() => { this.setState({ currentIndex: index })}} className={ this.tabLi(index) }>{ `${ index !== 0 ? '周' : ''}${element.props.name}` }{isJp && index !== 0 ? <em>{isJp[index]}</em> : ''}</li>
                )
              })
            }
          </ul>
        </div>
				{ /* Tab内容区域 */ }
				{
					React.Children.map(this.props.children, (element, index) => {
						return(
							<div className={ this.tabCon(index) }>{ element }</div>
						)
					})
				}
			</div>
		)
	}
}

export default Tabs
