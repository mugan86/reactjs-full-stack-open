const Footer = () => {
    const currentYear = new Date().getFullYear();
  const footerStyle = {
    color: "blue",
    fontStyle: "italic",
    fontSize: 20,
    textAlign: "center"
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Anartz Mugika Ledo - {currentYear}
      </em>
    </div>
  );
};

export default Footer;
