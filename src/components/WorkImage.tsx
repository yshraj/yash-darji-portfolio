import { useState } from "react";

interface Props {
  image?: string;
  alt: string;
}

const WorkImage = ({ image, alt }: Props) => {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="project-shot project-shot-empty" aria-hidden="true">
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <div className="project-shot">
      <img
        src={image}
        alt={`${alt} interface`}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

export default WorkImage;
