import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Segment, Grid,Button } from 'semantic-ui-react';
import PictureModal from '../Gallery/Modal/PictureModal'
 class ContentSegment extends Component {
    state = { trigger: false };

    handleClick = async (e) => {
      e.preventDefault();
      this.setState({ trigger: !this.state.trigger });
    };
   

    render() {
   
        return (
            <Segment basic>
            <Grid>
              <Grid.Column width={2}>
                <img
                alt=""
                  className="thumbnail"
                  src={this.props.imageUrl}
                />{' '}
              </Grid.Column>
              <Grid.Column width={2}>{this.props.name}</Grid.Column>
              <Grid.Column width={5}>{this.props.artist}</Grid.Column>
              <Grid.Column
                style={{ overflowY: 'hidden', whiteSpace: 'nowrap' }}
                width={4}
              >
                <div>
              {this.props.desc}
                </div>
                <button className="seedeets" onClick={this.handleClick}>See details</button>
              </Grid.Column>
              
              <Grid.Column width={3}><Button onClick={() =>this.props.deleteFn({id:this.props.id})} color="red">Delete</Button></Grid.Column>
            </Grid>
            <PictureModal
          name={this.props.name}
          desc={this.props.desc}
          imageUrl={this.props.imageUrl}
          trigger={this.state.trigger}
          openModal={this.handleClick}
        />
          </Segment>
        )
    }
}

const mapState = (state) => {
    return {
  ...state
    };
  };
  
  const actionCreators = {
   
  };
  
  const conntectedContentSegment = connect(mapState, actionCreators)(ContentSegment);
  
  export { conntectedContentSegment as ContentSegment };
  