import React from "react";

const styles = {
  separator: {
    width: "100%",
    border: "none",
    borderBottom: "0.7px solid rgba(205, 205, 205, 1)",
    margin: "10px 0",
  },
};

const Separator = () => <hr style={styles.separator} />;

export default Separator;
