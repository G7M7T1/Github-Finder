const Home = () => {
    return(
        <div>
            <h1 className="text-6xl">Welcome</h1>
            {process.env.REACT_APP_GITHUB_TOKEN}
            {process.env.REACT_APP_GITHUB_URL}
        </div>
    )
}

export default Home
