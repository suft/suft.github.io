import Layout from '../components/Layout'
import Title from '../components/Title'
import { A, E, P, H3, UL, LI } from '../components/Tags'

const Custom404 = () => {
  return (
    <Layout>
      <section className="flex flex-col text-center">
        <h1 className="flex justify-center mt-6 text-8xl font-display">
          4<E>🤯</E>4<br />
        </h1>
        <h2 className="mt-4 text-2xl font-bold leading-snug font-body">
          Lost in the Outlands
        </h2>
        <p className="font-body">Perhaps you are here because:</p>
        <span className="text-left">
          <UL>
            <LI>The page does not exist</LI>
            <LI>The page has been removed</LI>
            <LI>You might have mistyped the URL</LI>
            <LI>You like 404 pages</LI>
          </UL>
        </span>
        <span><A href="/"><strong>Go Home</strong></A></span>
      </section>
    </Layout>
  )
}

export default Custom404