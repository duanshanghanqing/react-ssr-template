import React from 'react';
import { connect } from 'react-redux';
import { actions } from './store';

@connect(
  state => ({
    catlist: state.catReducer.catlist,
  }),
  actions,
)
class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // client store
  clientLoadData() {
    if (this.props.catlist.length === 0) {
      this.props.getCatList();
    }
  }

  componentDidMount() {
    this.clientLoadData();
  }

  render() {
    return (
      <div>
        {
          this.props.catlist.map(item => (
            <div key={item.id}>
              <img src={item.url} width="100%" />
            </div>
          ))
        }
      </div>
    );
  }
}

Cat.loadData = store => Promise.all([
  store.dispatch(actions.getCatList()),
]);

export default Cat;
