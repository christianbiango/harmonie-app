export const createSignInFormData = (email: string, password: string) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  return formData;
};
