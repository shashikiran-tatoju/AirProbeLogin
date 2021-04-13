import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// const {  Layout  } = antd;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div className="dashboard_container">
       
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
        
            <>
    <Layout>
      <Sider>Sidedfdfdfdfd
          f
          fdf
          dfd
          fdf
          dfd
          fdf
          r</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>,

       
      </div>
    );
  }
}

export default withRouter(Dashboard);
