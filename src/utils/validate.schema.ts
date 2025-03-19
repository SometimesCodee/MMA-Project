import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .max(32, "Mật khẩu chỉ nhiều nhất 32 ký tự")
        .required("Vui lòng nhập mật khẩu"),
    email: Yup.string()
        .email("Email không đúng định dạng")
        .required("Vui lòng nhập email"),
});

export const RegisterSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .max(32, "Mật khẩu chỉ nhiều nhất 32 ký tự")
        .required("Vui lòng nhập mật khẩu"),
    email: Yup.string()
        .email("Email không đúng định dạng")
        .required("Vui lòng nhập email"),
    name: Yup.string()
        .min(6, "Họ và tên phải có ít nhất 6 ký tự")
        .max(32, "Họ và tên nhiều nhất 32 ký tự")
        .required("Vui lòng nhập họ và tên"),
});