import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col, Form, FormGroup, Input,
    Label,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table
} from 'reactstrap';
import ApiService from "../../../service/ApiService";
class Tables extends Component {
  constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            users: [],
            message: null,
            currentPage: 0
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);

    }

    handleClick(e, index) {

        e.preventDefault();

        this.setState({
            currentPage: index
        });

    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {

                this.pageSize = 10;
                this.pagesCount = Math.ceil(res.data.length / this.pageSize);
                 console.log('res.data.result = ' + res.data.length);
                this.setState({users: res.data})

            });

    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
            .then(res => {
                this.setState({message : 'User deleted successfully.'});
                this.setState({users: this.state.users.filter(user => user.id !== userId)});
            })

    }

    editUser(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/base/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("id");
        this.props.history.push('/base/add-user');
    }

     // onChange = (e) =>
     //     this.setState({ [e.target.name]: e.target.value });

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });

        console.log('e.target.name = ' + e.target.name);
        console.log('e.target.value = ' + e.target.value);
        console.log('this.state.firstName = ' + this.state.firstName);

        ApiService.fetchUserByFirstName(e.target.value)
            .then((res) => {

                this.pageSize = 10;
                this.pagesCount = Math.ceil(res.data.length / this.pageSize);
                console.log('res.data.result = ' + res.data.length);
                this.setState({users: res.data})

            });

    }

    // searchUser() {
    //     console.log('this.state.userName = ' + this.state.userName);
    //     ApiService.fetchUserById(this.state.userName)
    //         .then(res => {
    //             this.setState({message : 'User search successfully.'});
    //             this.setState({users: this.state.users.filter(user => user.id !== this.state.userName)});
    //         })
    // }

    render() {

        const { currentPage } = this.state;

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>

                                    <Button color="success" onClick={() => this.addUser()}>
                                        <i className="fa fa-align-justify"></i>&nbsp;Add User
                                    </Button>

                            </CardHeader>

                            <Col xs="12" sm="9">

                                <CardBody>
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Label sm="2" size="sm" htmlFor="input-small">User name</Label>
                                        <Col sm="3">
                                            <Input bsSize="sm" type="text" id="firstName" name="firstName" className="input-sm" placeholder="Search by first name" value={this.state.firstName} onChange={(e) => {this.handleChange(e)}}/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                                </CardBody>

                            </Col>

                            <CardBody>
                                <Table hover bordered striped responsive size="sm">
                                    <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>User name</th>
                                        <th>Age</th>
                                        <th>Salary</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {
                                        this.state.users
                                            .slice(
                                                currentPage * this.pageSize,
                                                (currentPage + 1) * this.pageSize
                                            )
                                            .map(
                                            user =>
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.userName}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.salary}</td>
                                                    <td>
                                                        <Button type="submit" size="sm" color="primary" onClick={() => this.editUser(user.id)}><i className="fa fa-ban"></i> Edit</Button>
                                                        <Button type="reset" size="sm" color="danger" onClick={() => this.deleteUser(user.id)}><i className="fa fa-dot-circle-o"></i> Delete</Button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>


                                <React.Fragment>

                                    <div className="pagination-wrapper">

                                        <Pagination aria-label="Page navigation">

                                            <PaginationItem disabled={currentPage <= 0}>

                                                <PaginationLink
                                                    onClick={e => this.handleClick(e, currentPage - 1)}
                                                    previous tag="button"
                                                    href="#"
                                                >Prev</PaginationLink>

                                            </PaginationItem>

                                            {[...Array(this.pagesCount)].map((page, i) =>
                                                <PaginationItem active={i === currentPage} key={i}>
                                                    <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                                        {i + 1}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            )}

                                            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>

                                                <PaginationLink
                                                    onClick={e => this.handleClick(e, currentPage + 1)}
                                                    next tag="button"
                                                    href="#"
                                                >Next</PaginationLink>

                                            </PaginationItem>

                                        </Pagination>

                                    </div>

                                </React.Fragment>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }

}

export default Tables;
