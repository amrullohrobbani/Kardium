import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function UserRow(props) {

  const user = props.user
  const userLink = `/users/${user.id}`

  return (
    <tr key={user.id.toString()}>
      <td><Link to={userLink}>{user.firstName}</Link></td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
    </tr>
  )
}

class Users extends Component {

  render() {
    const { patient, profile } = this.props
    if (!patient) return <Suspense fallback={<div>Loading...</div>}></Suspense>
    const patientList = patient.filter((user) => user.doctorSTR === profile.str)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Patient <small className="text-muted">list</small>
              </CardHeader>
              <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead>
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">E-mail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStateToProps = ( state ) => {
  return {
    patient : state.firestore.ordered.patients,
    profile : state.firebase.profile
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'patients'}
  ])
)(Users);
