import './Banner.scss'

interface Props {
    image: string
    h3: string
}

export const Banner: React.FC<Props> = props => {
    return (
        <section id="bannerComponent" style={{backgroundImage: `url(${props.image})`}}>
            <div className="container">
                <div className="bannerComponent__box">
                    <h1>{props.h3}</h1>
                </div>
            </div>
        </section>
    )
};