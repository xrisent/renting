

interface Props{
    width: string
}

export const Logo: React.FC<Props> = props => {
    return <img style={{width: props.width}} src="https://ak-sai.com/wp-content/uploads/logo200.jpg" alt="logo" />
};
