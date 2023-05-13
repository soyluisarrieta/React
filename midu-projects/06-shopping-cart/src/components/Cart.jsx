import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'

export function Cart () {
  const cartCheckboxId = useId()
  return (
    <>
      <label htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>

      <input type='checkbox' id={cartCheckboxId} />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/30/thumbnail.jpg' alt='iPhone' />
            <div>
              <strong>iPhone</strong> - $123
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
