import React, {Component} from 'react';
import Home from './home/home';
import AboutMe from './aboutme/aboutme';
import Resume from './resume/resume';
import Projects from './projects/projects';
import Interests from './interests/interests';
import Contact from './contact/contact';
import Footer from './footer/footer';
import BackToTop from './backtotop';
import { PortfolioDataContext } from '../../../services/PortfolioDataService';

export default class Main extends Component {
    static contextType = PortfolioDataContext;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // Data is now managed by the context provider
        return;
    }

    render() {
        const { loading, error, refetch } = this.context;

        return (
            <main className="page-wrapper-two">
                <Home profile_pic_link="assets/images/home/profile-pic.png" />
                
                {loading && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '18px'
                    }}>
                        <span 
                            className="material-symbols-outlined"
                            style={{
                                fontSize: '48px',
                                marginBottom: '16px',
                                animation: 'spin 1s linear infinite'
                            }}
                        >
                            autorenew
                        </span>
                        <style>
                            {`
                                @keyframes spin {
                                    0% { transform: rotate(0deg); }
                                    100% { transform: rotate(360deg); }
                                }
                            `}
                        </style>
                    </div>
                )}

                {error && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: 'calc(100vh - 100px)',
                        color: 'white',
                        fontSize: '18px'
                    }}>
                        Error loading portfolio: {error}
                        <button 
                            onClick={() => refetch()} 
                            style={{ 
                                marginTop: '10px', 
                                padding: '8px 16px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '1px solid white',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Retry
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        <AboutMe />
                        <Resume />
                        <Projects />
                        <Interests />
                        <Contact />
                        <Footer
                            logo_src="assets/images/logo/text-logo.png"
                            description={
                                <p className="description mt--30">
                                    Created by Ian Rule. Website theme purchased from <a target="_blank" rel="noopener noreferrer" href="https://themeforest.net/user/rainbow-themes/portfolio">Rainbow-Themes.</a>
                                </p>
                            }
                        />

                        <BackToTop />
                    </>
                )}
            </main>
        );
    }
}