
export default function FiltroRango ({ title, elements, filtro }) {
  const elementsSplit = elements.map(element => element.split('-'))
  console.log(elementsSplit)
  return (
    <>
      <h4>{title}</h4>
      {
        elementsSplit.map((element, index) => {
          if (element.length === 2) {
            return <label key={index}><input type='checkbox' value={element} onClick={() => console.log(element)} /> de R${element[0]} até R${element[1]}</label>
          }
          return <label key={index}><input type='checkbox' value={element} />a partir de R$ {element}</label>
        })
      }
    </>
  )
}
