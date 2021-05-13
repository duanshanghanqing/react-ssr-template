import React from 'react';
import { connect } from 'react-redux';
import reactMixin from 'react-mixin';
import { Image } from 'antd';
import { actions } from './store';
import mixins from '../../mixins/index';
import './style.css';
import './style.less';

@connect(
  state => ({
    dog: state.homeReducer.dog,
  }),
  actions,
)
@reactMixin.decorate(mixins())
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // client store
  clientLoadData() {
    if (Object.keys(this.props.dog).length === 0) {
      this.props.getDog();
    }
  }

  componentDidMount() {
    this.clientLoadData();
  }

  render() {
    return (
      <div className="Home">
        <h1 className="HomeText">a react ssr web app</h1>
        <Image
          width="100%"
          src={this.props.dog.message}
        />
      </div>
    );
  }
}

// https://reacttraining.com/react-router/web/guides/server-rendering
Home.loadData = store => Promise.all([
  store.dispatch(actions.getDog()),
]);


export default Home;
