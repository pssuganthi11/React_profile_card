import BadgeItem from "../component/BadgeItem";

function Heropage({Role,setRole}) {

  return (
    <div className="  w-full bg-gray-400/15 ">
      <div className="  flex flex-col sm:flex-row   p-4">
        {/* left section */}
        <div className="  w-full lg:w-2.5/5 flex flex-col justify-center items-center text-center lg:text-left space-y-4 ">
          <img
            src="https://github.com/pssuganthi11.png"
            alt="profile"
            className="w-48 h-48 rounded-full object-cover"
          />

          <h1 className="text-4xl font-bold text-gray-600">
            I'm <span className="text-blue-400">Suganthi Pattappan</span>
          </h1>

          <h2 className="text-2xl text-gray-600">{Role} </h2>
        </div>

        <div className="w-full lg:w-2.5/5 ">
          {/* basic details */}
          <div className="space-y-4 ">
            <p className=" text-xl sm:text-3xl font-semibold ">Summary</p>
            <p className="text-gray-700 max-w-md">
              Frontend Developer with 2+ years of experience building React and
              Next.js applications, including admin dashboards and SaaS-style
              platforms. Strong in component-based architecture, React Hooks,
              REST API integration and responsive UI development. Experienced in
              optimizing performance, collaborating with cross-functional teams,
              and delivering scalable, user-focused web solutions.
            </p>
            <div className="flex flex-col w-md">
              <lable>Enter Role</lable>
              <input
                type="text"
                placeholder="Enter the Role"
                className="border outline-none p-2 rounded"
                onChange={(e)=>{setRole(e.target.value)}}
              ></input>
            </div>
            <div className=" space-x-2 space-y-2">
              {/* Skills*/}

              <p className=" text-xl sm:text-3xl font-semibold ">Skills</p>
              <p className=" text-xl sm:text-2xl font-semibold">Frontend</p>
              <div className="flex flex-wrap space-x-2 space-y-2">
                <BadgeItem skill="HTML" color="orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="m20.754 4.792l-2.84 14.31a1.5 1.5 0 0 1-1.099 1.161l-4.069 1.045a3 3 0 0 1-1.492 0l-4.07-1.045a1.5 1.5 0 0 1-1.097-1.16L3.246 4.792A1.5 1.5 0 0 1 4.717 3h14.566a1.5 1.5 0 0 1 1.471 1.792" />
                      <path d="M17 6.881H7.732a.6.6 0 0 0-.589.718l.859 4.292h7.996l-.891 4.458a1 1 0 0 1-.64.744l-2.126.77a1 1 0 0 1-.681 0l-2.127-.77a1 1 0 0 1-.64-.744l-.224-1.119" />
                    </g>
                  </svg>
                </BadgeItem>
                <BadgeItem skill="CSS" color="blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    >
                      <path d="m20.754 4.792l-2.84 14.31a1.5 1.5 0 0 1-1.099 1.161l-4.069 1.045a3 3 0 0 1-1.492 0l-4.07-1.045a1.5 1.5 0 0 1-1.097-1.16L3.246 4.792A1.5 1.5 0 0 1 4.717 3h14.566a1.5 1.5 0 0 1 1.471 1.792" />
                      <path d="m15.998 11.891l-.891 4.458a1 1 0 0 1-.64.744l-2.126.77a1 1 0 0 1-.681 0l-2.146-.777a.99.99 0 0 1-.622-.74l-.222-1.114m7.328-3.341l.859-4.292a.6.6 0 0 0-.589-.718H7m8.998 5.01H8.002" />
                    </g>
                  </svg>{" "}
                </BadgeItem>
                <BadgeItem skill="JavaScript" color="yellow">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="m20 4l-2 14.5l-6 2l-6-2L4 4z" />
                      <path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5" />
                    </g>
                  </svg>
                </BadgeItem>
                <BadgeItem skill="React" color="cyan">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                  >
                    <g fill="none" stroke="currentColor">
                      <path d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3s3.134-3 7-3s7 1.343 7 3Z" />
                      <path d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726c1.841-3.4 2.153-6.795.696-7.584c-1.457-.79-4.13 1.327-5.972 4.726c-1.841 3.4-2.153 6.795-.696 7.584Z" />
                      <path d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726c-1.841-3.4-2.153-6.795-.696-7.584c1.457-.79 4.13 1.327 5.972 4.726c1.841 3.4 2.153 6.795.696 7.584Z" />
                      <path d="M6.5 7.584a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z" />
                    </g>
                  </svg>{" "}
                </BadgeItem>
              </div>

              <p className=" text-xl sm:text-2xl font-semibold">Backend</p>
              <div className="flex space-x-2">
                <BadgeItem skill="Node.js" color="green">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="currentColor"
                      d="M320.5 572c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8c12.3-4.3 14.8-5.2 27.9-12.7c1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0L508 431.5c1.7-1 2.8-3 2.8-5V213.3c0-2.1-1.1-4-2.9-5.1L323.3 101.7c-1.7-1-4-1-5.7 0L133.1 208.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V231.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V442c0 36.6-20 57.6-54.7 57.6c-10.7 0-19.1 0-42.5-11.6l-48.4-27.9c-12-6.9-19.4-19.8-19.4-33.7V213.3c0-13.8 7.4-26.8 19.4-33.7L301.1 73c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L339.9 566.8c-5.9 3.4-12.6 5.2-19.4 5.2m149.1-210.1c0-39.9-27-50.5-83.7-58c-57.4-7.6-63.2-11.5-63.2-24.9c0-11.1 4.9-25.9 47.4-25.9c37.9 0 51.9 8.2 57.7 33.8c.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6c-52.7 0-84.1 22.2-84.1 59.5c0 40.4 31.3 51.6 81.8 56.6c60.5 5.9 65.2 14.8 65.2 26.7c0 20.6-16.6 29.4-55.5 29.4c-48.9 0-59.6-12.3-63.2-36.6c-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3c0 31.1 16.9 68.2 97.8 68.2c58.4-.1 92-23.2 92-63.4"
                    />
                  </svg>
                </BadgeItem>
                <BadgeItem skill="Express.js" color="gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.493 6.725c.256-.334.652-.53 1.073-.53h.34l-4.392 5.743L22 17.803h-.34a1.35 1.35 0 0 1-1.073-.53l-3.576-4.676l-3.577 4.676a1.35 1.35 0 0 1-1.072.53h-.34l4.485-5.865l-4.391-5.743h.34c.42 0 .817.196 1.072.53l3.482 4.554z"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M5.563 17.146c1.924.702 3.936-.094 4.959-1.647c.2-.305.53-.498.896-.498h.255c-.94 2.437-3.72 3.856-6.363 2.905C3.287 17.178 2 15.179 2 13.029V10.8a5.01 5.01 0 0 1 5.486-4.981c2.593.243 4.521 2.523 4.521 5.127V12.6H2.801v.444c0 1.802 1.069 3.485 2.762 4.102m1.44-10.55a4.21 4.21 0 0 0-4.202 4.202V11.8h8.406v-1a4.21 4.21 0 0 0-4.203-4.204"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                </BadgeItem>
              </div>

              <p className=" text-xl sm:text-2xl font-semibold">UI/styling</p>
              <div className="flex flex-wrap space-x-2">
                <BadgeItem skill="Tailwind CSS" color="teal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 6c-3.6 0-4.833 2.667-5 4c0 0 .819-1.588 2.863-1.588c2.5 0 2.704 3.588 7.204 3.588c3.645 0 4.766-2.483 4.933-3.724c0 0-.78 1.403-2.78 1.403C16.73 9.679 16.413 6 12 6Zm-5 6c-3.6 0-4.833 2.667-5 4c0 0 .819-1.588 2.863-1.588c2.5 0 2.704 3.588 7.204 3.588c3.645 0 4.766-2.483 4.933-3.725c0 0-.78 1.404-2.78 1.404C11.73 15.679 11.413 12 7 12Z"
                    />
                  </svg>{" "}
                </BadgeItem>
              </div>

              <p className=" text-xl sm:text-2xl font-semibold">DataBase</p>
              <div className="flex flex-wrap space-x-2 ">
                <BadgeItem skill="MongoDB" color="green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v19m6-10.773c0 3.273-1.812 4.77-6 9.273c-4.188-4.503-6-6-6-9.273C6 6.773 9.071 4.3 12 2c2.929 2.3 6 4.773 6 9.227"
                    />
                  </svg>
                </BadgeItem>
                <BadgeItem skill="mySql" color="blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 21c-1.427-1.026-3.59-3.854-4-6c-.486.77-1.501 2-2 2c-1.499-.888-.574-3.973 0-6c-1.596-1.433-2.468-2.458-2.5-4C1.15 3.56 4.056 1.73 7 4h1c8.482.5 6.421 8.07 9 11.5c2.295.522 3.665 2.254 5 3.5c-2.086-.2-2.784-.344-3.5 0c.478 1.64 2.123 2.2 3.5 3M9 7h.01"
                    />
                  </svg>
                </BadgeItem>
              </div>

              <p className=" text-xl sm:text-2xl font-semibold">Tools</p>
              <div className="flex space-x-2">
                <BadgeItem skill="Git" color="red">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M15 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-4-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1-1V9m3 2l-2-2m-2-2L9.1 5.1" />
                      <path d="m13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0" />
                    </g>
                  </svg>
                </BadgeItem>
                <BadgeItem skill="GitHub" color="teal">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="32"
                        d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="32;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="10"
                        stroke-dashoffset="10"
                        d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.7s"
                          dur="0.2s"
                          to="0"
                        />
                      </path>
                    </g>
                  </svg>
                </BadgeItem>
              </div>

              <p className=" text-xl sm:text-2xl font-semibold">Framework</p>
              <div className="flex">
                <BadgeItem skill="Next.js" color="black">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"
                    />
                  </svg>
                </BadgeItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heropage;
