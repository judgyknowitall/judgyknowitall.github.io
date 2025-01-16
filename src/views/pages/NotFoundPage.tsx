import PageProps from '@/models/PageProps';
import './NotFoundPage.css';
import { useEffect } from 'react';

function NotFoundPage({pageProps} : {pageProps: PageProps}) {
  useEffect(() => {
    pageProps.onPageChanged("404");
  })

    return (
      <div>
        <h1>404</h1>
        Page not found :(
      </div>
    );
  }
    
  export default NotFoundPage;