export default function LoginValidate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "لطفا ایمیل خود را وارد کنید";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "ایمیل شما نامعتبر می باشد";
  }

  //validation for password

  if (!values.password) {
    errors.password = "لطفا رمز عبور خود را وارد کنید";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "رمز عبور شما باید بیشتر از 8 کاراکتر و کم تر از 20 کاراکتر باشد";
  } else if (values.password.includes(" ")) {
    errors.password = "رمز عبور نامعتبر است";
  }
  return errors;
}

export function RegisterValidate(values) {
  const errors = {};

  if (!values.userName) {
    errors.userName = "لطفا نام کاربری خود را وارد کنید";
  } else if (values.userName.includes(" ")) {
    errors.userName = "ایمیل شما نامعتبر می باشد";
  }
  if (!values.email) {
    errors.email = "لطفا ایمیل خود را وارد کنید";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "ایمیل شما نامعتبر می باشد";
  }

  if (!values.password) {
    errors.password = "لطفا رمز عبور خود را وارد کنید";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "رمز عبور شما باید بیشتر از 8 کاراکتر و کم تر از 20 کاراکتر باشد";
  } else if (values.password.includes(" ")) {
    errors.password = "رمز عبور نامعتبر است";
  }

  //validate ConfirmPassword
  if (!values.confirmPassword) {
    errors.password = "لطفا رمز عبور خود را وارد کنید";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "رمز عبور شما هم خوانی ندارد";
  } else if (values.confirmPassword.includes(" ")) {
    errors.password = "تکرار رمز عبور نامعتبر است";
  }

  return errors;
}
