import './Banner.scss'
import { useTranslations } from 'next-intl'

interface Props {
    image: string
    page: string
}

export const Banner: React.FC<Props> = props => {
    const t = useTranslations(props.page)

    return (
        <section id="bannerComponent" style={{backgroundImage: `url(${props.image})`}}>
            <div className="container">
                <div className="bannerComponent__box">
                    <h1>{t("name")}</h1>
                </div>
            </div>
        </section>
    )
};
