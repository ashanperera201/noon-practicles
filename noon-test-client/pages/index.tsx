import React, { Fragment, useEffect } from 'react';
import Router from 'next/router';

const Index = () => {

  useEffect(() => {
    Router.push({ pathname: '/home' });
  }, [])

  return (
    <Fragment></Fragment>
  )
}

export default Index
