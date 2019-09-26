import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Nav from '../components/nav'

const fetchData = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  const dateStr = new Date().toISOString()
  return { stars: json.stargazers_count, date: dateStr }
}

const Home = props => {
  const { date: dateSSR, stars: starsSSR } = props
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(dateSSR)
  const [stars, setStars] = useState(starsSSR)
  useEffect(() => {
    const callAPI = async () => {
      const data = await fetchData()
      setDate(data.date)
      setStars(data.stars)
    }
    callAPI()
  }, [])
  const backgroundImgURL =
    'https://prod-tab2017-media.gladly.io/img/backgrounds/232a6803fb70419bbfb3c1697233bd45.jpg'
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <div>
        <div
          style={{
            backgroundImage: `url(${backgroundImgURL})`,
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 120px inset',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
          data-test-id="dashboard-background-img"
        >
          <div
            data-test-id="background-tint-overlay"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: 'auto',
              backgroundColor: `rgba(0, 0, 0, 0.15`,
            }}
          />
        </div>
      </div>

      <div className="hero">
        <h1 className="title">Hi! Stargazers: {stars}</h1>
        <p className="description">
          {"Here's the date: "}
          {date}
        </p>

        <p className="description">
          A count: {count}
          <button
            type="button"
            onClick={() => {
              setCount(count + 1)
            }}
            style={{
              marginLeft: 10,
            }}
          >
            Increment
          </button>
        </p>

        <div className="row">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Learn more about Next.js in the documentation.</p>
          </a>
          <a href="https://nextjs.org/learn" className="card">
            <h3>Next.js Learn &rarr;</h3>
            <p>Learn about Next.js by following an interactive tutorial!</p>
          </a>
          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .hero {
            width: 100%;
            color: #fff;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #fff;
          }
        `}
      </style>
    </div>
  )
}

Home.propTypes = {
  date: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
}

Home.getInitialProps = async () => {
  return fetchData()
}

export default Home
