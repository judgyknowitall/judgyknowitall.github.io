import PageProps from '@/models/PageProps';
import './NotFoundPage.css';

function NotFoundPage({pageProps} : {pageProps: PageProps}) {
  pageProps.setTitle("404")

    return (
      <div>
        <h1>404</h1>
        Page not found :(
      </div>
    );
  }
    
  export default NotFoundPage;