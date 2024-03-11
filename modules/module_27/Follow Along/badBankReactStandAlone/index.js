function Spa () {
    return (
    <HashRouter>
      <div>
        <NavBar/>        
        <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/alldata/" component={AllData} />
          </div>
      </div>
    </HashRouter>
    )
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);