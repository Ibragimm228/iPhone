import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{' '}
            <a href="#" className="underline text-blue hover:text-blue-600 transition-colors">
              Find an Apple Store{' '}
            </a>
            or{' '}
            <a href="#" className="underline text-blue hover:text-blue-600 transition-colors">
              other retailer
            </a>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call <a href="tel:000800-040-1966" className="hover:underline">000800-040-1966</a>
          </p>
        </div>

        <hr className="border-neutral-700 my-5" />

        <div className="flex md:flex-row flex-col md:items-center justify-between gap-4">
          <p className="font-semibold text-gray text-xs">Copyright © 2024 Apple Inc. All rights reserved.</p>
          <nav className="flex flex-wrap gap-2">
            {footerLinks.map((link, i) => (
              <React.Fragment key={link}>
                <a href="#" className="font-semibold text-gray text-xs hover:underline">
                  {link}
                </a>
                {i !== footerLinks.length - 1 && (
                  <span className="text-gray text-xs">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer