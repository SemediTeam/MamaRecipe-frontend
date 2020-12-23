import React, { Component } from 'react'
import ListRecipe from '../../components/landingPage/listRecipe'
import New from '../../components/landingPage/new'
import Popular from '../../components/landingPage/popular'
import Search from '../../components/landingPage/search'
import './dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Search />
                <Popular />
                <New />
                <ListRecipe/>
            </div>
        )
    }
}

export default Dashboard
