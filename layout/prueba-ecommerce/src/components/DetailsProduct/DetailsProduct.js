import {useParams} from "react-router-dom";
import {CartState} from "../../context/Context";
import "../../styles/detailsProdct.css"

const DetailsProduct = () => {
  const {state: {
      products
    }, dispatch} = CartState()
  const {id} = useParams()
  const detail = products.find((product) => product.id === Number(id))
  return (
		<>
			<div className="containerDetails">
				<div className="detailsImage">
					<img src={detail.img} alt="" />
				</div>
				<div className="moreDetails">
					<h1>{detail.title}</h1>
					<span>$R {detail.price}.00</span>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever
					</p>
					<a
						href="/"
						onClick={(e) => {
							e.preventDefault();
							dispatch({ type: "ADD_TO_CART", payload: detail });
						}}
					>
						COMPRAR
					</a>
				</div>
			</div>
			<div className="related">
				<br/>
				{products.slice(0, 5).map((product) => {
					return (
						<div className="relatedItems">
							<h3>{product.title}</h3>
							<img src={product.img} alt="" />
							<h4>$R{product.price}.00</h4>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default DetailsProduct;
