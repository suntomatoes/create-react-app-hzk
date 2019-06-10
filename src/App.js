import React from 'react';

import './App.css';
import AppRouter from './router.js';
//测试ui组件
import 'antd-mobile/dist/antd-mobile.css';
// import { Button } from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return <div>
      {/* <Button>default</Button> */}
    <AppRouter/>
    </div>
  }
}

export default App;
