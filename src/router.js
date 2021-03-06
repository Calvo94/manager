import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
 return (
   <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Please Login" initial />
    </Scene>

    <Scene key="main">
      <Scene
      onRight={() => Actions.employeecreate()}
      rightTitle="Add"
      key="employeeList"
      component={EmployeeList}
      title="EmployeeList"
      initial
      />
      <Scene key="employeecreate" component={EmployeeCreate} title="Create an employee" />
      <Scene key="employeeEdit" component={EmployeeEdit} title="Edit an employee" />
    </Scene>

   </Router>
 );
};

export default RouterComponent;
