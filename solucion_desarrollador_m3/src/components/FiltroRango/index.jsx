import './filtroRango.css'
export default function FiltroRango ({ title, elements, filtro }) {
  const elementsSplit = elements.map(element => element.split('-'))
  // console.log(elementsSplit)
  return (
    <div className='filtro-rango'>
      <h4>{title}</h4>
      {
        elementsSplit.map((element, index) => {
          if (element.length === 2) {
            return (
              <label key={index}>
                <input
                  type='checkbox'
                  value={element}
                  onClick={filtro}
                /> de R${element[0]} até R${element[1]}
              </label>
            )
          }
          return (
            <label key={index}>
              <input
                type='checkbox'
                value={element}
                onClick={filtro}
              />a partir de R$ {element}
            </label>
          )
        })
      }
    </div>
  )
}
