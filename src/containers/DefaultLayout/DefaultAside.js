import React, { Component, Suspense } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, ListGroup, ListGroupItem, InputGroup, InputGroupAddon, InputGroupText, Input, Col, Row, Alert, Form, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react';
import { connect } from 'react-redux';
import { changeProfile } from '../../views/Store/Actions/authActions';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      username : '',
      str : '',
      id: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.autocomplete] : event.target.value,
      id:this.props.auth.uid
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.changeProfile(this.state)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { authError, profile, children, ...attributes } = this.props;
    if (!profile) return <Suspense fallback={<div>Loading...</div>}></Suspense>

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
        {/*  <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                     onClick={() => {
                       this.toggle('3');
                     }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Cara Menggunakan</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>- Website Procedure</div>
                <div>1. Register</div>
                <div>2. Logout</div>
                <div>3. Sign In</div>
                <div>4. Buka Patient List</div>
                <div>5. Buka salah satu file yang ada di waktu penggunaan</div>
                <div>6. Coba cek Pinned Status</div>
                <div>7. Sign Out</div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>right now
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i> Kardium.id
                </small>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
          {/*<TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt...
              </small>
            </div>
          </TabPane>*/}
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Notification</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">for your Notification
                </small>
              </div>
              <div className="clearfix mt-4">
                <small><b>Profile</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
              </div>
            </div>
            <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="icon-user"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="text" placeholder={profile.username} autoComplete="username" onChange={this.handleChange} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="icon-credit-card"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="text" placeholder={profile.str} autoComplete="str" onChange={this.handleChange} />
            </InputGroup>
            <Row className="justify-content-center">
              <Col>
                {authError ?
                  <Alert color="danger">
                    {authError}
                  </Alert> : null
                }
              </Col>
            </Row>
            <Button type="submit" color="success" block>Change Profile</Button>
          </Form>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    profile: state.firebase.profile,
    auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeProfile: (user) => dispatch(changeProfile(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultAside);
