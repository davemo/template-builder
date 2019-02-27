import { connect } from 'redux-bundler-preact'
import { h } from 'preact'

const HomePage = ({baseData}) => {
  return (
    <article>
      <pre><code>{JSON.stringify(baseData, null, 2)}</code></pre>
    </article>
  )
}

export default connect('selectBaseData', HomePage)
