import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Nav,
  Row
} from 'reactstrap';
import ApiService from "../../../service/ApiService";
import authenticationService from '../../../service/AuthenService';

import swal from "sweetalert";
import {AppNavbarBrand} from "@coreui/react";
import logo from "../../../containers/DefaultLayout/true.png";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class Login extends Component {

  constructor(props){
    super(props);
    this.state ={
      userName: '',
      password: ''
    }
    this.login = this.login.bind(this);
  }

  login = (e) => {
    console.log('login');



    //e.preventDefault();
    console.log('this.state.userName = ' + this.state.userName);
    console.log('this.state.password = ' + this.state.password);

    // this.props.history.push('/base/dashboard');
    // console.log('this.state.lastName = ' +  this.state.lastName);
    // console.log('this.state.age = ' + this.state.age);
    // console.log('this.state.salary = ' + this.state.salary);
    // let user = {userName: this.state.userName, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
    // console.log('add user res header = ');
    ApiService.login(this.state.userName, this.state.password)
        .then(res => {

          console.log('add user res header = '+ res.status);
          //this.setState({message : 'User added successfully.'});
          if (res.status === 200) {

            swal({
              title: "Done!",
              text: "Log in Success",
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




  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <AppNavbarBrand
                          full={{ src: logo, width: 70, height: 45, alt: 'True Logo' }}
                          // minimized={{ src: logo, width: 60, height: 35, alt: 'True Logo' }}
                      />
                      {/*<h1>Login</h1>*/}
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="userName" name="userName" value={this.state.userName} onChange={this.onChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.onChange}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={() => this.login()}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/*<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>*/}
                {/*  <CardBody className="text-center">*/}
                {/*    <div>*/}
                {/*      <h2>Sign up</h2>*/}
                {/*      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut*/}
                {/*        labore et dolore magna aliqua.</p>*/}
                {/*      <Link to="/register">*/}
                {/*        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>*/}
                {/*      </Link>*/}
                {/*    </div>*/}
                {/*  </CardBody>*/}
                {/*</Card>*/}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

    // render() {
    //     return (
    //         <div>
    //             <div className="alert alert-info">
    //                 <strong>Normal User</strong> - U: user P: user<br />
    //                 <strong>Administrator</strong> - U: admin P: admin
    //             </div>
    //             <h2>Login</h2>
    //             <Formik
    //                 initialValues={{
    //                     username: '',
    //                     password: ''
    //                 }}
    //                 validationSchema={Yup.object().shape({
    //                     username: Yup.string().required('Username is required'),
    //                     password: Yup.string().required('Password is required')
    //                 })}
    //                 onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
    //                     setStatus();
    //                     authenticationService.login(username, password)
    //                         .then(
    //                             user => {
    //                                 console.log('user');
    //                                 // const { from } = this.props.location.state || { from: { pathname: "/" } };
    //                                 // this.props.history.push(from);
    //                             },
    //                             error => {
    //                                 console.log('error')
    //                                 setSubmitting(false);
    //                                 setStatus(error);
    //                             }
    //                         );
    //                 }}
    //                 render={({ errors, status, touched, isSubmitting }) => (
    //                     <Form>
    //                         <div className="form-group">
    //                             <label htmlFor="username">Username</label>
    //                             <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
    //                             <ErrorMessage name="username" component="div" className="invalid-feedback" />
    //                         </div>
    //                         <div className="form-group">
    //                             <label htmlFor="password">Password</label>
    //                             <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
    //                             <ErrorMessage name="password" component="div" className="invalid-feedback" />
    //                         </div>
    //                         <div className="form-group">
    //                             <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button>
    //                             {isSubmitting &&
    //                             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
    //                             }
    //                         </div>
    //                         {status &&
    //                         <div className={'alert alert-danger'}>{status}</div>
    //                         }
    //                     </Form>
    //                 )}
    //             />
    //         </div>
    //     )

// }

}

export default Login;
