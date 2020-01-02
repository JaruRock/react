import React, { Component } from 'react';
// import {
//     Badge,
//     Button,
//     Card,
//     CardBody,
//     CardHeader,
//     Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input,
//     Label,
//     Pagination,
//     PaginationItem,
//     PaginationLink,
//     Row,
//     Table
// } from 'reactstrap';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table, Form, FormGroup, Label, Input, FormText
} from "reactstrap";
import { BootstrapTable, TableHeaderColumn, DeleteButton, InsertButton, ButtonGroup, SizePerPageDropDown } from 'react-bootstrap-table';
import ApiService from "../../../service/ApiService";
import swal from 'sweetalert';
import NumberFormat from 'react-number-format';
import ReactFileReader from 'react-file-reader';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {AppSwitch} from "@coreui/react";

// function onRowSelect(row, isSelected, e) {
//     let rowId = '';
//     rowId += row.id + ',';
//     console.log('id ' + rowId);
//     // let rowStr = '';
//     // for (const prop in row) {
//     //     //console.log('prop ' + prop);
//     //
//     //     rowStr += row.id + ',';
//     //
//     //     console.log('id ' + row.id);
//     // }
//     // console.log(e);
//     // alert(`is selected: ${isSelected}, ${rowStr}`);
// }

// function onSelectAll(isSelected, rows) {
//     alert(`is select all: ${isSelected}`);
//     if (isSelected) {
//         alert('Current display and selected data: ');
//     } else {
//         alert('unselect rows: ');
//     }
//     for (let i = 0; i < rows.length; i++) {
//         alert(rows[i].id);
//     }
// }

// function customConfirm(next, dropRowKeys) {
//     const dropRowKeysStr = dropRowKeys.join(',');
//
//     console.log('dropRowKeysStr = ' + dropRowKeysStr)
//
//     swal({
//         title: "Are you sure?",
//         text: "You want to delete this user?",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//     })
//
//         .then(willDelete => {
//             if (willDelete) {
//                 ApiService.deleteUser(dropRowKeysStr)
//                     .then(res => {
//                         swal({
//                             title: "Done!",
//                             text: "User " +dropRowKeysStr+ " is deleted",
//                             icon: "success",
//                             button: true
//                         })
//
//                         //this.reloadUserList();
//                         // this.setState({users: this.state.users.filter(user => user.id !== userId)});
//                     });
//             }
//         });
//
// }

class Tables extends Component {

  constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            users: [],
            message: null,
            currentPage: 0,
            pageStart:1,
            pageTo:0,
        }
       //this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
        this.customConfirm = this.customConfirm.bind(this);
        this.editButton = this.editButton.bind(this);
        this.priceFormatter = this.priceFormatter.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
     //   this.onToggleDropDown = this.onToggleDropDown.bind(this);

    }

    // handleClick(e, index) {
    //     console.log('index = ' + index);
    //     console.log('this.pageSize = '+ this.pageSize);
    //     console.log('pageTo = ' + (index + 1) * this.pageSize);
    //     console.log('user list = ' + this.state.users.length);
    //     e.preventDefault();
    //
    //     // const pageTo = 0;
    //     if((index + 1) * this.pageSize > this.state.users.length){
    //         this.pageTo = this.state.users.length;
    //     }else{
    //         this.pageTo = (index + 1) * this.pageSize;
    //     }
    //
    //     console.log('pageTo = ' + this.pageTo);
    //
    //     this.setState({
    //         currentPage: index
    //     });
    //
    // }

    componentDidMount() {
      console.log('componentDidMount');
        this.reloadUserList();
    }

    reloadUserList() {
      console.log('reloadUserList');
      //console.log('currentPage = ' + this.currentPage);
        ApiService.fetchUsers()
            .then((res) => {
                // this.pageSize = 10;
                // this.pageTo = this.pageSize;
                //
                // this.pagesCount = Math.ceil(res.data.length / this.pageSize);
                //  console.log('res.data.result = ' + res.data.length);
                //  console.log('this.pagesCount = ' + this.pagesCount);

                this.setState({users: res.data})
                console.log('res header = '+ res.status);
            });

    }

    // deleteUser(userId) {
    //
    //     swal({
    //         title: "Are you sure?",
    //         text: "You want to delete this user?",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //
    //         .then(willDelete => {
    //             if (willDelete) {
    //                 ApiService.deleteUser(userId)
    //                     .then(res => {
    //                         swal({
    //                             title: "Done!",
    //                             text: "User " +userId+ " is deleted",
    //                             icon: "success",
    //                             button: true
    //                         })
    //
    //                         //this.reloadUserList();
    //                         // this.setState({users: this.state.users.filter(user => user.id !== userId)});
    //                     });
    //             }
    //         });
    //
    //     // ApiService.deleteUser(userId)
    //     //     .then(res => {
    //     //         this.setState({message : 'User deleted successfully.'});
    //     //         this.setState({users: this.state.users.filter(user => user.id !== userId)});
    //     //     })
    //
    // }

    editUser(id) {
      //alert('edit = ' + id);
        window.localStorage.setItem("id", id);
        this.props.history.push('/base/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("id");
        this.props.history.push('/base/add-user');
    }

    import() {
       alert('Import');
        this.onDrop.bind(this);
    }

    renderShowsTotal(start, to, total) {
        return (
            <span style={ { color: 'black' ,fontSize: 'small' } }>
                From { start } to { to }, Totals is { total }&nbsp; Rows per page : &nbsp;
            </span>
        );
    }

    priceFormatter(cell, row) {
         return <NumberFormat value={cell} displayType={'text'} thousandSeparator={true} />;
    }

    customConfirm(next, dropRowKeys) {

        let dropRowKeysStr = dropRowKeys.join(',');

        console.log('dropRowKeysStr = ' + dropRowKeysStr)

        swal({
            title: "Are you sure?",
            text: "You want to delete this user?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

            .then(willDelete => {
                if (willDelete) {
                    ApiService.deleteUser(dropRowKeysStr)
                        .then(res => {
                            swal({
                                title: "Done!",
                                text: "User " +dropRowKeysStr+ " is deleted",
                                icon: "success",
                                button: true
                            })
                            next();
                            this.reloadUserList();
                        });


                }
            });

    }

    createCustomDeleteButton = (onClick) => {
        return (
            <DeleteButton
                btnText='Delete'
                btnContextual='btn-warning'
                className='my-custom-class'
                btnGlyphicon='fa glyphicon glyphicon-trash fa-trash'
                />
        );
    }

    createCustomInsertButton = (onClick) => {
        return (
            <InsertButton
                btnText='Add User'
                btnContextual='btn-secondary'
                className='my-custom-class'
                btnGlyphicon='fa glyphicon glyphicon-plus fa-plus'
                onClick={ () => this.handleInsertButtonClick(onClick) }/>
        );
    }

    handleInsertButtonClick = (onClick) => {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick
        console.log('This is my custom function for InserButton click event');
        window.localStorage.removeItem("id");
        this.props.history.push('/base/add-user');
        //onClick();
    }

    editButton(cell, row) {
      // console.log('cell + ' + cell);
      // console.log('row + ' + row);
        return (

            <span className="badge badge-secondary"  onClick={() => this.editUser(cell)} ><i className="fa fa-edit"></i>&nbsp;Edit</span>
                // <Button color="primary" size="sm" onClick={() => this.editUser(cell)}>Edit</Button>

        );
    }

    handleFiles(files) {
    // handleFiles = files => {
        console.log('start');
        let reader = new FileReader();
        reader.onload = function(e) {
            // Use reader.result
            let csv = reader.result;
            if (csv.indexOf('"') >= 0) {
                //do something
                console.log('contain = ');
                console.log('csv.replace(/[\'"]+/g, \'\')' + csv.replace(/['"]+/g, ''));
                csv = csv.replace(/['"]+/g, '');
            }

            console.log('csv = ' + csv);
            let lines = csv.split("\n");
            let result = [];
            let headers=lines[0].split(",");
            console.log('headers = ' + headers);
            for(let i=1;i<lines.length;i++){
                let obj = {};
                let currentLine = lines[i].split(",");
                console.log('currentLine  = ' + currentLine);
                for(let j=0;j<headers.length;j++){
                    obj[headers[j]] = currentLine[j].toString().trim();
                }
                //console.log('obj = ' + obj);
                result.push(obj);
            }
            //return result; //JavaScript object
            console.log(result);
            //result= JSON.stringify(result); //JSON

            console.log('call api');
            ApiService.addUserList(result)
                .then(res => {

                    console.log('add user res header = '+ res.status);
                    console.log('add user res header = '+ res.message);
                    console.log('add user res header = '+ res);
                    //this.setState({message : 'User added successfully.'});
                    if (res.status === 200) {

                        swal({
                            title: "Done!",
                            text: "Add User Success",
                            icon: "success",
                            button: true
                        })
                            .then((value) => {
                           // swal(`The returned value is: ${value}`);
                                console.log('add user list success');
                                window.location.reload();
                        });

                        //this.props.history.push('/tables/tables');

                    }else{
                        swal({
                            title: "Error!",
                            text: "Add User Fail",
                            icon: "error",
                            timer: 2000,
                            button: false
                        })
                    }

                    console.log(' this.reloadUserList()')
                    //this.reloadUserList();

                    //this.props.history.push('/base/tables');
                })
                .catch(err => {
                    swal({
                        title: "Error!",
                        text: "Add User Fail " + err.response.data.message,
                        icon: "error",
                        button: true
                    })
                    // console.log('error = ' + err.response.data)
                    console.log('error = ' + err.response.data.message)
                    // console.log('error = ' + err)
                    // console.log('error = ' + err.message)
                });

        }
        reader.readAsText(files[0]);
        console.log('end');
        // this.reloadUserList();

    }

    createCustomButtonGroup = props => {
        return (
            <ButtonGroup className='my-custom-class' sizeClass='btn-group-sm'>
                { props.insertBtn }
                { props.deleteBtn }


                {/*<button type='file'*/}
                {/*        className={ 'btn btn-dark' }*/}
                {/*        onClick={() => this.import()}>*/}
                {/*    <i className="fa glyphicon glyphicon-import fa-upload"></i>&nbsp;Import*/}
                {/*</button>*/}

                {/*<Button color="light">*/}
                    {/*<Input type="file" name="file" id="exampleFile" className={'h-25 d-inline-block' } onClick={() => this.import()} />*/}
                    <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                        <Button color="dark" className="btn-square">
                            <span style={ { color: 'white' ,fontSize: 'smaller' }}><i className="fa glyphicon glyphicon-import fa-upload"></i>&nbsp;Import CSV</span>
                        </Button>
                    </ReactFileReader>
                {/*</Button>*/}

                { props.exportCSVBtn }
                { props.showSelectedOnlyBtn }
            </ButtonGroup>
        );
    }

    // onToggleDropDown = (toggleDropDown) => {
    //     console.log('toggle dropdown');
    //     //toggleDropDown();
    // }
    //
    // renderSizePerPageDropDown = (props) => {
    //     return (
    //         <SizePerPageDropDown
    //             className = 'my-size-per-page'
    //             btnContextual='btn-warning'
    //             variation='dropup'
    //             onClick={() => this.onToggleDropDown(props.toggleDropDown)}
    //         />
    //     )
    // }

    // renderPaginationPanel = (props) => {
    //     return (
    //         <div>
    //             <div className='dropup'>
    //                 <span>Change size per page: </span>
    //                 {props.components.sizePerPageDropdown}
    //             </div>
    //
    //
    //         </div>
    //     );
    // }

    render() {

        const selectRow = {
            mode: 'checkbox',
            showOnlySelected: true,
            clickToSelect: true,
            bgColor: '#dafbda',
            columnWidth: '60px'
        };

        const options = {
            btnGroup: this.createCustomButtonGroup,
            //paginationPanel: this.renderPaginationPanel,
            //sizePerPageDropDown: this.renderSizePerPageDropDown,
            //paginationPanel: this.renderPaginationPanel,
            handleConfirmDeleteRow: this.customConfirm,
            searchPosition: 'right',  // right or left
            //toolBar: this.createCustomToolBar,
            //sizePerPageDropDown: this.renderSizePerPageDropDown,
            //sizePerPageDropDown: this.renderSizePerPageDropDown,
            page: 1,  // which page you want to show as default
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: '25', value: 25
            }, {
                text: '50', value: 50
            }, {
                text: 'All', value: this.state.users.length
            } ], // you can change the dropdown list for size per page
            sizePerPageDropDown: this.renderSizePerPageDropDown,
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            prePageTitle: 'Go to previous', // Previous page button title
            nextPageTitle: 'Go to next', // Next page button title
            firstPageTitle: 'Go to first', // First page button title
            lastPageTitle: 'Go to Last', // Last page button title
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            //paginationPosition: this.renderPagination,
            paginationPosition: 'bottom',  // default is bottom, top and both is all available

             keepSizePerPageState: true, //default is false, enable will keep sizePerPage dropdown state(open/clode) when external rerender happened
             //hideSizePerPage: true, // You can hide the dropdown for sizePerPage
             alwaysShowAllBtns: true, // Always show next and previous button
             //withFirstAndLast: true, //> Hide the going to First and Last page button
            // hidePageListOnlyOnePage: true > Hide the page list if only one page.
            deleteBtn: this.createCustomDeleteButton,
            insertBtn: this.createCustomInsertButton,
            //showTotal: true,

        };

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>


                                <i className="fa fa-align-justify"></i>&nbsp; User

                                {/*<Button color="success" onClick={() => this.addUser()}>*/}
                                {/*    <i className="fa fa-align-justify"></i>&nbsp;Add User*/}
                                {/*</Button>*/}

                            </CardHeader>


                            <CardBody>
                                <BootstrapTable className='table table-striped table-hover table-sm table-align-middle dropup'
                                                selectRow={ selectRow } version='4'
                                                data={ this.state.users }
                                                pagination={ true }
                                                options={ options }
                                                exportCSV
                                                search
                                                insertRow
                                                deleteRow>
                                    <TableHeaderColumn dataField='id' isKey={ true } export={ false } dataSort>User ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField='userName' dataSort>User Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='password' hidden export>Password</TableHeaderColumn>
                                    <TableHeaderColumn dataField='firstName' dataSort>First Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='lastName' dataSort>Last Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField='age' dataSort dataAlign='right'>Age</TableHeaderColumn>
                                    <TableHeaderColumn dataField='salary' dataFormat={this.priceFormatter} dataAlign='right'>Salary</TableHeaderColumn>
                                    <TableHeaderColumn dataField='id' dataFormat={this.editButton} dataAlign='center' export={ false }>Action</TableHeaderColumn>
                                </BootstrapTable>
                            </CardBody>


                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Tables;