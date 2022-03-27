import React from 'react'

const styles = {
  nav: {
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, 0.0975)",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "height 0.2s ease-in-out",
    height: "77px",
  },

  menu: {
    display: "flex",
    flexDirection: "row",
    height: "77px",
    width: "70%",
    margin: "0 auto",
    padding: "26px 40px",
  },

  logo: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    height: "35px",
    width: "176px",
    color: "black",
    textDecoration: 'none',
    fontSize: '2rem'
  },
};

function Header() {
  return (
    <div>
      <nav style={styles.nav}>
        <div style={styles.menu}>
          <div style={styles.brand}>
            <a style={styles.logo} href="/">
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png"
                alt="Instagram Preview"
                width="30rem"
                height="30rem"
              />
              <p style={{marginLeft: '1rem'}}>Instagram</p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;