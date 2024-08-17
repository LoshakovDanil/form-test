import { Field, Form, Formik } from "formik"
import style from './LoginForm.module.css'
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux-toolkit/loginSlice";
import { useDispatch } from "react-redux";

export const LoginForm = () =>{
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submit = (values, { setSubmitting }) =>{
    setTimeout(() => {

      dispatch(setUser(values))
      navigate('/home')
      setSubmitting(false)

    }, 1000)

  }

  const validate = ({email, password}) => {
    const errors = {}

    if (!email) {
        errors.email = 'Обязательное поле';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errors.email = 'Неправильная почта';
    }
  
    if (!password) {
      errors.password = 'Обязательное поле'
    }

    return errors
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ email: '', password: '' }}
        onSubmit={submit}
        validate={validate}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="email" className={style.input} disabled={isSubmitting}  />
            </div>
            {errors.email && touched.email && <div className={style.error}>{errors.email}</div>}
            <div>
              <Field type="password" name="password" className={style.input} disabled={isSubmitting}  />
            </div>
            {errors.password && touched.password && <div className={style.error}>{errors.password}</div>}
            <div>
              <button type="submit" className={style.submit} disabled={isSubmitting}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}