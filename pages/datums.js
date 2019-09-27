import React from 'react'
import { graphql } from 'react-relay'
import Link from 'next/link'
import withData from '../lib/withData'
import BlogPosts from '../components/BlogPosts'

const Datums = props => {
  const { viewer } = props
  return (
    <div>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <BlogPosts viewer={viewer} />
    </div>
  )
}

// TODO: make this work offline
export default withData(Datums, {
  query: graphql`
    query datumsQuery {
      viewer {
        ...BlogPosts_viewer
      }
    }
  `,
})
