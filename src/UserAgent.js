import React, { Component} from 'react'
import { connect } from 'react-redux'
import { loadUA } from './actions'

export class UserAgent extends Component {
    componentDidMount(){
        this.props.loadUA()
    }

    render() {
        if(this.props.isFetching){
            return <span>Loading...</span>
        }
        if(this.props.error){
            return <span>Error</span>
        }
        return <span>User-Agent: {this.props.data['user-agent']}</span>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUA: () => dispatch(loadUA())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)