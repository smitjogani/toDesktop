import { GoFileCode } from "react-icons/go";
import { FaHandRock } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";

const Home = () => {
  return (
    <>
      <main className="mt-[52px] overflow-x-hidden">
        <div id="hero" class="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent px-1">
          <div id="hero-container" class="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl">
            <div id="version-text" class="flex items-center my-6 gap-2 border border-yellow-300 
                bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group">
              <div class="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
              <p class="font-display font-medium text-yellow-600">v0.21.1: <span class="text-yellow-800">Find-in-page bug fixes</span></p>
              <i class="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
            </div>
            <div id="hero-features" class="hidden sm:flex gap-8 my-6">
              <div class="flex justify-center gap-2 items-center text-gray-500">
                <GoFileCode size={24} />
                <p>Code Optional</p>
              </div>
              <div class="flex justify-center gap-2 items-center text-gray-500">
                <FaHandRock size={24} />
                <p>Drag & drop builder</p>
              </div>
              <div class="flex justify-center gap-2 items-center text-gray-500">
                <IoIosLaptop size={24} />
                <p>Windows, Mac, Linux</p>
              </div>
            </div>
            <h1 class="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">Web app to desktop app in minutes</h1>
            <p class="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
            <div id="buttons-container" class="mt-12 flex gap-4 flex-col sm:flex-row">
              <button class="px-8 py-3 font-semibold rounded-lg text-white bg-[primary] shadow-sm bg-[#3238f2] hover:bg-opacity-90">Download now</button>
              <button class="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">Read Docs</button>
            </div>
          </div>

          <div id="companies-container" className="flex flex-col gap-4 ">
            <div id="copanies-title" className="flex justify-center gap-2 items-center">
              <img className="translate-y-2" src="/asset 2.svg" alt="" />
              <span className="font-medium text-xl">APP POWERED BY TODESKTOP</span>
              <img className="-scale-x-100 translate-y-2" src="/asset 2.svg" alt="" />
            </div>

            <div id="lines-group" class="flex flex-col gap-4">
              <div id="line1" class="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 3.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 4.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">LifeAt</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 5.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Convy</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 6.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Morgen</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 7.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Campsite</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 8.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Rise</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 9.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">ClickUp</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 10.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Notion</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 11.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Sunsama</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 12.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Beeper</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 13.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Cal</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 14.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Webstudio</span>
                </div>

              </div>
              <div id="line2" class="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear">
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 15.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 16.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 17.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 18.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 19.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 20.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Moises</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 21.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Basedash</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 22.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Cursor</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 23.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Linear</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 24.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Voiceflow</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 25.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Kitemaker</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 26.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Cron</span>
                </div>
              </div>
              <div id="line3" class="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 15.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 16.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 17.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 3.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 4.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 5.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 12.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 13.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 14.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 24.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 25.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
                <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img src="/asset 26.png" class="w-12 h-12 md:w-16 md:h-16" alt="" />
                  <span class="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
                </div>
              </div>
            </div>
          </div>

          <div id="steps" class="flex flex-col gap-6 container mt-20 px-2">
            <h2 class="text-5xl sm:font-semibold mb-14">How it works</h2>
            <div id="step1" class="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
              <div class="flex flex-col gap-6 lg:w-1/2">
                <span class="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 1</span>
                <h3 class="text-4xl">Bootstrap straight from your web app</h3>
                <p class="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                <ul class="grid grid-cols-2 gap-2">
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                </ul>
              </div>
              <div class="pt-12">
                <img src="/asset 66.svg" alt="" />
              </div>
            </div>
            <div id="step2" class="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
              <div class="flex flex-col gap-6 lg:w-1/2">
                <span class="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 2</span>
                <h3 class="text-4xl">Bootstrap straight from your web app</h3>
                <p class="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                <ul class="grid grid-cols-2 gap-2">
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                </ul>
              </div>
              <div class="pt-12">
                <img src="/asset 66.svg" alt="" />
              </div>
            </div>
            <div id="step3" class="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
              <div class="flex flex-col gap-6 lg:w-1/2">
                <span class="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step 3</span>
                <h3 class="text-4xl">Bootstrap straight from your web app</h3>
                <p class="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                <ul class="grid grid-cols-2 gap-2">
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                  <li class="flex gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <a class="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="">Multiple windows</a>
                  </li>
                </ul>
              </div>
              <div class="pt-12">
                <img src="/asset 66.svg" alt="" />
              </div>
            </div>
          </div>


          <div id="features-line" class="container mt-0 lg:mt-4 mb-10">
            <div class=" rounded-lg overflow-hidden flex justify-center p-4">
              <div id="line4" class="flex gap-5 p-6">
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Download Analytics</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Custom Menus</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Multi-window support</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Trays</h3>
                <span>•</span>
                <h3 class="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">Deep Linking</h3>
              </div>
            </div>
          </div>


          <div id="testimonials" class="container px-2">
            <h2 class="text-5xl sm:font-semibold mb-14">Customer stories</h2>
            <div class="rounded-xl border flex flex-col lg:flex-row items-end">
              <div class="flex flex-col gap-12 p-8">
                <div class="h-4 w-fit">
                  <img src="/asset 44.svg" alt="" />
                </div>
                <h3 class="text-xl leading-relaxed">ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                <div id="tag-container" class="flex gap-3 flex-wrap">
                  <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <i class="fa-solid fa-check"></i>
                    <span class="font-display font-medium">Chromeless UI</span>
                  </div>
                  <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <i class="fa-solid fa-check"></i>
                    <span class="font-display font-medium">Native spellcheck</span>
                  </div>
                  <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <i class="fa-solid fa-check"></i>
                    <span class="font-display font-medium">Task time in menubar</span>
                  </div>
                  <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <i class="fa-solid fa-check"></i>
                    <span class="font-display font-medium">Notification count in the dock</span>
                  </div>
                  <div class="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                    <i class="fa-solid fa-check"></i>
                    <span class="font-display font-medium">Global hotkey to create task</span>
                  </div>
                </div>
                <p class="text-lg font-light text-gray-500">“ToDesktop provided us with a <span class="text-gray-800">polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span class="text-gray-800">new and improved features</span> to our customers within days.”</p>
                <div id="user-card" class="flex gap-4">
                  <div class="w-12">
                    <img src="/asset 45.jpeg" class="rounded-full" alt="" />
                  </div>
                  <div class="flex flex-col">
                    <h3>Zeb Evans</h3>
                    <p class="text-gray-500">Founder & CEO, <a href="#" class="anchor-hover">ClickUp</a> </p>
                  </div>
                </div>
              </div>
              <div class="">
                <img src="/asset 46.png" class="pl-12" alt="" />
              </div>
            </div>
            <div class="flex flex-col lg:flex-row justify-between gap-4 mt-6">
              <div class="rounded-2xl gradient-hover-outer group">
                <div class="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                      <i class="fa-solid fa-code text-indigo-800"></i>
                    </div>
                    <h3 class="text-2xl font-semibold">Native APIs</h3>
                  </div>
                  <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                  <div class="flex gap-4">
                    <div class="flex">
                      <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                        <img src="/asset 47.png" class="min-w-16 min-h-16" alt="" />
                      </div>
                      <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                        <img src="/asset 48.jpeg" alt="" />
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <h3>Rick Pastoor</h3>
                      <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                    </div>
                  </div>

                </div>

              </div>
              <div class="rounded-2xl gradient-hover-outer group">
                <div class="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                      <i class="fa-solid fa-code text-indigo-800"></i>
                    </div>
                    <h3 class="text-2xl font-semibold">Native APIs</h3>
                  </div>
                  <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                  <div class="flex gap-4">
                    <div class="flex">
                      <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                        <img src="/asset 47.png" class="min-w-16 min-h-16" alt="" />
                      </div>
                      <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                        <img src="/asset 48.jpeg" alt="" />
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <h3>Rick Pastoor</h3>
                      <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                    </div>
                  </div>

                </div>

              </div>
              <div class="rounded-2xl gradient-hover-outer group">
                <div class="rounded-2xl p-6 gradient-hover-inner flex flex-col gap-6">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                      <i class="fa-solid fa-code text-indigo-800"></i>
                    </div>
                    <h3 class="text-2xl font-semibold">Native APIs</h3>
                  </div>
                  <p class="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                  <div class="flex gap-4">
                    <div class="flex">
                      <div class="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                        <img src="/asset 47.png" class="min-w-16 min-h-16" alt="" />
                      </div>
                      <div class="w-12 h-12 rounded-full overflow-hidden border border-white">
                        <img src="/asset 48.jpeg" alt="" />
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <h3>Rick Pastoor</h3>
                      <a href="#" class="anchor-hover w-fit text-gray-500">Rise</a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div class="rounded-2xl flex flex-col bg-black lg:flex-row mt-12 pt-6 lg:pt-10">
              <div class="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8">
                <span class="text-gray-400 font-display font-medium">READY TO START BUILDING?</span>
                <h2 class="text-4xl text-white leading-tight lg:text-5xl">Create your desktop app for free*</h2>
                <p class="text-lg font-light text-gray-400 lg:text-xl">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
                <button class="bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
                  <i class="fa-solid fa-download "></i>
                  <span>Download ToDestop Builder</span>
                </button>
                <p class="text-gray-400 text-xs italic leading-tight">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
              </div>
              <div class="lg:w-1/2">
                <img src="/asset 46.png" class="pl-12" alt="" />
              </div>
            </div>
          </div>

          <div id="pricing" class="container px-2">
            <h2 class="text-5xl sm:font-semibold my-14">Choose a plan that fits your needs</h2>
            <div class="flex flex-col lg:flex-row mt-6 gap-6">
              <div class="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-100">
                <h3 class="text-4xl">Free</h3>
                <p class="text-lg font-light">For personal use or testing your app before deploying to customers with free of cost.</p>
                
                <p class="uppercase">Key Features</p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-xmark text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-xmark text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  
                </ul>
                <button class="border border-black px-8 py-3 text-primary rounded-lg hover:border-gray-300 font-display font-medium">
                  Read Docs
                </button>
              </div>
              <div class="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-100">
                <h3 class="text-4xl">Essential</h3>
                <p class="text-lg font-light">For simple desktop apps.</p>
                <p class="text-lg font-light"><span class="text-2xl font-semibold">$99</span>/month</p>
                <p class="uppercase">Key Features</p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-xmark text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-xmark text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                </ul>
                <button class="border border-black px-8 py-3 text-primary rounded-lg hover:border-gray-400 font-display font-medium">
                  Read Docs
                </button>
              </div>
              <div class="border flex-1 relative rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-100">
                <p class="text-blue-800 text-sm bg-indigo-100 rounded-full w-fit px-4 py-2 font-display font-semibold absolute top-0 right-8 -translate-y-1/2">Most Popular</p>
                <h3 class="text-4xl">Professional</h3>
                <p class="text-lg font-light">For sophisticated desktop apps.</p>
                <p class="text-lg font-light"><span class="text-2xl font-semibold">$99</span>/month</p>
                <p class="uppercase">Key Features</p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-check text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-xmark text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                  <li class="flex items-center gap-4">
                    <i class="fa-solid fa-xmark text-gray-500"></i>
                    <span class="text-lg font-light text-gray-800">Free for personal use</span>
                  </li>
                </ul>
                <button class="px-8 py-3 text-white bg-[#3238f2] rounded-lg hover:bg-opacity-90 font-display font-medium">
                  Read Docs
                </button>
              </div>
            </div>
          </div>

          <div id="faq" class="container px-2">
            <h2 class="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">FAQs</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
              <div class="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt class="cursor-pointer flex justify-between items-center" aria-controls="faq-1">
                  <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
                  <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                </dt>
                <dd id="faq-1" class="hidden text-lg font-light mt-6">
                  <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                </dd>
              </div>
              <div class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt class="flex justify-between items-center" aria-controls="faq-2">
                  <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
                  <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                </dt>
                <dd id="faq-2" class="hidden text-lg font-light mt-6">
                  <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                </dd>
              </div>
              <div class="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt class="cursor-pointer flex justify-between items-center" aria-controls="faq-3">
                  <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
                  <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                </dt>
                <dd id="faq-3" class="hidden text-lg font-light mt-6">
                  <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                </dd>
              </div>
              <div class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt class="flex justify-between items-center" aria-controls="faq-4">
                  <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
                  <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                </dt>
                <dd id="faq-4" class="hidden text-lg font-light mt-6">
                  <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                </dd>
              </div>
              <div class="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt class="cursor-pointer flex justify-between items-center" aria-controls="faq-5">
                  <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
                  <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                </dt>
                <dd id="faq-5" class="hidden text-lg font-light mt-6">
                  <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                </dd>
              </div>
              <div class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
                <dt class="flex justify-between items-center" aria-controls="faq-6">
                  <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
                  <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                </dt>
                <dd id="faq-6" class="hidden text-lg font-light mt-6">
                  <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer class="container mt-6 px-2">
        <div class="rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
          <a href="#" class="font-light font-display">Documentation</a>
          <div class="flex gap-8 text-lg">
            <a href="#" class="text-gray-600 hover:text-gray-900"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="text-gray-600 hover:text-gray-900"><i class="fa-brands fa-github"></i></a>
          </div>
          <a href="#" id="brand" class="flex gap-2 items-center flex-1">
            <img class="object-cover max-w-12 max-h-12" src="/asset0.png" alt="Logo" />
            <span class="text-lg font-medium font-display">ToDesktop</span>
          </a>
        </div>
        <div id="sub-footer" class="flex flex-col gap-6 items-center justify-center my-12">
          <div class="flex gap-2 items-center ">
            <img class="w-4 h-4" src="/asset 54.svg" alt="Y-combinator" />
            <p class="text-sm text-gray-600">A Y Combinator company.</p>
          </div>
          <p class="text-sm text-gray-400">© 2024 ToDesktop, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home