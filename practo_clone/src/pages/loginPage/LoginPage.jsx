import React from 'react'
import styles from './LoginPage.module.css'
import GoogleLogin from 'react-google-login'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { login_performer } from '../../redux/auth/action'
import { useHistory } from 'react-router'

const LoginPage = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const {isLoggedIn} = useSelector(state => state.authReducer, shallowEqual)

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    const handleResponse = (response) => {
        // console.log(response.profileObj)
        dispatch(login_performer(response.profileObj))
    }

    React.useEffect(() => {
        if(isLoggedIn){
            history.goBack()
        }
    }, [isLoggedIn])

    return (
        <>
            <div className = {styles.header}>
                <span>Login</span>
            </div>
            <div className = {styles.mid}>
                <div className = {styles.left}>
                    <img
                        src = "https://accounts.practo.com/static/images/illustration.png"
                        alt = "illustration"
                    />
                </div>
                <div className = {styles.right}>
                    <div className = {styles.form_container}>
                        <form onSubmit = {handleOnSubmit}>
                            <div>
                                <label>
                                    Email ID
                                </label>
                                <br/>
                                <input
                                    type = "text"
                                    placeholder = "Email ID"
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>
                                    Password
                                </label>
                                <br/>
                                <input
                                    type = "password"
                                    placeholder = "Password"
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input 
                                    className = {styles.button}
                                    type = "submit"
                                    value = "Sign up"
                                />
                            </div>
                        </form>
                        <div className = {styles.line_break}></div>
                        <div className = {styles.google_signin}>
                            <GoogleLogin
                                clientId = "143209439016-s5skjmbl6jifk6chlcimkanon2lkbipj.apps.googleusercontent.com"
                                buttonText = "Signin with Google"
                                onSuccess = {handleResponse}
                                onFailure = {handleResponse}
                                cookiePolicy = {'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {LoginPage}