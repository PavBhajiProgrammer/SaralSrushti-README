import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-grey-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full">
            <div className="relative h-full">
            <svg
                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
                />
              </svg>
            </div>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="max-w-7xl mx-auto sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link href={"/"}   />
                        <img className="h-8 mt-1 w-auto cursor-pointer" src="readme.svg" />
                      <p className="text-gray-800 ml-2 -mb-2 text-md">SaralSrushti Readme Creater</p>
                    </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-grey-800"></div>
    </div>
  )
}
