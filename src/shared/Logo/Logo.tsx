import Image from "next/image";
import logo from '../../../public/images/logobg.ico';
import { useRouter } from "next/navigation";

interface Props {
  width: string;
  header: boolean;
}

export const Logo: React.FC<Props> = ({ width, header }) => {
  const router = useRouter();

  return (
    <div className="Logo" onClick={() => router.push('/')}>
      <Image
        src={logo}
        alt="logo"
        width={parseInt(width, 10)}
        height={70}
        style={{ background: "transparent" }}
      />
      {header?<h1>KHaGaN Auto</h1>:<h5>KHaGaN Auto</h5>}
    </div>
  );
};
