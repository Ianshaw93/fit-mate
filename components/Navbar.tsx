import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
// import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image';
import white_logo from '../public/logo/fit_mate_cropped.png'

// type BurgerProps = {
// 	handleClick: (event: React.MouseEvent) => boolean;
// }

// export default function NavComponent(props: BurgerProps) {
export default function NavComponent() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav); // not working??

	return (
		<>
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white">
				<div className="flex-1">
					<a className="text-[#40AAE8] btn btn-ghost normal-case text-xl" href="/">
{/* include padding above and to the left */}
						<Image
						src={white_logo}
						alt="logo"
						width={300}
						height={300}
						/>
					</a>
				</div>
				{/* menu hidden mobile, visible big screen */}
	
			</div>

		</>
	);
}
