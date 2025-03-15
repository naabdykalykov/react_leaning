import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Загрузка данных о пользователе...</div>;
  }

  if (!user) {
    return <div>Не удалось загрузить данные о пользователе.</div>;
  }

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>
        <strong>Имя:</strong> {user.name}
      </p>
      <p>
        <strong>Имя пользователя:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Телефон:</strong> {user.phone}
      </p>
      <p>
        <strong>Вебсайт:</strong> {user.website}
      </p>
      <p>
        <strong>Компания:</strong> {user.company.name}
      </p>
      <p>
        <strong>Адрес:</strong> {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

// eslint-disable-next-line no-undef
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProfile />
  </StrictMode>
);
