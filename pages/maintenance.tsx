import Layout from '../components/Layout'
import { E } from '../components/Tags'

const Maintenance = () => {
  return (
    <Layout>
      <section className="flex flex-col text-center">
        <h1 className="flex justify-center mt-12 text-9xl font-display">
          <E>🚧</E><br />
        </h1>
        <h2 className="mt-4 text-3xl font-bold leading-snug font-body">
          This site is getting a little tune up.
        </h2>
        <p className="mt-2 font-body">
          Sorry for the inconvenience, but I'm performing some maintenance.
        </p>
      </section>
    </Layout>
  )
}

export default Maintenance