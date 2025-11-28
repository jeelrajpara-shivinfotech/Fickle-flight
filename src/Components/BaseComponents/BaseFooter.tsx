import BaseForm from './BaseForm'
import footerLogo from "../../assets/footerLogo.png"
import { footerConstants } from '../../Constants/footerConstants'

export default function BaseFooter() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center bg-[#F3F7FB] py-16 md:py-28 bg-no-repeat min-h-[450px] sm:minh-[500px] md:min-h-[600px] xl:min-h-[800px] footer-bg"
      >
        <div className="space-y-3 font-robotto mb-6 px-2">
          <p className="uppercase text-[#1262AE] font-bold text-base md:text-lg">
            {footerConstants?.newsletter?.heading}
          </p>
          <p className="font-bold text-2xl md:text-4xl">
            {footerConstants?.newsletter?.subheading}
          </p>
        </div>

        <div className="w-full max-w-xl mx-auto flex justify-center items-center px-4">
          <BaseForm
            title={footerConstants?.form?.title}
            namePlaceholder={footerConstants?.form?.namePlaceholder}
            emailPlaceholder={footerConstants?.form?.emailPlaceholder}
            buttonText={footerConstants?.form?.submit}
          />
        </div>
      </div>

      <footer className="w-full -mt-2 text-white bg-linear-to-r from-[#0B5BA8] to-[#299BD8] py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-6 items-start">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src={footerLogo} alt={footerConstants?.alt} className="w-32 md:w-40" />
            </div>

            <p className="text-md leading-relaxed mx-auto md:mx-0">
              {footerConstants?.description}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-2 flex-wrap">
              {footerConstants?.socialMedia?.map((social, index) => (
                <div key={index} className="rounded-full hover:bg-white/30 cursor-pointer transition">
                  <img src={social?.icon} alt={social?.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="border-l border-white/30 h-40"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
            {Object.entries(footerConstants.links).map(([_, items], idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-lg mb-3">
                  {footerConstants.columns[idx]}
                </h3>

                <ul className="space-y-2 text-sm">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}