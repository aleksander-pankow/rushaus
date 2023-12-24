import React from "react";

const BannerList = () => {
  return (
      <>
          <div className={"relative overflow-hidden"}>
              <a hrefLang={""} title={""}>
                  <img
                      src="/images/banners/banner_1.png"
                      alt="My Image"
                      className="w-full hover:scale-110 transition duration-500"
                  />
              </a>
          </div>
          <div className={"relative overflow-hidden"}>
              <a hrefLang={""} title={""}>
                  <img
                      src="/images/banners/banner_2.png"
                      alt="My Image"
                      className="w-full hover:scale-110 transition duration-500"
                  />
              </a>
          </div>
          <div className={"relative overflow-hidden"}>
              <a hrefLang={""} title={""}>
                  <img
                      src="/images/banners/banner_3.png"
                      alt="My Image"
                      className="w-full hover:scale-110 transition duration-500"
                  />
              </a>
          </div>
          <div className={"relative overflow-hidden"}>
              <a hrefLang={""} title={""}>
                  <img
                      src="/images/banners/banner_4.png"
                      alt="My Image"
                      className="w-full hover:scale-110 transition duration-500"
                  />
              </a>
          </div>
      </>
  )
}

export default BannerList