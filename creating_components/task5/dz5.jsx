import React from "react";
import reactDom from "react-dom";

function Notification({ type, message }) {
  const styles = {
    notification: {
      padding: "10px",
      borderRadius: "5px",
      margin: "10px 0",
    },
    succes: {
      backgroundColor: "#d4edda",
      color: "#155724",
    },
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
    },
    warning: {
      backgroundColor: "#fff3cd",
      color: "#856404",
    },
  };

  const notificationStyle = {
    ...styles.notification,
    ...(type === "succes" ? styles.succes : {}),
    ...(type === "error" ? styles.error : {}),
    ...(type === "warning" ? styles.warning : {}),
  };

  return <div style={notificationStyle}>{message}</div>;
}

function App() {
  return (
    <>
      <Notification type="succes" message="Успешно выполнено" />
      <Notification type="error" message="Произошла ошибка" />
      <Notification type="warning" message="Это предупреждение!" />
    </>
  );
}
reactDom.render(<App />, document.getElementById("root"));
