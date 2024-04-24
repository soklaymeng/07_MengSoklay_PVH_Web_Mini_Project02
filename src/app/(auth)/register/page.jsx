"use client";
import { registerAction } from "@/actions/registerAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  async function handleUserRegister(userInfo) {
    console.log("user info : ", userInfo);

    const res = await registerAction(userInfo);
    if (res.status === 200) {
      router.push("/login");
    }
    console.log("register: ", res);
  }

  return (
    <main>
      <section className="bg-white w-screen flex m-auto h-screen overflow-hidden">
        <div className="py-8 px-4 mx-auto max-w-full lg:py-16  grid">
          <div className="flex justify-between">
            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          </div>

          <form
            className="grid grid-cols-2"
            onSubmit={handleSubmit(handleUserRegister)}
          >
            <div className="bg-green-300 p-5">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                  <label
                    for="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First Name
                  </label>
                  <input
                    {...register("firstname")}
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="First Name"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    for="Last Name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Last Name
                  </label>
                  <input
                    {...register("lastname")}
                    type="text"
                    name="lastname"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Last Name"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    for="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Gender
                  </label>
                  <select
                    {...register("gender")}
                    id="gender"
                    name="gender"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option className="hidden">Choose your option</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>

                <div className="w-full">
                  <label
                    for="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder=" Email"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    for="Password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="Password"
                    name="password"
                    id="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    for="Password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm Password
                  </label>
                  <input
                    {...register("confirmPassword")}
                    type="Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Confirm Password"
                    required=""
                  />
                </div>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
                Don’t have an account yet?
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </div>
            <div
              className="hidden md:block bg-cover bg-blue-700"
              style={{
                backgroundImage: `url(https://i.pinimg.com/564x/af/cb/00/afcb0036bcdb48486b60b251e5dd36a3.jpg)`,
              }}
            ></div>
            <button className="bg-green-400 grid max-w-24 h-9 grid-cols-1 content-center m-0 mb-auto mt-5 rounded-md">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
