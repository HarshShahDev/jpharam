import { startCase } from "lodash";

import "../style/index.css";

export default function Login() {
  const fields = [{ name: "email", type: "email" }, { name: "password", type: "password" }]
  return (
    <>
      <section className="section-title text-center space-y-20">
        <div>
          <h1 className="section-title text-4xl leading-[1.2] text-[#071C1F] font-sans font-rajdhani">
            Sign In <br />
            To Your Account
          </h1>
          <p className=" text-[#5C727D] mb-[1.5em]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Sit aliquid, Non distinctio vel iste.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="px-10 flex justify-center items-center">
            <form action="#">
              {fields.map((field, index)=> 
               <input key={index} className="font-sans font-nunito-sans block border-2  border-[#E4ECF2] focus:border-[#0A9A73] focus-visible:outline-0 bg-white w-full  p-5 mb-7 py-5 pr-10 pl-5" type={field.type} name={field.name} placeholder={startCase(field.name)} />
              )}
              <div>
                <button
                  type="submit"
                  className="btn"
                >
                  SIGN IN
                </button>
              </div>
              <br />
              <div>
                <a href="#" className="btn">
                  <small className="text-white text-[0.875em]">FORGOTTEN YOUR PASSWORD?</small>
                </a>
              </div>
            </form>
          </div>

          <div>
            <h4 className="text-xl text-[#071C1F] font-sans font-josefin-sans">DON'T HAVE AN ACCOUNT?</h4>
            <br />
            <p className="text-[#5C727D]">
              Add items to your wishlistget personalised recommendations <br />
              check out more quickly track your orders register
            </p>
            <br />
            <div>
              <a
                href="/register"
                className="btn"
              >
                Create Account
              </a><br/>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-16"></div>
    </>
  );
}
