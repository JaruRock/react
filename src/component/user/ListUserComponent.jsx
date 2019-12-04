// import React, { Component } from 'react'
// import ApiService from "../../service/ApiService";
// import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
//
// class ListUserComponent extends Component {
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             users: [],
//             message: null
//         }
//         this.deleteUser = this.deleteUser.bind(this);
//         this.editUser = this.editUser.bind(this);
//         this.addUser = this.addUser.bind(this);
//         this.reloadUserList = this.reloadUserList.bind(this);
//     }
//
//     componentDidMount() {
//         this.reloadUserList();
//     }
//
//     reloadUserList() {
//         ApiService.fetchUsers()
//             .then((res) => {
//                 // console.log('res.data.result = ' + res);
//                  console.log('res.data.result = ' + res.data);
//                 this.setState({users: res.data})
//             });
//     }
//
//     deleteUser(userId) {
//         ApiService.deleteUser(userId)
//             .then(res => {
//                 this.setState({message : 'User deleted successfully.'});
//                 this.setState({users: this.state.users.filter(user => user.id !== userId)});
//             })
//
//     }
//
//     editUser(id) {
//         window.localStorage.setItem("id", id);
//         this.props.history.push('/edit-user');
//     }
//
//     addUser() {
//         window.localStorage.removeItem("id");
//         this.props.history.push('/add-user');
//     }
//
//     render() {
//
//         return (
//             <div className="animated fadeIn">
//                 <Row>
//                     <Col>
//                         <Card>
//                             <CardHeader>
//                                 <i className="fa fa-align-justify"></i> Combined All Table
//                             </CardHeader>
//                             <CardBody>
//                                 <Table hover bordered striped responsive size="sm">
//                                     <thead>
//                                     <tr>
//                                         <th>No.</th>
//                                         <th>First Name</th>
//                                         <th>Last Name</th>
//                                         <th>User name</th>
//                                         <th>Age</th>
//                                         <th>Salary</th>
//                                     </tr>
//                                     </thead>
//                                     <tbody>
//                                     {
//                                         this.state.users.map(
//                                             user =>
//                                                 <tr key={user.id}>
//                                                     <td>{user.firstName}</td>
//                                                     <td>{user.lastName}</td>
//                                                     <td>{user.username}</td>
//                                                     <td>{user.age}</td>
//                                                     <td>{user.salary}</td>
//                                                     <td>
//                                                         <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button>
//                                                         <button className="btn btn-success" onClick={() => this.editUser(user.id)}> Edit</button>
//                                                     </td>
//                                                 </tr>
//                                         )
//                                     }
//                                     </tbody>
//                                 </Table>
//                                 <nav>
//                                     <Pagination>
//                                         <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
//                                         <PaginationItem active>
//                                             <PaginationLink tag="button">1</PaginationLink>
//                                         </PaginationItem>
//                                         <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
//                                         <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
//                                         <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
//                                         <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
//                                     </Pagination>
//                                 </nav>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//
//         );
//     }
//
// }
//
// export default ListUserComponent;