import { h } from 'preact'
import { connect } from 'redux-bundler-preact'
import { getNavHelper } from 'internal-nav-helper'

const Layout = ({ doUpdateUrl, route, pathname }) => {
  const navItems = [
    { url: '/', label: 'Home' },
    { url: '/goats', label: 'Goats' }
  ]

  const Page = route
  return(
    <main onClick={getNavHelper(doUpdateUrl)}>
      <div class="tc pb3">
        {navItems.map(item => {
          return (
            <a
              class={`link dim gray f6 f5-ns dib pa2 mr1 ${
                item.url === pathname ? 'bg-lightest-blue' : ''
              }`}
              href={item.url}
            >
              {item.label}
            </a>
          )
        })}
      </div>
      <Page />
    </main>
  )
}

export default connect('selectRoute', 'selectPathname', 'doUpdateUrl', Layout)
