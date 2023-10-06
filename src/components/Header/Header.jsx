import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Capture</span>
        <span className="headerTitleLg">PHOTO</span>
      </div>
      <img
        className="headerImg"
        src="https://th.bing.com/th/id/R.057b31be70cc73b9d0c829205f90e02f?rik=PxrTE7PkNVZoRg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fCool-nature-backgrounds-hd-resolution-1920x1080.jpg&ehk=hQzPW7PZMRmNSlTgkm1V0lR4FopZ7yGKJtUMRedf8wM%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
    </div>
  );
}