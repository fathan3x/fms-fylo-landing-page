import "@fontsource-variable/raleway";
import "@fontsource-variable/open-sans";
import { cn } from "cn";

import logo from "./assets/logo.svg";
import bgDesktop from "./assets/bg-curvy-desktop.svg";
import illustrationIntro from "./assets/illustration-intro.png";
import illustrationStayProductive from "./assets/illustration-stay-productive.png";
import accessAnywhere from "./assets/icon-access-anywhere.svg";
import security from "./assets/icon-security.svg";
import collaboration from "./assets/icon-collaboration.svg";
import anyFile from "./assets/icon-any-file.svg";
import bgQuotes from "./assets/bg-quotes.png";
import sattish from "./assets/profile-1.jpg";
import bruce from "./assets/profile-2.jpg";
import iva from "./assets/profile-3.jpg";
import email from "./assets/icon-email.svg";
import phone from "./assets/icon-phone.svg";

export function App() {
  const style = {
    "font-raleway": "font-['Raleway_Variable']",
    "font-open-sans": "font-['Open_Sans_Variable']",
  };
  return (
    <>
      <main
        className={cn(
          style["font-open-sans"],
          "bg-[hsl(217,28%,15%)] text-white text-[14px] relative",
        )}
      >
        <header className="px-6 py-10 max-w-360 mx-auto flex items-center justify-between">
          <div className="max-w-38">
            <img src={logo} className="w-full h-full" />
          </div>
          <nav>
            <ul className="flex gap-10 text-white/80">
              <li>
                <a
                  href="#"
                  className="nav-link hover:text-white hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link hover:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link hover:text-white hover:underline"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="px-6 py-20 flex flex-col items-center justify-center gap-10 relative">
          <div className="max-w-150 mx-auto">
            <img
              src={illustrationIntro}
              className="w-full h-full relative z-2"
            />
          </div>
          <h2
            className={cn(
              style["font-raleway"],
              "text-center text-4xl max-w-2xl mx-auto relative z-2",
            )}
            style={{ fontWeight: "700" }}
          >
            All your files in one secure location, accessible anywhere.
          </h2>
          <div className="flex flex-col items-center justify-center gap-6 relative z-2">
            <p className="text-center max-w-lg text-base mx-auto text-white/70">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button
              className="bg-linear-to-r from-[hsl(176,68%,64%)] hover:from-[hsl(187,62%,72%)] to-[hsl(198,60%,50%)] hover:to-[hsl(187,62%,72%)] py-3 px-3 w-50 rounded-full text-sm cursor-pointer "
              style={{ fontWeight: "700" }}
            >
              <p>Get Started</p>
            </button>
          </div>
          <img src={bgDesktop} className="w-full absolute bottom-0 z-1" />
        </section>
        <section className="bg-[hsl(218,28%,13%)]">
          <div className="px-6 py-20 grid lg:grid-cols-2 lg:grid-rows-2 gap-x-30 gap-y-15 max-w-4xl mx-auto relative z-2">
            <article className="flex flex-col items-center justify-center gap-4">
              <div className="w-24">
                <img src={accessAnywhere} className="w-full h-full" />
              </div>
              <div className="space-y-2">
                <h3
                  className={cn(style["font-raleway"], "text-center text-xl")}
                  style={{ fontWeight: "700" }}
                >
                  Access your files, anywhere
                </h3>
                <p className="text-center text-white/70">
                  The ability to use a smartphone, tablet, or computer to access
                  your account means your files follow you everywhere.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-center justify-center gap-4">
              <div className="w-24">
                <img src={security} className="w-full h-full" />
              </div>
              <div className="space-y-2">
                <h3
                  className={cn(style["font-raleway"], "text-center text-xl")}
                  style={{ fontWeight: "700" }}
                >
                  Security you can trust
                </h3>
                <p className="text-center text-white/70">
                  2-factor authentication and user-controlled encryption are
                  just a couple of the security features we allow to help secure
                  your files.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-center justify-center gap-4">
              <div className="w-24">
                <img src={collaboration} className="w-full h-full" />
              </div>
              <div className="space-y-2">
                <h3
                  className={cn(style["font-raleway"], "text-center text-xl")}
                  style={{ fontWeight: "700" }}
                >
                  Real-time collaboration
                </h3>
                <p className="text-center text-white/70">
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email attachments
                  required.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-center justify-center gap-4">
              <div className="w-24">
                <img src={anyFile} className="w-full h-full" />
              </div>
              <div className="space-y-2">
                <h3
                  className={cn(style["font-raleway"], "text-center text-xl")}
                  style={{ fontWeight: "700" }}
                >
                  Store any type of file
                </h3>
                <p className="text-center text-white/70">
                  Whether you're using sharing holidays photos or work
                  documents, Fylo has you covered allowing for all file types to
                  be securely stored and shared.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="bg-[hsl(218,28%,13%)]">
          <div className="px-6 py-20 grid lg:grid-cols-2 max-w-360 mx-auto relative z-2">
            <div>
              <img src={illustrationStayProductive} className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center gap-6 max-w-lg">
              <h2
                className={cn(style["font-raleway"], "text-4xl max-w-sm")}
                style={{ fontWeight: "700" }}
              >
                Stay productive, wherever you are
              </h2>
              <div className="space-y-2 text-white/70 text-base">
                <p>
                  Never let location be an issue when accessing your files. Fylo
                  has you covered for all of your file storage needs.
                </p>
                <p>
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email attachments
                  required.
                </p>
                <div className="text-[hsl(176,68%,64%)] hover:text-white border-b border-[hsl(176,68%,64%)] hover:border-white flex items-center gap-2 w-fit cursor-pointer">
                  <p>See how fylo works</p>
                  <div className="w-4 h-4">
                    <svg
                      viewBox="0 0 56 56"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 41.6874 27.9766 C 41.6874 28.5859 41.4530 29.0547 40.9374 29.5703 L 31.9609 38.5234 C 31.6093 38.8516 31.1405 39.0859 30.5780 39.0859 C 29.4765 39.0859 28.6093 38.2422 28.6093 37.1406 C 28.6093 36.5547 28.8436 36.0625 29.2187 35.7109 L 32.5234 32.4766 L 35.7109 29.7812 L 30.0624 29.9922 L 16.3280 29.9922 C 15.1327 29.9922 14.3358 29.1484 14.3358 27.9766 C 14.3358 26.8047 15.1327 25.9609 16.3280 25.9609 L 30.0624 25.9609 L 35.6874 26.1953 L 32.5234 23.5234 L 29.2187 20.2422 C 28.8671 19.9141 28.6093 19.3984 28.6093 18.8359 C 28.6093 17.7344 29.4765 16.8906 30.5780 16.8906 C 31.1405 16.8906 31.6093 17.0781 31.9609 17.4297 L 40.9374 26.4063 C 41.4765 26.9453 41.6874 27.4141 41.6874 27.9766 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[hsl(218,28%,13%)]">
          <div className="px-6 pt-20 pb-100 relative grid lg:grid-cols-3 gap-10 max-w-360 mx-auto">
            <img src={bgQuotes} className="absolute top-10 left-0 z-1" />
            <div className="px-8 pt-12 pb-10 bg-[hsl(222,29%,18%)] flex flex-col gap-10 relative z-2">
              <p className="text-base">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div className="flex gap-4">
                <img src={sattish} className="w-10 h-10 rounded-full" />
                <div>
                  <p
                    className={cn(style["font-raleway"])}
                    style={{ fontWeight: "700" }}
                  >
                    Sattish Patel
                  </p>
                  <p className="text-xs text-white/70">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div className="px-8 pt-12 pb-10 bg-[hsl(222,29%,18%)] flex flex-col gap-10 relative z-2">
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum, iste in error, reprehenderit blanditiis quae culpa
                illum obcaecati magnam debitis vel ad.
              </p>
              <div className="flex gap-4">
                <img src={bruce} className="w-10 h-10 rounded-full" />
                <div>
                  <p
                    className={cn(style["font-raleway"])}
                    style={{ fontWeight: "700" }}
                  >
                    Bruce Mckenzie
                  </p>
                  <p className="text-xs text-white/70">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div className="px-8 pt-12 pb-10 bg-[hsl(222,29%,18%)] flex flex-col gap-10 relative z-2">
              <p className="text-base">
                Aliquam similique illo cum! Quibusdam natus voluptas voluptatum
                similique sequi. Qui totam modi consectetur praesentium eveniet!
                Ratione ad consectetur quo alias cum distinctio.
              </p>
              <div className="flex gap-4">
                <img src={iva} className="w-10 h-10 rounded-full" />
                <div>
                  <p
                    className={cn(style["font-raleway"])}
                    style={{ fontWeight: "700" }}
                  >
                    Iva Boyd
                  </p>
                  <p className="text-xs text-white/70">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="absolute -bottom-40 w-full p-6">
          <div className="max-w-4xl mx-auto bg-[hsl(222,26%,15%)] p-15 shadow-black shadow-sm rounded-lg space-y-8">
            <h2
              className={cn(style["font-raleway"], "text-3xl text-center")}
              style={{ fontWeight: "700" }}
            >
              Get early access today
            </h2>
            <p className="text-center max-w-2xl text-base mx-auto text-white/70">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                alert("pew");
              }}
              className="flex flex-col lg:flex-row items-start gap-6"
            >
              <div className="w-full">
                <input
                  required
                  type="email"
                  placeholder="email@example.com"
                  className="bg-white text-black flex-1 pl-10 pr-4 py-4 rounded-full placeholder:text-black/30 w-full peer"
                />
                <p className="hidden peer-invalid:block pl-10 text-red-500 pt-2">
                  Please enter a valid email address
                </p>
              </div>
              <button
                type="submit"
                className="bg-linear-to-r from-[hsl(176,68%,64%)] hover:from-[hsl(187,62%,72%)] to-[hsl(198,60%,50%)] hover:to-[hsl(187,62%,72%)] py-3 px-3 w-full lg:w-50 rounded-full text-sm cursor-pointer"
                style={{ fontWeight: "700" }}
              >
                <p>Get Started</p>
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="p-10 bg-[hsl(216,53%,9%)] text-white/70 flex flex-col justify-center min-h-100">
        <div className="space-y-10 lg:max-w-360 lg:mx-auto pt-45 py-20">
          <div>
            <img src={logo} />
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* <div className="basis-1/2 flex flex-col lg:flex-row items-start gap-4">
              <div className="pt-1.5 shrink-0">
                <img src={location} />
              </div>
              <p className="w-1/2">Lorem ipsum dolor, sit amet.</p>
              <div className="space-y-4 shrink-0">
                <div className="flex items-center gap-6">
                  <img src={phone} />
                  <p>+1-543-123-4567</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={email} />
                  <p>example@fylo.com</p>
                </div>
              </div>
            </div> */}
            <div className="flex flex-col lg:flex-row shrink-0">
              <div className="flex items-start gap-6">
                <div className="shrink-0 pt-1 w-4.5 h-4.5">
                  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z"
                      fill="#FFF"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className="w-1/2">Lorem ipsum dolor, sit amet.</p>
              </div>
              <div className="space-y-4 shrink-0">
                <div className="flex items-center gap-6">
                  <img src={phone} />
                  <p>+1-543-123-4567</p>
                </div>
                <div className="flex items-center gap-6">
                  <img src={email} />
                  <p>example@fylo.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <a href="#" className="block w-fit hover:text-white">
                About Us
              </a>
              <a href="#" className="block w-fit hover:text-white">
                Jobs
              </a>
              <a href="#" className="block w-fit hover:text-white">
                Press
              </a>
              <a href="#" className="block w-fit hover:text-white">
                Blog
              </a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block w-fit hover:text-white">
                Contact Us
              </a>
              <a href="#" className="block w-fit hover:text-white">
                Terms
              </a>
              <a href="#" className="block w-fit hover:text-white">
                Privacy
              </a>
            </div>
            <div className="flex justify-center lg:justify-normal items-center gap-6 w-full lg:w-fit">
              <div className="w-6 h-6 fill-white hover:fill-[hsl(176,68%,64%)] cursor-pointer">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </div>
              <div className="w-6 h-6 fill-white hover:fill-[hsl(176,68%,64%)] cursor-pointer">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
                </svg>
              </div>
              <div className="w-6 h-6 fill-white hover:fill-[hsl(176,68%,64%)] cursor-pointer">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
