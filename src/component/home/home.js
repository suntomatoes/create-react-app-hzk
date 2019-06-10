import React, { Component } from 'react'
import './home.css'
import jsondata from './tarbardata.json';
import { TabBar } from 'antd-mobile'
import Main from '../main/main.js'
import News from '../news/news.js'
import Chat from '../chat/chat.js'
import Mine from '../mine/mine.js'

// main
// news
// chat
// mine
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false
    }
  }
  renderContent(pageText) {
    switch (pageText) {
      case 'main':
        return <Main/>
        break
      case 'news':
        return <News/>
        break
      case 'chat':
        return <Chat/>
        break
      case 'mine':
        return <Mine/>
        break

      default:
        break
    }
  }

  render() {
    // eslint-disable-next-line react/react-in-jsx-scope
    let TabBarItimTempalte = jsondata.tarbardata.map((item,i)=>{
      return(
        <TabBar.Item
        title={item.title}
        key={item.key}
        icon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                `${item.iconUrl}`
            }}
          />
        }
        selectedIcon={
          <div
            style={{
              width: '22px',
              height: '22px',
              background:
                `${item.selectedIconUrl}`
            }}
          />
        }
        selected={this.state.selectedTab === `${item.selectedPath}`}
        onPress={() => {
          this.setState({
            selectedTab: `${item.selectedPath}`
          })
        }}
        data-seed="logId"
      >
        {this.renderContent(`${item.selectedPath}`)}
      </TabBar.Item>
      )
    })
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
        tabBarPosition="bottom"
      >
        {TabBarItimTempalte}
      </TabBar>
    )
  }
}
export default Home
