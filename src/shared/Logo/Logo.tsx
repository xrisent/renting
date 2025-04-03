import Image from "next/image";
import logo from '../../../public/images/logobg.png'
import { useRouter } from "next/navigation";


interface Props{
    width: string
}

export const Logo: React.FC<Props> = props => {
    const router = useRouter();

    return <div className="Logo" onClick={()=>router.push('/')}>
    <Image style={{width: props.width, height: 'fit-content', background: "transparent"}} src={logo} alt="logo" width={100} height={35}/>
    <h5>KHaGaN Auto</h5>
    </div>
    
};
