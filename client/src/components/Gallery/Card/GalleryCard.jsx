import React, { Component } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import PictureModal from '../Modal/PictureModal';

import './GalleryCard.css';

export class GalleryCard extends Component {
  state = { trigger: false };

  handleClick = async (e) => {
    e.preventDefault();
    this.setState({ trigger: !this.state.trigger });
  };

  render() {
    return (
      <>
        <Grid.Column>
          <br />
          <Card>
            <Image
            onClick={this.handleClick}
              src={
                this.props.imageUrl 
              }
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Description>
                <button onClick={this.handleClick} className="card">
                  {this.props.artist}
                </button>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <PictureModal
          name={this.props.name}
          desc={this.props.desc}
          imageUrl={this.props.imageUrl}
          trigger={this.state.trigger}
          openModal={this.handleClick}
        />
      </>
    );
  }
}
