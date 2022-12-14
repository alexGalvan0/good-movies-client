import Link from 'next/link'
import styles from './Home.module.scss'
function Home() {
    return (
        <div className='jumbotron'>

            <main className="text-light text-center" role="main">

                <div className='jumbotron' >
                    <div className='container'>
                        <h1 className="display-3">GOOD MOVIES</h1>
                        <p>Track films you’ve watched.</p>
                        <p>Save those you want to see.</p>
                        <p>Tell your friends what’s good.</p>
                    </div>
                </div>

                <div className="container">

                    <div className="row">
                        <div className="col-md-6">
                            <Link href='/register'><button className="btn btn-alert my-2 text-light">GET STARTED — IT‘S FREE!</button></Link>

                            <p><Link className="btn btn-lg btn-primary text-light" href="/movie/search" role="button">SEARCH MOVIES »</Link></p>
                        </div>
      
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Home;