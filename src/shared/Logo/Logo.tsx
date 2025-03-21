import Image from "next/image";


interface Props{
    width: string
}

export const Logo: React.FC<Props> = props => {
    return <Image style={{width: props.width, height: 'fit-content'}} src="https://ak-sai.com/wp-content/uploads/logo200.jpg" alt="logo" width={100} height={35}/>
};
