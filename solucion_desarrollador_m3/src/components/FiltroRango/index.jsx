import './filtroRango.css'
export default function FiltroRango ({ title, elements, filtro, classN }) {
  const elementsSplit = elements.map(element => element.split('-'))
  // console.log(elementsSplit)
  const classA = `filtro-rango ${classN}`
  return (
    <div className={classA}>
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
                />
                <span className='label-text'>
                  de R${element[0]} até R${element[1]}
                </span>
              </label>
            )
          }
          return (
            <label key={index}>
              <input
                type='checkbox'
                value={element}
                onClick={filtro}
              />
              <span className='label-text'>
                a partir de R$ {element}
              </span>
            </label>
          )
        })
      }
    </div>
  )
}
