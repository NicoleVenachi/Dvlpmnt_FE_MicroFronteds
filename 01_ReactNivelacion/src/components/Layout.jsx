
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h2> React Basics </h2>
      </header>

      <main>
        {/* content */}
        <h1>Welcome to React</h1>
        <p>This is a simple layout component.</p>
        {children}
      </main>

      <footer>
        <p>&copy; NV - {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default Layout
