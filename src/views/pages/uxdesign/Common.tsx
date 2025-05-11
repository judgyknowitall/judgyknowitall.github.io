///
/// Common elements used in the UX Design pages
///

import "./Common.css";
import { Link } from 'react-router';
import GoogleLogo from '@/assets/google-logo-color.svg';

export function Quote({quote} : {quote: string}) {
    return (
        <div className='quote'>
            <div></div>
            <p>{ quote }</p>
        </div>
    );
}

export function GoogleCertificateLink() {
    return (
        <div className="google-certificate">
            <img src={GoogleLogo} className="logo"/>
            <Link to="https://www.coursera.org/professional-certificates/google-ux-design">
                Google UX Design Certificate
            </Link>
        </div>
    );
}
