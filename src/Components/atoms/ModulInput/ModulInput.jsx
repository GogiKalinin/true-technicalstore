import React from 'react'
import './ModulInput.sass'

export const ModulInput = () => {
    return (
        <form>
              <input
                className="ModulInput"
                type={"text"}
                placeholder={"Search entiere store here..."}
              ></input>
        </form>
    )
}