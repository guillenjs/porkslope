import React, { Component } from 'react'

export class Category extends Component {
    render() {
        console.log("i am in category")
        return (
            <div>
                <h1>{this.props.category}</h1>
            </div>
        )
    }
}

export default Category
