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
import swal from 'sweetalert';



class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            userName: null,
            password: null,
            firstName: null,
            lastName: null,
            age: '',
            salary: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        console.log('save user');
        //e.preventDefault();
        console.log('this.state.userName = ' + this.state.userName);
        console.log('this.state.firstName = ' + this.state.firstName);
        console.log('this.state.password = ' + this.state.password);
        console.log('this.state.lastName = ' +  this.state.lastName);
        console.log('this.state.age = ' + this.state.age);
        console.log('this.state.salary = ' + this.state.salary);
        let user = {userName: this.state.userName, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        console.log('add user res header = ');
        ApiService.addUser(user)
            .then(res => {

                console.log('add user res header = '+ res.status);
                //this.setState({message : 'User added successfully.'});
                if (res.status === 200) {

                    swal({
                        title: "Done!",
                        text: "Add User Success",
                        icon: "success",
                        button: true
                    })

                    this.props.history.push('/base/tables');
                }else{
                    swal({
                        title: "Error!",
                        text: "Add User Fail",
                        icon: "error",
                        timer: 2000,
                        button: false
                    })
                }
                //this.props.history.push('/base/tables');
            })
            .catch(err => {
                swal({
                    title: "Error!",
                    text: "Add User Fail " + err,
                    icon: "error",
                    button: true
                })
                console.log('error = ' + err.status)
                console.log('error = ' + err)
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

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
        return(
            <div>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardHeader>
                                <strong>Add</strong> User
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" id="add-user-form">
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

export default AddUserComponent;