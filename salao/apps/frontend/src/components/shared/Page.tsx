import Footer from './Footer'

export interface PageProps {
    children: React.ReactNode
}
export default function Page(props: PageProps) {
    return (
        <div>
        <div className="flex flex-col content=width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
            <main>{props.children}</main>
            <Footer />
        </div>  </div>
    )
}
