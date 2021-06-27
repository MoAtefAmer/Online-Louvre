import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar';
import { authService } from '../../../services/auth.service';
import { artActions } from '../../../actions/art.actions';
import { Grid,  Pagination } from 'semantic-ui-react';
import { GalleryCard } from '../../../components/Gallery/Card';

class Gallery extends Component {
  componentDidMount() {
    this.props.getAllArt('1', '8');
  }

  onPageChange = async (e, pageInfo) => {
    const { activePage } = pageInfo;

    this.props.getAllArt(activePage, '8');
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const role = localStorage.getItem(authService.userRoleKey);
    const username = localStorage.getItem(authService.usernameKey);

    const count =
      this.props.artReducer.isLoaded && this.props.artReducer.art.count;

    const { allPieces } =
      this.props.artReducer.isLoaded && this.props.artReducer.art;

    return (
      <div>
        <NavBar username={username} role={role ? role.toLowerCase() : ''} />
        <br />
        <h1 style={{ fontSize: '50px', transform: 'translateX(20vw)' }}>
          Gallery
        </h1>
        <Grid container>
          <Grid.Row columns={4}>
            {allPieces &&
              allPieces.map((card, i) => (
                <GalleryCard
                  id={card._id}
                  key={i}
                  imageUrl={card.picture}
                  artist={card.artist}
                  desc={card.description}
                  name={card.name}
                />
              ))}
          </Grid.Row>
          
          <Grid.Row centered>
            {' '}
            <Pagination
              boundaryRange={1}
              defaultActivePage={1}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              totalPages={count ? count : 1}
              onPageChange={this.onPageChange}
            />
          </Grid.Row>
        </Grid>
    
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    artReducer: state.artReducer,
  };
};

const actionCreators = {
  getAllArt: artActions.getAllArt,
};

const conntectedGallery = connect(mapState, actionCreators)(Gallery);

export { conntectedGallery as Gallery };
