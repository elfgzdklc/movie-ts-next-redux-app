import React from "react"
import {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "../store"
import Layout from "./layout"
import '../assets/globals.css'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </Provider>
    )

}