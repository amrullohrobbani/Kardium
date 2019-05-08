import React, { Component, Suspense } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row, Table } from 'reactstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Brush } from 'recharts';
import { connect } from 'react-redux';
import { handleLeadsStorage, pinnedStatus } from '../Store/Actions/leadActions';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class User extends Component {
constructor(props){
  super(props);
  this.state={
    pinned : null,
    id:''
  }
}


   componentWillUnmount() {
     this.props.onUnload();
   }

  handleChange = (event) => {
    event.preventDefault();
    this.props.handleLeadsStorage(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const pinned = this.props.patient.find( user => user.id.toString() === this.props.match.params.id).pinned
    const id = this.props.patient.find( user => user.id.toString() === this.props.match.params.id).id
    if (pinned === true){
      this.setState({ pinned : false, id : id }, function(){this.props.pinnedStatus(this.state)})
    } else {
      this.setState({ pinned : true , id : id }, function(){this.props.pinnedStatus(this.state)})
    }
  }

  updateBrush(pos) {
    if (this.state.timerId !== 0) {
      clearTimeout(this.timerId)
    }
    this.state.timerId = setTimeout(() => {
      this.setState({ startIndex: pos.startIndex, endIndex: pos.endIndex })
    }, 100000)
  }


  render() {
    const { leads, patient } = this.props;
      if (!patient) return <Suspense fallback={<div>Loading...</div>}></Suspense>
      const user = patient.find( user => user.id.toString() === this.props.match.params.id)


    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                        <tr>
                          <td>E - Mail</td>
                          <td><strong>{user.email}</strong></td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td><strong>{user.firstName} {user.lastName}</strong></td>
                        </tr>
                        <tr>
                          <td> Status </td>
                          <td> {user.pinned === true ?
                            <Col>
                              <Button block color="ghost-success" onClick={this.handleSubmit}>Pinned</Button>
                            </Col>:
                            <Col>
                              <Button block color="ghost-danger" onClick={this.handleSubmit}>Unpinned</Button>
                            </Col>} </td>
                        </tr>
                        <tr>
                          <td> Waktu Penggunaan </td>
                          <td>
                          <Col xs="12" md="9">
                            <Input type="select" name="select" id="select" onChange={this.handleChange} >
                              <option value="null">please select</option>
                              {
                                user.records.map( (value, key) => {
                                  return (
                                      <option key={key.toString()} value={value.toString()}>{value}</option>
                                  )
                                }
                              )}
                            </Input>
                          </Col>
                          </td>
                        </tr>
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card>
            <CardHeader>
                <strong><i className="icon-info pr-1"></i> ECG Result</strong>
            </CardHeader>
            <CardBody>
            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <YAxis domain={['dataMin', 'dataMax']} />
                  <Line type="monotone" dataKey="I" dot={false} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="I" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']}/>
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="II" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="II" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="III" dot={false} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="III" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="aVF" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="aVF" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="aVL" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="aVL" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis  domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="aVR" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="aVR" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="V1" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="V1" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="V2" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="V2" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="V3" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="V3" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                <YAxis domain={['dataMin', 'dataMax']} />
                  <Line type="monotone" dataKey="V4" dot={false} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="V4" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="V5" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="V5" stroke="#8884d8" dot={false} />
            </LineChart>

            <LineChart width={1000} height={250} data={this.props.leads}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

              <XAxis dataKey="Time" />
              <Tooltip />
              <YAxis domain={['dataMin', 'dataMax']} />
              <Legend />
              <Brush dataKey='I' height={30} stroke="#8884d8" onChange={(e) => this.updateBrush(e)} startIndex={this.state.startIndex} endIndex={this.state.endIndex} tick={true}>
                <LineChart data={this.props.leads}              >
                  <Line type="monotone" dataKey="V6" dot={false} />
                  <YAxis domain={['dataMin', 'dataMax']} />
                </LineChart>
              </Brush>
              <Line type="monotone" dataKey="V6" stroke="#8884d8" dot={false} isAnimationActive={true}/>
            </LineChart>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    leads : state.lead.leads,
    patient : state.firestore.ordered.patients,
    profile : state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLeadsStorage: (event) => dispatch(handleLeadsStorage(event)),
    onUnload: () => dispatch({ type: 'UNLOADED' }),
    pinnedStatus : (event) => dispatch(pinnedStatus(event))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection : 'patients' }
  ])
)(User);
