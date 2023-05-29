// // old way to cover a react function component
// import React from "react"

// const Section: React.FC<{ title: string}> = ({children, title}) => {
    //     return (
        //         <section>
        //             <h2>{title}</h2>
        //             <p>{children}</p>
        //         </section>
    //     )
// }
        
import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({ children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default Section