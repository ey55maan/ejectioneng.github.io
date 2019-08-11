import React from 'react'
//import ReactGA from 'react-ga'
//import Contact from './contact'
import Jumbo from './jumbo'
import About from './about'
//import Join from '../components/join'
import Footer from './footer'


class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            scrollIndex: 0,
            scrollHeight: 0,
            timerId: null,
        }
    }

    componentDidMount () {
        document.addEventListener('scroll', this.onScroll)
        //ReactGA.initialize('UA-88860508-1') //Unique Google Analytics tracking number
        this.logPageView()
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.onScroll)
    }

    logPageView = () => {
        //ReactGA.set({ page: window.location.pathname + window.location.search })
        //ReactGA.pageview(window.location.pathname + window.location.search)
    }

    onScroll = () => {
        // Update the index on the point_nav component.
        const newScrollIndex = Math.round(window.scrollY / window.innerHeight)
        this.setState({scrollIndex: newScrollIndex})
    }

    setScrollTarget = (ev) => {
        console.log( ev )
        const siblings = ev.currentTarget.parentElement.children
        const index = Array.from(siblings).indexOf(ev.currentTarget)

        this.startScrollToIndex(index)
    }

    startScrollToIndex = ( index ) => {
        let scrollHeight = index * window.innerHeight
        if (index === 2) {
            scrollHeight -= 20
        }

        clearInterval( this.state.timerId )

        this.setState({ scrollHeight: scrollHeight })

        const id = setInterval( this.autoScrollToHt, 200)
        this.setState({ timerId: id })
    }

    autoScrollToHt = ( ) => {
        const v_offset = 10

        if (( window.scrollY > this.state.scrollHeight + v_offset ) || ( window.scrollY < this.state.scrollHeight - v_offset  )) {
            const factor = Math.abs(window.scrollY - this.state.scrollHeight)

            let diff = window.scrollY < this.state.scrollHeight ? 2 : -2
            if ( factor > 50 ) {
                diff *= 5
            }

            const newY = window.scrollY + diff
            console.log( 'NewY = ' + newY )
            window.scrollTo(0, newY)
        } else {
            console.log( 'Stopping timer' )
            clearInterval( this.state.timerId )
        }
    }

    render () {

        return(
            <div>
                <section className="jumbotron" id="home">
                    <Jumbo scrollTo={this.startScrollToIndex} />
                </section> 
                <section className="about" id="about">
                    <About />
                </section> 
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Layout