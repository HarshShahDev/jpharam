import { startCase } from "lodash"
/**
 * Renders a registration form with input fields for first name, last name, email, password, and confirm password.
 * 
 * @return {JSX.Element} The JSX element representing the register form
 */
export default function Register() {
  const fields = [{ name: "firstName", type: "text" }, { name: "lastName", type: "text" }, { name: "email", type: "text" }, { name: "password", type: "password" }, { name: "confirmPassword", type: "password" }]

  return (
    <>
      <section>
        <h1 className="section-title">Register <br />Your Account</h1><br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Sit aliquid,  Non distinctio vel iste.</p><br /><br /><br />
      </section>
      <div className="w-[470px]">
        <form action="#" className="ltn__form-box contact-form-box">
          {fields.map((field, index) =>
            <input key={index} className="block border-2  border-[#E4ECF2] focus:border-[#0A9A73] focus-visible:outline-0 bg-white w-full p-5 mb-4" type={field.type} name={field.name} placeholder={startCase(field.name)} />
          )}
          <br />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-light text-black">I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.</label>
            </div>
          </div>
          <br />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-light text-black">By clicking "create account", I consent to the privacy policy.</label>
            </div>
          </div>
          <br />
          <div className="btn-wrapper">
            <button className="w-[200px] py-5 text-center rounded align-left bg-[#0A9A73] text-white hover:bg-green-dark focus:outline-none my-1" type="submit">CREATE ACCOUNT</button>
          </div>
        </form>
        <br />
        <div className="text-center text-sm text-grey-dark mt-4">
          <p>By creating an account, you agree to our:</p><br />
          <p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
          <div className="go-to-btn mt-50">
            <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
          </div>
        </div>
      </div>
    </>
  )
}
