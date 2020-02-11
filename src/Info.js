import React, { Component} from 'react'
import { connect } from 'react-redux'
import { loadData } from './actions'

export class Info extends Component {
    componentDidMount(){
        this.props.loadData()
    }

    render() {
        return <span>Info</span>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)