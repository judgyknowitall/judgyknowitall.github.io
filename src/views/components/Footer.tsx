import './Footer.css';
import instagramLogo from '@/assets/instagram-logo.svg';
import linkedInLogo from '@/assets/linkedin-logo.svg';
import githubLogo from '@/assets/github-logo.svg';

const socialMedia = [
  { img: instagramLogo, alt: "instagram", link: "https://www.instagram.com/judgyknowitall/" },
  { img: githubLogo, alt: "github", link: "https://github.com/judgyknowitall" },
  { img: linkedInLogo, alt: "linkedIn", link: "https://www.linkedin.com/in/zahra-ghavasieh-b06b34127/" },
];

const socialMediaItems = socialMedia.map(media =>
  <a className="tooltip" href={media.link}>
    <img src={media.img} className="socialmedialogo" alt={media.alt} />
    <span className="tooltiptext">{media.alt}</span>
  </a>
)

function Footer() {
  return (
    <div className="Footer">
      <div>{socialMediaItems}</div>
    </div>
  );
}
  
export default Footer;