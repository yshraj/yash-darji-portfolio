import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: Props) => {
  const [imgError, setImgError] = useState(false);

  const content = (
    <>
      {link && (
        <div className="project-image-link-icon">
          <MdArrowOutward />
        </div>
      )}
      {image && !imgError ? (
        <img src={image} alt={alt} onError={() => setImgError(true)} />
      ) : (
        <div className="project-image-fallback">
          <span>{alt}</span>
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <a
        className="project-image-box"
        href={link}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="project-image-box" data-cursor="disable">
      {content}
    </div>
  );
};

export default WorkImage;
