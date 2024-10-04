export const Footer= () => {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Terms'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'Privacy'
        },
        {
            href: 'javascript:void()',
            name: 'About us'
        }
    ]
    return (
        <footer className="pt-10 bg-black/80 mt-3 border-t-2 rounded-t-md border-white/70">
            <div className="max-w-screen-xl mx-auto px-4  text-brand-white md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <img src="/logo.png" className="w-32 sm:mx-auto" />
                    <p>
                        Experience the best hotel booking services in the world
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <a href="/" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Let&apos;s get started
                        </a>
                        
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2022 Float UI Inc. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <li className="text-neutral-300 hover:text-neutral-200/90 duration-150" key={idx}>
                                    <a key={idx} href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}