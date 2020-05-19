import React from 'react';
import axios from 'axios';
import { URL } from '../../url';

class UserRegistryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registry: {}
        }
    }

    async componentDidMount() {
        const token = JSON.parse(window.localStorage.getItem("token"));
        const {match: {params} } = this.props;
        await axios.get(URL+'registry/'+params.id, {
            headers: {'Authorization': 'Bearer '+token}
        }).then(async res => {
            this.setState({registry: res.data})
        }).catch(e => {
            console.log(e);
        })
    }

    render() {
        return(<div>hi</div>);
    }
}

export default UserRegistryDetails;