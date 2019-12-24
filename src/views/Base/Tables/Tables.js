// import React, { Component } from 'react';
// // import {
// //     Badge,
// //     Button,
// //     Card,
// //     CardBody,
// //     CardHeader,
// //     Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input,
// //     Label,
// //     Pagination,
// //     PaginationItem,
// //     PaginationLink,
// //     Row,
// //     Table
// // } from 'reactstrap';
// import {
//     Button,
//     Card,
//     CardBody,
//     CardHeader,
//     Col,
//     Collapse,
//     DropdownItem,
//     DropdownMenu,
//     DropdownToggle,
//     Row,
//     Table, UncontrolledDropdown
// } from "reactstrap";
// import { BootstrapTable, TableHeaderColumn, DeleteButton, InsertButton, ButtonGroup } from 'react-bootstrap-table';
// import ApiService from "../../../service/ApiService";
// import swal from 'sweetalert';
//
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import {AppSwitch} from "@coreui/react";
//
// // function onRowSelect(row, isSelected, e) {
// //     let rowId = '';
// //     rowId += row.id + ',';
// //     console.log('id ' + rowId);
// //     // let rowStr = '';
// //     // for (const prop in row) {
// //     //     //console.log('prop ' + prop);
// //     //
// //     //     rowStr += row.id + ',';
// //     //
// //     //     console.log('id ' + row.id);
// //     // }
// //     // console.log(e);
// //     // alert(`is selected: ${isSelected}, ${rowStr}`);
// // }
//
// // function onSelectAll(isSelected, rows) {
// //     alert(`is select all: ${isSelected}`);
// //     if (isSelected) {
// //         alert('Current display and selected data: ');
// //     } else {
// //         alert('unselect rows: ');
// //     }
// //     for (let i = 0; i < rows.length; i++) {
// //         alert(rows[i].id);
// //     }
// // }
//
// // function customConfirm(next, dropRowKeys) {
// //     const dropRowKeysStr = dropRowKeys.join(',');
// //
// //     console.log('dropRowKeysStr = ' + dropRowKeysStr)
// //
// //     swal({
// //         title: "Are you sure?",
// //         text: "You want to delete this user?",
// //         icon: "warning",
// //         buttons: true,
// //         dangerMode: true,
// //     })
// //
// //         .then(willDelete => {
// //             if (willDelete) {
// //                 ApiService.deleteUser(dropRowKeysStr)
// //                     .then(res => {
// //                         swal({
// //                             title: "Done!",
// //                             text: "User " +dropRowKeysStr+ " is deleted",
// //                             icon: "success",
// //                             button: true
// //                         })
// //
// //                         //this.reloadUserList();
// //                         // this.setState({users: this.state.users.filter(user => user.id !== userId)});
// //                     });
// //             }
// //         });
// //
// // }
//
// class Tables extends Component {
//   constructor(props) {
//         super(props)
//         this.state = {
//             firstName: '',
//             users: [],
//             message: null,
//             currentPage: 0,
//             pageStart:1,
//             pageTo:0,
//         }
//         this.deleteUser = this.deleteUser.bind(this);
//         this.editUser = this.editUser.bind(this);
//         this.addUser = this.addUser.bind(this);
//         this.reloadUserList = this.reloadUserList.bind(this);
//         this.customConfirm = this.customConfirm.bind(this);
//         this.editButton = this.editButton.bind(this);
//         //this.onToggleDropDown = this.onToggleDropDown.bind(this);
//
//     }
//
//     // handleClick(e, index) {
//     //     console.log('index = ' + index);
//     //     console.log('this.pageSize = '+ this.pageSize);
//     //     console.log('pageTo = ' + (index + 1) * this.pageSize);
//     //     console.log('user list = ' + this.state.users.length);
//     //     e.preventDefault();
//     //
//     //     // const pageTo = 0;
//     //     if((index + 1) * this.pageSize > this.state.users.length){
//     //         this.pageTo = this.state.users.length;
//     //     }else{
//     //         this.pageTo = (index + 1) * this.pageSize;
//     //     }
//     //
//     //     console.log('pageTo = ' + this.pageTo);
//     //
//     //     this.setState({
//     //         currentPage: index
//     //     });
//     //
//     // }
//
//     componentDidMount() {
//         this.reloadUserList();
//     }
//
//     reloadUserList() {
//       console.log('reloadUserList');
//       //console.log('currentPage = ' + this.currentPage);
//         ApiService.fetchUsers()
//             .then((res) => {
//                 // this.pageSize = 10;
//                 // this.pageTo = this.pageSize;
//                 //
//                 // this.pagesCount = Math.ceil(res.data.length / this.pageSize);
//                 //  console.log('res.data.result = ' + res.data.length);
//                 //  console.log('this.pagesCount = ' + this.pagesCount);
//
//                 this.setState({users: res.data})
//                 console.log('res header = '+ res.status);
//             });
//
//     }
//
//     deleteUser(userId) {
//
//         swal({
//             title: "Are you sure?",
//             text: "You want to delete this user?",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//         })
//
//             .then(willDelete => {
//                 if (willDelete) {
//                     ApiService.deleteUser(userId)
//                         .then(res => {
//                             swal({
//                                 title: "Done!",
//                                 text: "User " +userId+ " is deleted",
//                                 icon: "success",
//                                 button: true
//                             })
//
//                             //this.reloadUserList();
//                             // this.setState({users: this.state.users.filter(user => user.id !== userId)});
//                         });
//                 }
//             });
//
//         // ApiService.deleteUser(userId)
//         //     .then(res => {
//         //         this.setState({message : 'User deleted successfully.'});
//         //         this.setState({users: this.state.users.filter(user => user.id !== userId)});
//         //     })
//
//     }
//
//     editUser(id) {
//       //alert('edit = ' + id);
//         window.localStorage.setItem("id", id);
//         this.props.history.push('/base/edit-user');
//     }
//
//     addUser() {
//         window.localStorage.removeItem("id");
//         this.props.history.push('/base/add-user');
//     }
//
//     import() {
//        alert('Import');
//     }
//
//      // onChange = (e) =>
//      //     this.setState({ [e.target.name]: e.target.value });
//
//     // handleChange (e) {
//     //     this.setState({ [e.target.name]: e.target.value });
//     //
//     //     console.log('e.target.name = ' + e.target.name);
//     //     console.log('e.target.value = ' + e.target.value);
//     //     console.log('this.state.firstName = ' + this.state.firstName);
//     //
//     //     // if((index + 1) * this.pageSize > this.state.users.length){
//     //     //     this.pageTo = this.state.users.length;
//     //     // }else{
//     //     //     this.pageTo = (index + 1) * this.pageSize;
//     //     // }
//     //
//     //     ApiService.fetchUserByFirstName(e.target.value)
//     //         .then((res) => {
//     //
//     //             this.pageSize = 10;
//     //             if(res.data.length < this.pageSize){
//     //                 this.pageTo = res.data.length;
//     //             }else{
//     //                 this.pageTo = this.pageSize;
//     //             }
//     //
//     //             this.pagesCount = Math.ceil(res.data.length / this.pageSize);
//     //             console.log('res.data.result = ' + res.data.length);
//     //             this.setState({users: res.data})
//     //
//     //         });
//     //
//     // }
//
//     // searchUser() {
//     //     console.log('this.state.userName = ' + this.state.userName);
//     //     ApiService.fetchUserById(this.state.userName)
//     //         .then(res => {
//     //             this.setState({message : 'User search successfully.'});
//     //             this.setState({users: this.state.users.filter(user => user.id !== this.state.userName)});
//     //         })
//     // }
//
//     // onToggleDropDown = (option) => {
//     //     // do your stuff here
//     //     console.log('toggle dropdown');
//     //     this.props.onSizePerPageList(Number(option.target.value))
//     // }
//     //
//     // renderSizePerPageDropDown = (props) => {
//     //     return (
//     //         <select id='select' name='group' className='form-control input-sm' size='1' onChange={this.onToggleDropDown}>
//     //             <option value='5'>5</option>
//     //             <option value='10'>10</option>
//     //         </select>
//     //     );
//     // }
//
//     renderShowsTotal(start, to, total) {
//         return (
//             <span style={ { color: 'black' ,fontSize: 'small' } }>
//                 From { start } to { to }, Totals is { total }&nbsp; Rows per page : &nbsp;
//             </span>
//         );
//     }
//
//     renderPagination(){
//       return(
//           <span>
//               xxx
//           </span>
//       )
//     }
//
//     // createCustomToolBar = props => {
//     //     return (
//     //         <div style={ { margin: '15px' } }>
//     //             { props.components.btnGroup }
//     //             <div className='col-xs-8 col-sm-4 col-md-4 col-lg-2'>
//     //                 { props.components.searchPanel }
//     //             </div>
//     //         </div>
//     //     );
//     // }
//
//     // handleDeleteButtonClick = (onClick) => {
//     //     // Custom your onClick event here,
//     //     // it's not necessary to implement this function if you have no any process before onClick
//     //     console.log('This is my custom function for DeleteButton click event' );
//     //     onClick();
//     // }
//     //
//     // createCustomDeleteButton = (onClick) => {
//     //   console.log('createCustomDeleteButton')
//     //     return (
//     //         <DeleteButton
//     //             btnText='Delete'
//     //             btnContextual='btn-danger'
//     //             className='my-custom-class'
//     //             btnGlyphicon='fa glyphicon glyphicon-trash fa-trash'
//     //             onClick={ e => this.handleDeleteButtonClick(onClick) }/>
//     //     );
//     //     // If you want have more power to custom the child of DeleteButton,
//     //     // you can do it like following
//     //     // return (
//     //     //   <DeleteButton
//     //     //     btnContextual='btn-warning'
//     //     //     className='my-custom-class'
//     //     //     onClick={ () => this.handleDeleteButtonClick(onClick) }>
//     //     //     { ... }
//     //     //   </DeleteButton>
//     //     // );
//     // }
//
//     customConfirm(next, dropRowKeys) {
//
//         let dropRowKeysStr = dropRowKeys.join(',');
//
//         console.log('dropRowKeysStr = ' + dropRowKeysStr)
//
//         swal({
//             title: "Are you sure?",
//             text: "You want to delete this user?",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//         })
//
//             .then(willDelete => {
//                 if (willDelete) {
//                     ApiService.deleteUser(dropRowKeysStr)
//                         .then(res => {
//                             swal({
//                                 title: "Done!",
//                                 text: "User " +dropRowKeysStr+ " is deleted",
//                                 icon: "success",
//                                 button: true
//                             })
//                             next();
//                             this.reloadUserList();
//                         });
//
//
//                 }
//             });
//
//         // if (confirm(`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)) {
//         //     // If the confirmation is true, call the function that
//         //     // continues the deletion of the record.
//         //     next();
//         // }
//     }
//
//     createCustomDeleteButton = (onClick) => {
//         return (
//             <DeleteButton
//                 btnText='Delete'
//                 btnContextual='btn-danger'
//                 className='my-custom-class'
//                 btnGlyphicon='fa glyphicon glyphicon-trash fa-trash'
//                 />
//         );
//     }
//
//     createCustomInsertButton = (onClick) => {
//         return (
//             <InsertButton
//                 btnText='Add User'
//                 btnContextual='btn-warning'
//                 className='my-custom-class'
//                 btnGlyphicon='fa glyphicon glyphicon-plus fa-plus'
//                 onClick={ () => this.handleInsertButtonClick(onClick) }/>
//         );
//     }
//
//     handleInsertButtonClick = (onClick) => {
//         // Custom your onClick event here,
//         // it's not necessary to implement this function if you have no any process before onClick
//         console.log('This is my custom function for InserButton click event');
//         window.localStorage.removeItem("id");
//         this.props.history.push('/base/add-user');
//         //onClick();
//     }
//
//     editButton(cell, row) {
//       console.log('cell + ' + cell);
//       console.log('row + ' + row);
//         return (
//
//                 <Button color="primary" size="sm" onClick={() => this.editUser(cell)}>Edit</Button>
//
//         );
//     }
//
//
//
//     createCustomButtonGroup = props => {
//         return (
//             <ButtonGroup className='my-custom-class' sizeClass='btn-group-sm'>
//                 { props.insertBtn }
//                 { props.deleteBtn }
//                 { props.exportCSVBtn }
//                 { props.showSelectedOnlyBtn }
//                 <button type='button'
//                         className={ 'btn btn-dark' }
//                         onClick={() => this.import()}>
//                     <i className="fa glyphicon glyphicon-import fa-upload"></i>&nbsp;Import
//                 </button>
//             </ButtonGroup>
//         );
//     }
//
//     // renderPaginationPanel = (props) => {
//     //     return (
//     //         <div>
//     //
//     //             <div>
//     //                 <span>Change size per page: </span>
//     //                 { props.components.sizePerPageDropdown }
//     //             </div>
//     //
//     //         </div>
//     //     );
//     // }
//
//     // Button color="danger" size="sm" className="btn-pill"
//     render() {
//
//         // const { currentPage } = this.state;
//         // const { pageStart } = this.state;
//
//         const selectRow = {
//             mode: 'checkbox',
//             showOnlySelected: true,
//             clickToSelect: true,
//             bgColor: '#dafbda',
//             columnWidth: '60px'
//             // onSelect: onRowSelect,
//             // onSelectAll: onSelectAll
//         };
//
//         const options = {
//             btnGroup: this.createCustomButtonGroup,
//             //paginationPanel: this.renderPaginationPanel,
//             handleConfirmDeleteRow: this.customConfirm,
//             searchPosition: 'right',  // right or left
//             //toolBar: this.createCustomToolBar,
//             //sizePerPageDropDown: this.renderSizePerPageDropDown,
//             //sizePerPageDropDown: this.renderSizePerPageDropDown,
//             page: 1,  // which page you want to show as default
//             sizePerPageList: [ {
//                 text: '5', value: 5
//             }, {
//                 text: '10', value: 10
//             }, {
//                 text: '25', value: 25
//             }, {
//                 text: '50', value: 50
//             }, {
//                 text: 'All', value: this.state.users.length
//             } ], // you can change the dropdown list for size per page
//             sizePerPage: 5,  // which size per page you want to locate as default
//             pageStartIndex: 1, // where to start counting the pages
//             paginationSize: 3,  // the pagination bar size.
//             prePage: 'Prev', // Previous page button text
//             nextPage: 'Next', // Next page button text
//             firstPage: 'First', // First page button text
//             lastPage: 'Last', // Last page button text
//             prePageTitle: 'Go to previous', // Previous page button title
//             nextPageTitle: 'Go to next', // Next page button title
//             firstPageTitle: 'Go to first', // First page button title
//             lastPageTitle: 'Go to Last', // Last page button title
//             paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
//             //paginationPosition: this.renderPagination,
//             paginationPosition: 'bottom',  // default is bottom, top and both is all available
//
//              keepSizePerPageState: true, //default is false, enable will keep sizePerPage dropdown state(open/clode) when external rerender happened
//              //hideSizePerPage: true, // You can hide the dropdown for sizePerPage
//              alwaysShowAllBtns: true, // Always show next and previous button
//              //withFirstAndLast: true, //> Hide the going to First and Last page button
//             // hidePageListOnlyOnePage: true > Hide the page list if only one page.
//             deleteBtn: this.createCustomDeleteButton,
//             insertBtn: this.createCustomInsertButton,
//             //showTotal: true,
//
//         };
//
//         return (
//             <div className="animated fadeIn">
//                 <Row>
//                     <Col>
//                         <Card>
//                             <CardHeader>
//
//
//                                 <i className="fa fa-align-justify"></i>&nbsp; User
//
//                                 {/*<Button color="success" onClick={() => this.addUser()}>*/}
//                                 {/*    <i className="fa fa-align-justify"></i>&nbsp;Add User*/}
//                                 {/*</Button>*/}
//
//                             </CardHeader>
//
//
//
//                             <CardBody>
//
//
//                                 <BootstrapTable className='table table-striped table-hover table-sm table-align-middle'
//                                                 selectRow={ selectRow } version='4'
//                                                 data={ this.state.users }
//                                                 pagination={ true }
//                                                 options={ options }
//                                                 exportCSV
//                                                 search
//                                                 insertRow
//                                                 deleteRow>
//                                     <TableHeaderColumn dataField='id' isKey={ true } dataSort>User ID</TableHeaderColumn>
//                                     <TableHeaderColumn dataField='userName' dataSort>User Name</TableHeaderColumn>
//                                     <TableHeaderColumn dataField='firstName' dataSort>First Name</TableHeaderColumn>
//                                     <TableHeaderColumn dataField='lastName' dataSort>Last Name</TableHeaderColumn>
//                                     <TableHeaderColumn dataField='age' dataSort>Age</TableHeaderColumn>
//                                     <TableHeaderColumn dataField='salary'>Salary</TableHeaderColumn>
//                                     <TableHeaderColumn dataField='id' dataFormat={this.editButton}>Action</TableHeaderColumn>
//
//                                 </BootstrapTable>
//
//                             </CardBody>
//
//
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//         );
//     }
//
// }
//
// export default Tables;
