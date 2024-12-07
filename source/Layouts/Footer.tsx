// Import Images
import Link from 'next/link'

import { FaInstagram } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { RiLinkedinFill } from 'react-icons/ri'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import withControl from '~/Components/helpers/with-control'

const footer = tv({
    base: 'w-full py-2 mobile:hidden',
    variants: {
        bg: {
            transparent: 'bg-transparent',
            primary: 'bg-primary-500',
            secondary: 'bg-secondary-500',
        },
    },
    defaultVariants: {
        bg: 'transparent',
    },
})

type FooterProps = VariantProps<typeof footer>

const Footer = ({ bg = 'transparent' }: FooterProps) => {
    return (
        <footer className={footer({ bg })}>
            <div className="flex items-center justify-content-center px-6 flex-row mobile:flex-col">
                <div className="text-center">
                    <div>
                        <p className="text-xs text-gray-600 font-semibold" style={{ fontSize: "16px" }}>
                            {new Date().getFullYear()} © PawKeepr Sistema Inteligente
                            para Pets Inova Simples LTDA. 49.173.821/0001-19
                        </p>
                        <p className="text-xs mt-2 text-gray-600 font-semibold" style={{ fontSize: "16px" }}>
                            Rua Riachuelo, 1200, São José, 49015-160 Aracaju.
                        </p>
                    </div>
                    <div className="gap-2 p-2 h-full">
                        <Link
                            href="/privacy-policy"
                            className="text-xs text-gray-600 font-semibold mx-1 hover:text-secondary-500"
                            style={{ fontSize: "16px" }}
                        >
                            Política de Privacidade
                        </Link>
                        {' - '}
                        <Link
                            href="/service-terms"
                            className="text-xs text-gray-600 font-semibold mx-1 hover:text-secondary-500"
                            style={{ fontSize: "16px" }}
                        >
                            Termos de Uso
                        </Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <Link
                        href="https://www.instagram.com/pawkeepr.app/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mx-2 text-gray-600 transition-colors duration-300 hover:text-primary-600"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={30} />
                    </Link>

                    <Link
                        href="https://www.facebook.com/mypawkeeper/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600"
                        aria-label="Facebook"
                    >
                        <GrFacebookOption size={30} />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/company/pawkeepr/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-primary-600"
                        aria-label="Github"
                    >
                        <RiLinkedinFill size={30} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default withControl(Footer)
