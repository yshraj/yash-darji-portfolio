import "./styles/style.css";

const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && `disable`}>
      <div className="hover-in">
        {text}
        {/* Duplicate slides up on hover — decorative, so it stays out of the
            accessibility tree instead of being announced twice. */}
        <div aria-hidden="true">{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
