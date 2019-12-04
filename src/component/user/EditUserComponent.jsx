import React, { Component } from 'react'
import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Col,
    Form, FormGroup, FormText, Input, Label,
    Row
} from 'reactstrap';
import ApiService from "../../service/ApiService";

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("id"))
            .then((res) => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    userName: user.userName,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    salary: user.salary,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        //e.preventDefault();
        let user = {id: this.state.id, userName: this.state.userName, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/base/tables');
            });
    }

    reset = () => {
        console.log('reset');
       // document.getElementById("edit-user-form").reset();
        this.setState({
            id: "",
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            salary: "",
    });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardHeader>
                                <strong>Edit</strong> User
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" id="edit-user-form">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="userName">User name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" name="userName" placeholder="Text" value={this.state.userName} onChange={this.onChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="password">Password</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="password" name="password" placeholder="Password" autoComplete="new-password" value={this.state.password} onChange={this.onChange} />
                                            <FormText className="help-block">Please enter a complex password</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="firstName">First name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" name="firstName" placeholder="Text" value={this.state.firstName} onChange={this.onChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="lastName">Last name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" name="lastName" placeholder="Text" value={this.state.lastName} onChange={this.onChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="age">Age</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" name="age" placeholder="Number" value={this.state.age} onChange={this.onChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="salary">Salary</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" name="salary" placeholder="Number" value={this.state.salary} onChange={this.onChange}/>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary" onClick={() => this.saveUser()}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                <Button type="reset" size="sm" color="danger" onClick={() => this.reset()}><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Card>

                    </Col>

                </Row>
            </div>
        );
    }
}

export default EditUserComponent;