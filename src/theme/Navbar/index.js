import React from "react";
import Navbar from "@theme-original/Navbar";

export default function NavbarWrapper(props) {
  return (
    <>
      <p
        style={{
          background: "var(--ifm-color-primary-dark)",
          color: "white",
          textAlign: "center",
          padding: "6px 16px",
          fontSize: "0.8rem",
          margin: 0,
        }}
      >
        You are viewing a project that is currently in draft state for the
        Standards Working Group in the Green Software Foundation. This
        project should not be considered finished or officially supported in
        any way by the Green Software Foundation or its members.
      </p>
      <Navbar {...props} />
    </>
  );
}
