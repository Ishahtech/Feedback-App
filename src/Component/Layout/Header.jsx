
function Header({text}) {

    const header = {
      backgroundColor: '#ff6a95',
      color: '#fff'
    }
  return (
    <>
      <header style={header}>
        <h1>{text}</h1>
        </header>
    </>
  )
}

export default Header
