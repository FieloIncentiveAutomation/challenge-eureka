import { CssBaseline } from '@material-ui/core';
import Router from 'next/router';
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Api from '../services/Api';


class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    //  Get Background
    const background = await Api.getBackgroundImage();
    const backgroundData = background.data.background;

    const globalProps = {
      background: backgroundData
    };

    return { pageProps, globalProps };
  }

  componentDidMount() {
    document.querySelector('#__next').style.overflowX = 'hidden';
    Router.events.on('routeChangeComplete', (err, url) => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    const { Component, pageProps, store, globalProps } = this.props;
    return (
      <>
        <Head>
          <title>Challenge Eureka</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <>
          <CssBaseline />
          <Component {...pageProps} globalProps={globalProps} />
        </>
      </>
    );
  }
}

export default CustomApp;
