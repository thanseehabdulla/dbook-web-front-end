import React, {Component} from 'react';
import './damn.css'
import {DATA_ACTIONS} from './../../../redux/data/actions';
import {connect} from "react-redux";
import { Spin ,Select } from 'antd';
const { registervender } = DATA_ACTIONS;
const Option = Select.Option;
// const options = [{
//     values: 'admin',
//     label: 'Super User'
// },{
//     values: 'noadmin',
//     label: 'Normal User'
// }]


class VenderUp extends Component {

    state = {spin:false}


    changeValue(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name] : value
        })
    }


    register(){
        let user = {
            vendername: this.state.vendername,
            trn_no: this.state.trn_no,

        }
        // console.log(this.state.level)
        this.setState({
            spin : true
        })


        let {registervender} = this.props;
        registervender(user);
    }

    render() {
        return (
            <div className="App overallpaddinglogin">
                <div className="row form-group">

                        <div className="row form-group">
                            <div className="input-field col s12">
                                <input name="vendername" placeholder="Vender Name" onBlur={this.changeValue.bind(this)} id="first_name" type="text" className="form-control form-control-lg "/>
                                    {/*<label htmlFor="first_name">First Name</label>*/}
                            </div>

                        </div>
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <input name="trn_no" placeholder="trn_no" onBlur={this.changeValue.bind(this)} id="username" type="text" className="form-control form-control-lg "/>
                            {/*<label htmlFor="password">Password</label>*/}
                        </div>
                    </div>


                </div>
                {this.state.spin && <Spin />}
                <button className="btn btn-orange btn-block text-white btn-lg ld-ext-right" style={{width:'200px'}} onClick={this.register.bind(this)}>Save</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        isLoggedIn: state.data.get("isLoggedIn"),
    }),
    {  registervender }
)(VenderUp);
