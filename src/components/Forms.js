import React, { useState } from 'react';
import BuisnessOwner from './pages/BuisnessOwner';
import LocatedInUS from './pages/LocatedInUS';
import LargeCorp from './pages/LargeCorp';
import WantSurvey from './pages/WantSurvery';
import CorpSignInForm from './pages/CorpSignInForm';
import Contacted from './pages/Contacted';
import MustContact from './pages/MustContact';
import SmallSingnInForm from './pages/SmallSingnInForm';
import Login from './pages/Login';
import LoginComponent from './pages/LoginComponent';


const Forms = () => {
    const [isBuisnessOwner, setIsBuisnessOwner] = useState(true);
    const [isLocatedInUS, setIsLocatedInUS] = useState(false);
    const [ownLargeCorp, setOwnLargeCorp] = useState(false);
    const [wantSurvey, setWantSurvey] = useState(false);
    const [corpSignInForm, setCorpSignInForm] = useState(false);
    const [contacted, setContacted] = useState(false);
    const [mustContact, setMustContact] = useState(false);
    const [smallSingnInForm, setSmallSignInForm] = useState(false);
    const [login, setLogin] = useState(false);
    const [gitLogin, setGitLogin] = useState(false);
    const [googleLogin, setGoogleLogin] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    return (
        <div>
            {isBuisnessOwner &&
                <BuisnessOwner
                    setIsBuisnessOwner={setIsBuisnessOwner}
                    setIsLocatedInUS={setIsLocatedInUS}
                    setLogin={setLogin} />
            }
            {isLocatedInUS &&
                <LocatedInUS
                    setIsLocatedInUS={setIsLocatedInUS}
                    setOwnLargeCorp={setOwnLargeCorp} />
            }
            {(ownLargeCorp || loginSuccess) &&
                <LargeCorp
                    setOwnLargeCorp={setOwnLargeCorp}
                    setWantSurvey={setWantSurvey}
                    setContacted={setContacted}
                    setLoginSuccess={setLoginSuccess} />
            }
            {wantSurvey &&
                <WantSurvey
                    setCorpSignInForm={setCorpSignInForm}
                    setWantSurvey={setWantSurvey}
                    setIsBuisnessOwner={setIsBuisnessOwner}
                    setLoginSuccess={setLoginSuccess} />
            }
            {corpSignInForm &&
                <CorpSignInForm
                    setIsBuisnessOwner={setIsBuisnessOwner} />
            }
            {contacted &&
                <Contacted
                    setContacted={setContacted}
                    setMustContact={setMustContact}
                    setSmallSignInForm={setSmallSignInForm} />
            }
            {mustContact &&
                <MustContact />
            }
            {smallSingnInForm &&
                <SmallSingnInForm />
            }
            {login &&
                <Login
                    setIsBuisnessOwner={setIsBuisnessOwner}
                    setLogin={setLogin}
                    setGitLogin={setGitLogin}
                    setGoogleLogin={setGoogleLogin} />
            }
            {(gitLogin || googleLogin) &&
                <LoginComponent
                    setOwnLargeCorp={setOwnLargeCorp}
                    setLoginSuccess={setLoginSuccess}
                    setGitLogin={setGitLogin}
                    setGoogleLogin={setGoogleLogin}
                    googleLogin={googleLogin}
                    gitLogin={gitLogin} />
            }
        </div>
    )
}

export default Forms;
