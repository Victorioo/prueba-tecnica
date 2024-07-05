export const validateEmail = (email: string) => {
  console.log("El email es: ", email);
  return (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
};

export const validateName = (name: string) => {
  return name.length > 3;
};

export const validateMessage = (message: string) => {
  console.log(message);
  return (message: string) => {
    return message.length > 12;
  };
};
