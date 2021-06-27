import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar';
import { authService } from '../../services';
import { Segment, Grid, Pagination } from 'semantic-ui-react';
import artPiecesIcon from '../../Assets/nav/art/supervised_user_circle.png';
import userIcon from '../../Assets/nav/users/user.png';
import './AdminPage.css';
import { ContentSegment } from '../../components/Admin';
import {UserSegment} from '../../components/Admin'
import { artActions, adminActions } from '../../actions';


class AdminPage extends Component {
  componentDidMount() {
    this.props.getAllArt('1', '8');
    this.props.getAllUsers('1', '8');
  }

  onPageChange = async (e, pageInfo) => {
    const { activePage } = pageInfo;

    if (this.state.artButton) this.props.getAllArt(activePage, '8');

    if (this.state.userButton) this.props.getAllUsers(activePage, '8');
  };

  constructor() {
    super();

    this.state = {
      artButton: true,
      userButton: false,
    };
  }

  changeColor() {
    this.setState({
      artButton: !this.state.artButton,
      userButton: !this.state.userButton,
    });
  }

  deleteArtPiece = async(body) =>{
   
     await this.props.deleteArtPiece(body)
  }

  render() {
    const role = localStorage.getItem(authService.userRoleKey);
    const username = localStorage.getItem(authService.usernameKey);
    let btn_class_art = !this.state.artButton
      ? 'supervisedArtUnClicked'
      : 'supervisedArtClicked';

    let btn_class_user = !this.state.userButton
      ? 'userButtonUnclicked'
      : 'userButtonClicked';

    const count =
      this.props.artReducer.isLoaded && this.props.artReducer.art.count;

    const { allPieces } =
      this.props.artReducer.isLoaded && this.props.artReducer.art;


      const countUser =
      this.props.adminReducer.isLoaded && this.props.adminReducer.user.count;

    const { allUsers } =
      this.props.adminReducer.isLoaded && this.props.adminReducer.user;

    return (
      <div>
        <NavBar username={username} role={role ? role.toLowerCase() : ''} />

        <Grid celled="internally">
          <Grid.Column width={1} style={{ backgroundColor: 'white' }}>
            <div className="btnGroup">
              <img
                alt=""
                src={artPiecesIcon}
                className={btn_class_art}
                onClick={this.changeColor.bind(this)}
              />
              <br />
              <br />
              <br />
              <img
                alt=""
                src={userIcon}
                className={btn_class_user}
                onClick={this.changeColor.bind(this)}
              />
            </div>
          </Grid.Column>
          {this.state.artButton ? (
            <Grid.Column width={15}>
              <br />
              <h2>Art Pieces</h2>
              <br />
              <Segment>
                <Segment inverted tertiary basic>
                  <Grid>
                    <Grid.Column width={2}>Item</Grid.Column>
                    <Grid.Column width={2}>Name</Grid.Column>
                    <Grid.Column width={5}>Artist</Grid.Column>
                    <Grid.Column width={4}>Description</Grid.Column>
                    <Grid.Column width={3}>Action</Grid.Column>
                  </Grid>
                </Segment>

                {allPieces &&
                  allPieces.map((card, i) => (
                    <ContentSegment
                      id={card._id}
                      key={i}
                      imageUrl={card.picture}
                      artist={card.artist}
                      desc={card.description}
                      name={card.name}
                      deleteFn={this.deleteArtPiece}
                    />
                  ))}

                <Grid.Row centered style={{ transform: 'translate(35%,0vh)' }}>
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
              </Segment>
            </Grid.Column>
          ) : (
            <Grid.Column width={15}>
              <br />
              <h2>Users</h2>
              <br />
              <Segment>
                <Segment inverted tertiary basic>
                  <Grid>
                    <Grid.Column width={2}>ID</Grid.Column>
                    <Grid.Column width={2}>User Email</Grid.Column>
                    <Grid.Column width={5}>Phone Number</Grid.Column>
                    
                  </Grid>
                </Segment>

                {allUsers &&
                  allUsers.map((card, i) => (
                      card.userRole==="GUEST"&&
                    <UserSegment
                      id={card._id}
                      key={i}
                     platformId={card.platform_id}
                     phone={card.phone.number}
                     username={card.username}
                    />
                  ))}

                <Grid.Row centered style={{ transform: 'translate(35%,0vh)' }}>
                  <Pagination
                    boundaryRange={1}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={countUser ? countUser : 1}
                    onPageChange={this.onPageChange}
                  />
                </Grid.Row>
              </Segment>
            </Grid.Column>
          )}
        </Grid>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    artReducer: state.artReducer,
    adminReducer: state.adminReducer,
  };
};

const actionCreators = {
  getAllArt: artActions.getAllArt,
  getAllUsers: adminActions.getAllUsers,
  deleteArtPiece:artActions.deleteArtPiece,
};

const conntectedAdminPage = connect(mapState, actionCreators)(AdminPage);

export { conntectedAdminPage as AdminPage };
