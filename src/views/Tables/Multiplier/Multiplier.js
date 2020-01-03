import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table, Form, FormGroup, Label, Input, FormText
} from "reactstrap";
import { BootstrapTable, TableHeaderColumn, DeleteButton, InsertButton, ButtonGroup, SizePerPageDropDown, ExportCSVButton, ShowSelectedOnlyButton } from 'react-bootstrap-table';
import MultiplierService from "../../../service/MultiplierService";
import swal from 'sweetalert';
import NumberFormat from 'react-number-format';
import ReactFileReader from 'react-file-reader';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Multiplier extends Component {

  constructor(props) {
        super(props)
        this.state = {
            multipliers: [],
            message: null,
            currentPage: 0,
            pageStart:1,
            pageTo:0,
        }
        // this.editMultiplier = this.editMultiplier.bind(this);
        // this.addMultiplier = this.addMultiplier.bind(this);
        this.reloadMultiplierList = this.reloadMultiplierList.bind(this);
        // this.customConfirm = this.customConfirm.bind(this);
        // this.editButton = this.editButton.bind(this);
        // this.priceFormatter = this.priceFormatter.bind(this);
        // this.handleFiles = this.handleFiles.bind(this);
    }

    componentDidMount() {
      console.log('componentDidMount');
        this.reloadMultiplierList();
    }

    reloadMultiplierList() {
      console.log('reloadMultiplierList');
        MultiplierService.fetchMultiplier()
            .then((res) => {
                this.setState({multipliers: res.data})
                console.log('res header = '+ res.status);
            });

    }

    // editMultiplier(id) {
    //   //alert('edit = ' + id);
    //     window.localStorage.setItem("id", id);
    //     this.props.history.push('/base/edit-multiplier');
    // }
    //
    // addMultiplier() {
    //     window.localStorage.removeItem("id");
    //     this.props.history.push('/base/add-multiplier');
    // }
    //
    // import() {
    //    alert('Import');
    //     this.onDrop.bind(this);
    // }
    //
    // renderShowsTotal(start, to, total) {
    //     return (
    //         <span style={ { color: 'black' ,fontSize: 'small' } }>
    //             From { start } to { to }, Totals is { total }&nbsp; Rows per page : &nbsp;
    //         </span>
    //     );
    // }
    //
    // priceFormatter(cell, row) {
    //      return <NumberFormat value={cell} displayType={'text'} thousandSeparator={true} />;
    // }
    //
    // customConfirm(next, dropRowKeys) {
    //
    //     let dropRowKeysStr = dropRowKeys.join(',');
    //
    //     console.log('dropRowKeysStr = ' + dropRowKeysStr)
    //
    //     swal({
    //         title: "Are you sure?",
    //         text: "You want to delete this Multiplier?",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //
    //         .then(willDelete => {
    //             if (willDelete) {
    //                 MultiplierService.deleteMultiplier(dropRowKeysStr)
    //                     .then(res => {
    //                         swal({
    //                             title: "Done!",
    //                             text: "Multiplier " +dropRowKeysStr+ " is deleted",
    //                             icon: "success",
    //                             button: true
    //                         })
    //                         next();
    //                         this.reloadMultiplierList();
    //                     });
    //
    //
    //             }
    //         });
    //
    // }
    //
    // createCustomDeleteButton = (onClick) => {
    //     return (
    //         <DeleteButton
    //             btnText='Delete'
    //             btnContextual='btn-light'
    //             className='my-custom-class'
    //             btnGlyphicon='fa glyphicon glyphicon-trash fa-trash'
    //             />
    //     );
    // }
    //
    // createCustomInsertButton = (onClick) => {
    //     return (
    //         <InsertButton
    //             btnText='Add Multiplier'
    //             btnContextual='btn-light'
    //             className='my-custom-class'
    //             btnGlyphicon='fa glyphicon glyphicon-plus fa-plus'
    //             onClick={ () => this.handleInsertButtonClick(onClick) }/>
    //     );
    // }
    //
    // handleInsertButtonClick = (onClick) => {
    //     // Custom your onClick event here,
    //     // it's not necessary to implement this function if you have no any process before onClick
    //     console.log('This is my custom function for InserButton click event');
    //     window.localStorage.removeItem("id");
    //     this.props.history.push('/base/add-Multiplier');
    //     //onClick();
    // }
    //
    // createCustomExportButton = (onClick) => {
    //     return (
    //         <ExportCSVButton
    //             btnText='Export to CSV'
    //             btnContextual='btn-light'
    //             className='my-custom-class'
    //             btnGlyphicon='fa glyphicon glyphicon-export fa-download'
    //             onClick={ e => this.handleExportCSVButtonClick(onClick) }/>
    //     );
    // }
    //
    // handleExportCSVButtonClick = (onClick) => {
    //     // Custom your onClick event here,
    //     // it's not necessary to implement this function if you have no any process before onClick
    //     console.log('This is my custom function for ExportCSVButton click event');
    //     onClick();
    // }
    //
    // handleShowSelectButtonClick = (onClick) => {
    //     // Custom your onClick event here,
    //     // it's not necessary to implement this function if you have no any process before onClick
    //     console.log('This is my custom function for ShowSelectedOnlyButton click event');
    //     onClick();
    // }
    //
    // createCustomShowSelectButton = (onClick, showSelected) => {
    //     return (
    //         <ShowSelectedOnlyButton
    //             showAllText='Show All'
    //             showOnlySelectText='Show Selected Only'
    //             btnContextual='btn-light'
    //             className='my-custom-class'
    //             onClick={e => this.handleShowSelectButtonClick(onClick)}/>
    //     );
    // }
    //
    // editButton(cell, row) {
    //   // console.log('cell + ' + cell);
    //   // console.log('row + ' + row);
    //     return (
    //
    //         <span className="badge badge-secondary"  onClick={() => this.editMultiplier(cell)} ><i className="fa fa-edit"></i>&nbsp;Edit</span>
    //             // <Button color="primary" size="sm" onClick={() => this.editMultiplier(cell)}>Edit</Button>
    //
    //     );
    // }
    //
    // handleFiles(files) {
    // // handleFiles = files => {
    //     console.log('start');
    //     let reader = new FileReader();
    //     reader.onload = function(e) {
    //         // Use reader.result
    //         let csv = reader.result;
    //         if (csv.indexOf('"') >= 0) {
    //             //do something
    //             console.log('contain = ');
    //             console.log('csv.replace(/[\'"]+/g, \'\')' + csv.replace(/['"]+/g, ''));
    //             csv = csv.replace(/['"]+/g, '');
    //         }
    //
    //         console.log('csv = ' + csv);
    //         let lines = csv.split("\n");
    //         let result = [];
    //         let headers=lines[0].split(",");
    //         console.log('headers = ' + headers);
    //         for(let i=1;i<lines.length;i++){
    //             let obj = {};
    //             let currentLine = lines[i].split(",");
    //             console.log('currentLine  = ' + currentLine);
    //             for(let j=0;j<headers.length;j++){
    //                 obj[headers[j]] = currentLine[j].toString().trim();
    //             }
    //             //console.log('obj = ' + obj);
    //             result.push(obj);
    //         }
    //         //return result; //JavaScript object
    //         console.log(result);
    //         //result= JSON.stringify(result); //JSON
    //
    //         console.log('call api');
    //         MultiplierService.addMultiplierList(result)
    //             .then(res => {
    //
    //                 console.log('add Multiplier res header = '+ res.status);
    //                 console.log('add Multiplier res header = '+ res.message);
    //                 console.log('add Multiplier res header = '+ res);
    //                 //this.setState({message : 'Multiplier added successfully.'});
    //                 if (res.status === 200) {
    //
    //                     swal({
    //                         title: "Done!",
    //                         text: "Add Multiplier Success",
    //                         icon: "success",
    //                         button: true
    //                     })
    //                         .then((value) => {
    //                        // swal(`The returned value is: ${value}`);
    //                             console.log('add Multiplier list success');
    //                             window.location.reload();
    //                     });
    //
    //                     //this.props.history.push('/tables/tables');
    //
    //                 }else{
    //                     swal({
    //                         title: "Error!",
    //                         text: "Add Multiplier Fail",
    //                         icon: "error",
    //                         timer: 2000,
    //                         button: false
    //                     })
    //                 }
    //             })
    //             .catch(err => {
    //                 swal({
    //                     title: "Error!",
    //                     text: "Add Multiplier Fail " + err.response.data.message,
    //                     icon: "error",
    //                     button: true
    //                 })
    //             });
    //
    //     }
    //     reader.readAsText(files[0]);
    //     console.log('end');
    //
    // }
    //
    // createCustomButtonGroup = props => {
    //     return (
    //         <ButtonGroup className='my-custom-class' sizeClass='btn-group-sm'>
    //             { props.insertBtn }
    //             { props.deleteBtn }
    //             <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
    //                 <Button color="light" className="btn-square">
    //                     <span style={ { color: 'black' ,fontSize: 'smaller' }}><i className="fa glyphicon glyphicon-import fa-upload"></i>&nbsp;Import CSV</span>
    //                 </Button>
    //             </ReactFileReader>
    //             { props.exportCSVBtn }
    //             { props.showSelectedOnlyBtn }
    //         </ButtonGroup>
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
                text: 'All', value: this.state.multipliers.length
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
            exportCSVBtn: this.createCustomExportButton,
            showSelectedOnlyBtn: this.createCustomShowSelectButton
            //showTotal: true,

        };

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>


                                <i className="fa fa-align-justify"></i>&nbsp; Multiplier

                            </CardHeader>


                            <CardBody>
                                <BootstrapTable className='table table-striped table-hover table-sm table-align-middle dropup'
                                                selectRow={ selectRow } version='4'
                                                data={ this.state.multipliers }
                                                pagination={ true }
                                                options={ options }
                                                exportCSV
                                                search
                                                insertRow
                                                deleteRow>
                                    <TableHeaderColumn dataField='ippGradingCode' isKey={ true } export={ false } dataSort>IPP Grading Code</TableHeaderColumn>
                                    <TableHeaderColumn dataField='multiplier' dataSort>Multiplier</TableHeaderColumn>
                                    <TableHeaderColumn dataField='enabled' >Enabled</TableHeaderColumn>
                                    <TableHeaderColumn dataField='remark' dataSort>Remark</TableHeaderColumn>
                                    <TableHeaderColumn dataField='lastName' dataSort>Last Name</TableHeaderColumn>
                                    {/*<TableHeaderColumn dataField='id' dataFormat={this.editButton} dataAlign='center' export={ false }>Action</TableHeaderColumn>*/}
                                </BootstrapTable>
                            </CardBody>


                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Multiplier;
