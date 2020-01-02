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

  // constructor(props){
  //   super(props);
  //   this.state ={
  //     userName: '',
  //     password: ''
  //   }
  //   this.login = this.login.bind(this);
  // }

  // login = (e) => {
  //   console.log('login');
  //
  //
  //   ApiService.login(this.state.userName, this.state.password)
  //       .then(res => {
  //
  //         // console.log('add user res header = '+ res.status);
  //         // console.log('add user res userName = '+ res.userName);
  //         // console.log('add user res userName = '+ res.data.password);
  //         // console.log('add user res userName = '+ res.login);
  //         console.log('add user res userName = '+ res.data.login);
  //         //console.log('add user res userName = '+ res.data);
  //
  //         //this.setState({message : 'User added successfully.'});
  //         if (res.status === 200 && res.data.login === true) {
  //
  //           swal({
  //             title: "Welcome!",
  //             text: "User : " + this.state.userName,
  //             icon: "success",
  //             timer: 2000,
  //             button: false
  //           })
  //
  //           this.props.history.push('/dashboard');
  //         }else{
  //           swal({
  //             title: "Error!",
  //             text: "Login Fail",
  //             icon: "error",
  //             timer: 2000,
  //             button: false
  //           })
  //         }
  //         //this.props.history.push('/base/tables');
  //       })
  //       .catch(err => {
  //         swal({
  //           title: "Error!",
  //           text: "Login Fail " + err,
  //           icon: "error",
  //           button: true
  //         })
  //         console.log('error = ' + err.status)
  //         console.log('error = ' + err)
  //       });
  // }

  // onChange = (e) =>
  //     this.setState({ [e.target.name]: e.target.value });




  render() {
    return (

        <Formik
            initialValues={{
              // firstName: '',
              // lastName: '',
              // email: '',
              userName: '',
              password: ''
              // confirmPassword: ''
            }}
            validationSchema={Yup.object().shape({
              // firstName: Yup.string()
              //     .required('First Name is required'),
              // lastName: Yup.string()
              //     .required('Last Name is required'),
              // email: Yup.string()
              //     .email('Email is invalid')
              //     .required('Email is required'),
              userName: Yup.string()
                  .required('User Name is required'),
              password: Yup.string()
                  .min(6, 'Password must be at least 6 characters')
                  .required('Password is required')
              // confirmPassword:  Yup.string()
              //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
              //     .required('Confirm Password is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                //alert(JSON.stringify(values, null, 2));
                // alert('userName = ' + values.userName);
                // alert('password = ' + values.password);

                ApiService.login(values.userName, values.password)
                      .then(res => {

                        // console.log('add user res header = '+ res.status);
                        // console.log('add user res userName = '+ res.userName);
                        // console.log('add user res userName = '+ res.data.password);
                        // console.log('add user res userName = '+ res.login);
                        console.log('add user res userName = '+ res.data.login);
                        //console.log('add user res userName = '+ res.data);

                        //this.setState({message : 'User added successfully.'});
                        if (res.status === 200 && res.data.login === true) {

                          swal({
                            title: "Welcome!",
                            text: "User : " + values.userName,
                            icon: "success",
                            timer: 2000,
                            button: false
                          })

                          this.props.history.push('/dashboard');
                        }else{
                          swal({
                            title: "Error!",
                            text: "Login Fail",
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
                          text: "Login Fail " + err,
                          icon: "error",
                          button: true
                        })
                        console.log('error = ' + err.status)
                        console.log('error = ' + err)
                      });

                setSubmitting(false);
              }, 1000);
            }}
            render={({ errors, status, touched,
                       values,
                       initialValues,
                       isSubmitting,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       handleReset, }) => (



      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
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

                        {/*<div className="form-group">*/}
                        {/*  <label htmlFor="firstName">First Name</label>*/}
                          <Field name="userName" type="text" placeholder="User Name" className={'form-control' + (errors.userName && touched.userName ? ' is-invalid' : '')} onChange={handleChange}
                                 onBlur={handleBlur}/>
                          <ErrorMessage name="userName" component="div" className="invalid-feedback" />
                        {/*</div>*/}

                        {/*<Input type="text" placeholder="User Name" autoComplete="userName" name="userName" value={this.state.userName} onChange={this.onChange} />*/}
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field name="password" type="password" placeholder="Password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                               onChange={handleChange}
                               onBlur={handleBlur} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        {/*<Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.onChange}/>*/}
                      </InputGroup>
                      <Row>
                        <Col xs="6">

                          <Button color="primary" type="submit" disabled={isSubmitting}>
                            Login
                          </Button>

                          <Button color="danger"
                              type="button"
                              className="outline"
                              onClick={handleReset}
                              disabled={isSubmitting}
                          >
                            Reset
                          </Button>
                          {/*<Button color="primary" className="px-4" onClick={() => this.login()}>Login</Button>*/}
                        </Col>
                        {/*<Col xs="6" className="text-right">*/}
                        {/*  <Button color="link" className="px-0">Forgot password?</Button>*/}
                        {/*</Col>*/}
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
            )}
        />
    )
  }
}

export default Login;
