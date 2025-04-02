import Image from "next/image";
import logo from '../../../public/images/logo.jpg'


interface Props{
    width: string
}

export const Logo: React.FC<Props> = props => {
    return <div className="Logo">
    <Image style={{width: props.width, height: 'fit-content'}} src={logo} alt="logo" width={100} height={35}/>
    <h5>KHaGaN Auto</h5>
    </div>
    
};
