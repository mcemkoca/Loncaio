const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Loncaio by{" "}
        <a
          href="mailto:support@loncaio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deterium
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
