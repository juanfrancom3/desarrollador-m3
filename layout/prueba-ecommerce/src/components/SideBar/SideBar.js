import { useState } from "react";
import Forms from "./Forms";
import "../../styles/sidebar.css";
import { GrClose } from "react-icons/gr";
import { CartState } from "../../context/Context";


const SideBar = () => {
	const [show, setShow] = useState(false);
	const [showOrder, setShowOrder] = useState(false);	
	const {filterDispatch } = CartState()

	return (
		<>
			<div className="responsive-title">
				<h1>Blusas</h1>
			</div>
			<div className="responsive-menu">
				<div className="div-title" onClick={() => setShow(true)}>
					<h2>Filtrar</h2>
				</div>
				<div className="div-title" onClick={() => setShowOrder(true)}>
					<h2>Ordenar</h2>
				</div>
			</div>
			<div className={showOrder ? "sidebar2" : "sidebar displayB"}>
				<div className="subtitle">
					<h2 className="h2s">ORDENAR</h2>
					<GrClose onClick={() => setShowOrder(false)} className="close-icon" />
				</div>
				<h2
					className="subtitle-options"
					onClick={() =>
						filterDispatch({ type: "SORT_BY_PRICE", payload: "recientes" })
					}
				>
					Mas recientes
				</h2>
				<h2
					className="subtitle-options"
					onClick={() =>
						filterDispatch({ type: "SORT_BY_PRICE", payload: "menor" })
					}
				>
					Menor precio
				</h2>
				<h2
					className="subtitle-options"
					onClick={() =>
						filterDispatch({ type: "SORT_BY_PRICE", payload: "mayor" })
					}
				>
					Mayor precio
				</h2>
			</div>
			<div className={show ? "sidebar2" : "sidebar"}>
				<div className="subtitle">
					<h2 className="h2s">FILTRAR</h2>
					<GrClose onClick={() => setShow(false)} className="close-icon" />
				</div>
				<form>
					<Forms />
				</form>
				<div className="aplicated">
					<a href="/" onClick={(e) => {
						e.preventDefault()
						setShow(false) 
						}}>APLICAR</a>
					<a href="/" className="clear">LIMPIAR</a>
				</div>
			</div>
		</>
	);
};

export default SideBar;
