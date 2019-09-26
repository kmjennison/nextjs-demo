import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../lib/withData'
import BlogPosts from '../components/BlogPosts'

class Datums extends Component {
  static displayName = `Datums`

  render (props) {
    return (
      <div>
        <BlogPosts viewer={this.props.viewer} />
      </div>
    )
  }
}

export default withData(Datums, {
  query: graphql`
    query datumsQuery {
      viewer {
        ...BlogPosts_viewer
      }
    }
  `
})
