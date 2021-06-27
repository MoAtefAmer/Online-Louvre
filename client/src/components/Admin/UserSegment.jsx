import React, { Component } from 'react'
import { Grid,Segment } from 'semantic-ui-react'

 export class UserSegment extends Component {
    render() {
     
        return (
            <Segment basic>
            <Grid>
              <Grid.Column width={2}>
                {this.props.platformId}
              </Grid.Column>
              <Grid.Column width={2}>{this.props.username}</Grid.Column>
              <Grid.Column width={5}>{this.props.phone}</Grid.Column>
              <Grid.Column
                style={{ overflowY: 'hidden', whiteSpace: 'nowrap' }}
                width={4}
              >
             
              
              </Grid.Column>
              
          
            </Grid>
        
          </Segment>
        )
    }
}

