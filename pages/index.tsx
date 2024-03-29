import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import moment from 'moment'
import countapi from 'countapi-js'
import Layout from '../components/Layout'
import { H3, UL, LI, P, A, E } from '../components/Tags'
import Title from '../components/Title'
import {
  SITE_TITLE,
  SITE_URL,
  SITE_DESCRIPTION,
  GITHUB_API,
  HANDLE,
  REPO,
  COUNT_KEY
} from '../lib/constants'
import ordinal from '../lib/ordinal'

const Home = () => {
  const [lastUpdated, setLastUpdated] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [visitors, setVisitors] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    fetch(`${GITHUB_API}/${HANDLE}/${REPO}`)
    .then((response) => response.json())
    .then((data) => setLastUpdated(data.updated_at))

    countapi.hit(REPO, COUNT_KEY)
    .then((response) => setVisitors(response.value))

    const number = `${Math.floor((Math.random() * 9) + 1)}`.padStart(2, '0')
    setAvatar(`/images/${number}.png`)
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <Layout>
      <Head>
        <title key="title">{SITE_TITLE}</title>
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:url" content={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
      </Head>
      <section className="leading-relaxed">
        <div className="my-8">
          <img
            src={avatar}
            alt="Sufien Tout"
            className="block mx-auto rounded-full w-80 h-80 shadow-soft"
            />
        </div>
        <h1>
          <Title>Sufien Tout <E>🇱🇧🇨🇦</E></Title>{' '}
          <p>
            (arabic: <strong>سفيان طوط‎</strong>, 
            pronounced: <strong>Soof&middot;Yan T&middot;Out</strong>)
          </p>
        </h1>
        <UL>
          <LI>Associate Software Dev @ <A href="https://www.varicent.com/">Varicent</A></LI>
          <LI>BA in Information Technology from <A href="https://www.yorku.ca/">York University</A>.</LI>
          <LI>Previously, a Software Dev Intern @ <A href="https://www.getencircle.com/">Encircle</A></LI>
          <LI>
            Resume: <A href="/pdfs/Sufien Tout Resume 2021.pdf" target="_blank">Download PDF</A>.
          </LI>
          <LI>
            Love to <E>🏋</E> workout and drink <E>🍵</E> steeped tea</LI>
          <LI>Time zone: Eastern Daylight Time.</LI>
        </UL>
        <H3>Links</H3>
        <UL>
          <LI>
            <strong>Email:</strong>{' '}
            <A href="mailto:sufientout@gmail.com">sufientout@gmail.com</A>
          </LI>
          <LI>
            <strong>GitHub:</strong>{' '}
            <A href="https://github.com/suft">@suft</A>
          </LI>
          <LI>
            <strong>CodePen:</strong>{' '}
            <A href="https://codepen.com/suft">@suft</A>
          </LI>
          <LI>
            <strong>LinkedIn:</strong>{' '}
            <A href="https://linkedin.com/in/sufientout">@sufientout</A>
          </LI>
        </UL>
        <H3>Postscript</H3>
        <UL>
          <LI>
            This website was built with <A href="https://nextjs.org">Next.js</A> and <A href="https://tailwindcss.com">Tailwind CSS</A>.
          </LI>
          <LI>
            This page was last edited <strong>{moment(lastUpdated).fromNow()}</strong>.
          </LI>
          <LI>
            You are the <strong>{ordinal(visitors)}</strong> visitor.
          </LI>
        </UL>
      </section>
    </Layout>
  )
}

export default Home;